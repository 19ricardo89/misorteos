const fs = require('fs');
const path = require('path');

// --- Función Auxiliar para leer los prompts de forma segura ---
const readPromptFromFile = (fileName) => {
    const promptDirectory = path.resolve(__dirname, '..', 'Prompt');
    const filePath = path.join(promptDirectory, fileName);
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error(`Error al leer el archivo de prompt: ${filePath}`, error);
        throw new Error(`No se pudo encontrar o leer el prompt: ${fileName}`);
    }
};

// --- Función para llamar a la API de Gemini ---
const callGeminiAPI = async (prompt, model = 'gemini-1.5-flash', base64Data = null) => { // <-- CAMBIO 1: quitado '-latest' del modelo por defecto
    const fetch = (await import('node-fetch')).default;
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
        throw new Error("La clave de API de Gemini no está configurada.");
    }
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;

    const payload = {
        contents: [{ role: "user", parts: base64Data ? [{ text: prompt }, { inlineData: { mimeType: "image/jpeg", data: base64Data.split(',')[1] } }] : [{ text: prompt }] }],
        safetySettings: [
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
        ]
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok || !data.candidates || data.candidates.length === 0) {
            const blockReason = data.promptFeedback?.blockReason;
            if (blockReason) throw new Error(`Llamada a la API bloqueada por seguridad: ${blockReason}`);
            console.error("Respuesta de error de Gemini:", JSON.stringify(data));
            throw new Error(`Error de la API de Gemini: ${data.error?.message || 'Respuesta inválida.'}`);
        }
        
        const candidate = data.candidates[0];
        if (candidate.finishReason && candidate.finishReason !== "STOP") {
             throw new Error(`La IA finalizó por una razón inesperada: ${candidate.finishReason}.`);
        }
        if (!candidate.content?.parts?.[0]?.text) {
            console.error("La respuesta de la IA no tiene el formato de texto esperado:", JSON.stringify(candidate));
            throw new Error("La IA devolvió una respuesta vacía o con un formato incorrecto.");
        }

        const text = candidate.content.parts[0].text;
        try {
            return JSON.parse(text.replace(/```json/g, '').replace(/```/g, '').trim());
        } catch (parseError) {
            console.error("Error al parsear el JSON de la IA. Texto recibido:", text);
            throw new Error("La respuesta de la IA no es un JSON válido.");
        }

    } catch (error) {
        console.error("Error detallado en callGeminiAPI:", error);
        throw error;
    }
};

// --- Handler Principal de la Función de Netlify ---
exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
    
    try {
        const { base64Data } = JSON.parse(event.body);
        if (!base64Data) {
            return { statusCode: 400, body: JSON.stringify({ error: 'No se proporcionó la imagen en formato base64.' }) };
        }

        // === PASO 1: EXTRACCIÓN INICIAL ===
        const extractorPrompt = readPromptFromFile('data_extractor.txt');
        const extractedData = await callGeminiAPI(extractorPrompt, 'gemini-1.5-flash', base64Data);
        const { raw_text, visual_description } = extractedData;

        // === PASO 2: PREPARACIÓN Y EJECUCIÓN PARALELA DE TODOS LOS EXPERTOS ===
        const fechaFormateada = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
        
        const dateInputText = `${readPromptFromFile('date_expert.txt').replace('${fechaFormateada}', fechaFormateada)}\n\n# TEXTO A ANALIZAR:\n${raw_text}`;
        const prizeInputText = `${readPromptFromFile('prize_expert.txt')}\n\n# TEXTO A ANALIZAR:\n${raw_text}\n\n# DESCRIPCIÓN VISUAL A CONSIDERAR:\n${visual_description}`;
        const accountsInputText = `${readPromptFromFile('accounts_expert.txt')}\n\n# TEXTO A ANALIZAR:\n${raw_text}`;
        
        const datePromise = callGeminiAPI(dateInputText, 'gemini-1.5-flash');
        const prizePromise = callGeminiAPI(prizeInputText, 'gemini-1.5-flash');
        const accountsPromise = callGeminiAPI(accountsInputText, 'gemini-1.5-flash');

        const priceRegex = /(\d{1,5}(?:[.,]\d{1,2})?)\s*€/;
        const priceMatch = raw_text.match(priceRegex);
        let pricePromise;

        if (priceMatch) {
            pricePromise = Promise.resolve({ 
                price: priceMatch[1].replace(',', '.') + '€',
                appraisal_notes: "Valor extraído directamente del texto." 
            });
        } else {
            pricePromise = prizePromise.then(prizeResult => {
                let appraiserPrompt = readPromptFromFile('price_appraiser.txt');
                appraiserPrompt = appraiserPrompt.replace('${prize_name}', prizeResult.prize);
                appraiserPrompt = appraiserPrompt.replace('${accounts_list}', (prizeResult.accounts || []).join(', '));
                return callGeminiAPI(appraiserPrompt, 'gemini-1.5-flash');
            });
        }

        const [dateResult, prizeResult, accountsResult, priceResult] = await Promise.all([
            datePromise,
            prizePromise,
            accountsPromise,
            pricePromise
        ]);

        // === PASO 3: ENSAMBLAJE PRELIMINAR ===
        const preliminaryResult = { 
            ...dateResult, 
            ...prizeResult, 
            ...accountsResult, 
            ...priceResult 
        };

        // =================================================================
        // PASO 4: LLAMADA AL SUPERVISOR
        // =================================================================
        let supervisorPrompt = readPromptFromFile('supervisor_expert.txt');
        supervisorPrompt = supervisorPrompt.replace('${raw_text}', raw_text);
        supervisorPrompt = supervisorPrompt.replace('${json_data}', JSON.stringify(preliminaryResult, null, 2));
        supervisorPrompt = supervisorPrompt.replace('${fechaFormateada}', fechaFormateada);

        const finalResult = await callGeminiAPI(supervisorPrompt, 'gemini-1.5-pro'); // <-- CAMBIO 2: quitado '-latest' del modelo Pro

        // =================================================================
        // PASO 5: DEVOLVER EL RESULTADO FINAL (VALIDADO)
        // =================================================================
        return {
            statusCode: 200,
            body: JSON.stringify(finalResult)
        };

    } catch (error) {
        console.error("Error fatal en el orquestador:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: 'Error en el procesamiento del pipeline de IA.', 
                details: error.message,
                stack: error.stack
            })
        };
    }
};
