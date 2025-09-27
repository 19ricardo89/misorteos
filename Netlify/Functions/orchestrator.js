const fs = require('fs');
const path = require('path');

// --- Función Auxiliar para leer los prompts (se mantiene igual) ---
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

// --- NUEVA FUNCIÓN para llamar a la API de OpenAI (ChatGPT) ---
const callOpenAIAPI = async (prompt, model = 'gpt-4o', base64Data = null) => {
    const fetch = (await import('node-fetch')).default;
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Usaremos la nueva variable de entorno
    if (!OPENAI_API_KEY) {
        throw new Error("La clave de API de OpenAI no está configurada.");
    }
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    // La estructura del mensaje es diferente para OpenAI, especialmente para imágenes
    const messageContent = [{ type: 'text', text: prompt }];
    if (base64Data) {
        messageContent.push({
            type: 'image_url',
            image_url: { url: base64Data }
        });
    }

    const payload = {
        model: model,
        messages: [{
            role: "user",
            content: messageContent
        }],
        max_tokens: 1500,
        response_format: { "type": "json_object" } // Aseguramos que la respuesta sea JSON
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}` // El método de autorización cambia
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Respuesta de error de OpenAI:", JSON.stringify(data));
            throw new Error(`Error de la API de OpenAI: ${data.error?.message || 'Respuesta inválida.'}`);
        }
        
        const text = data.choices[0].message.content;
        return JSON.parse(text.trim());

    } catch (error) {
        console.error("Error detallado en callOpenAIAPI:", error);
        throw error;
    }
};

// --- Handler Principal (ahora usa la nueva función callOpenAIAPI) ---
exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
    
    try {
        const { base64Data } = JSON.parse(event.body);
        if (!base64Data) {
            return { statusCode: 400, body: JSON.stringify({ error: 'No se proporcionó la imagen en formato base64.' }) };
        }

        // === PASO 1: EXTRACCIÓN INICIAL (con gpt-4o) ===
        const extractorPrompt = readPromptFromFile('data_extractor.txt');
        const extractedData = await callOpenAIAPI(extractorPrompt, 'gpt-4o', base64Data);
        const { raw_text, visual_description } = extractedData;

        // === PASO 2: EJECUCIÓN PARALELA DE EXPERTOS (con gpt-4o) ===
        const fechaFormateada = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
        
        const dateInputText = `${readPromptFromFile('date_expert.txt').replace('${fechaFormateada}', fechaFormateada)}\n\n# TEXTO A ANALIZAR:\n${raw_text}`;
        const prizeInputText = `${readPromptFromFile('prize_expert.txt')}\n\n# TEXTO A ANALIZAR:\n${raw_text}\n\n# DESCRIPCIÓN VISUAL A CONSIDERAR:\n${visual_description}`;
        const accountsInputText = `${readPromptFromFile('accounts_expert.txt')}\n\n# TEXTO A ANALIZAR:\n${raw_text}`;
        
        const datePromise = callOpenAIAPI(dateInputText, 'gpt-4o');
        const prizePromise = callOpenAIAPI(prizeInputText, 'gpt-4o');
        const accountsPromise = callOpenAIAPI(accountsInputText, 'gpt-4o');

        // La lógica del tasador se mantiene, pero ahora llamará a OpenAI
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
                return callOpenAIAPI(appraiserPrompt, 'gpt-4o');
            });
        }

        const [dateResult, prizeResult, accountsResult, priceResult] = await Promise.all([
            datePromise,
            prizePromise,
            accountsPromise,
            pricePromise
        ]);

        // === PASO 3: ENSAMBLAJE FINAL ===
        // Con GPT-4o, el "supervisor" ya no es necesario, su capacidad de seguir instrucciones es muy alta.
        const finalResult = { 
            ...dateResult, 
            ...prizeResult, 
            ...accountsResult, 
            ...priceResult 
        };

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
