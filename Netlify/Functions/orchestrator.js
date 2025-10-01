const fs = require('fs');
const path = require('path');

// --- Función Auxiliar para leer los prompts ---
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
const callGeminiAPI = async (prompt, model = 'gemini-2.5-flash', base64Data = null) => {
    const fetch = (await import('node-fetch')).default;
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
        throw new Error("La clave de API de Gemini no está configurada.");
    }
    const apiUrl = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${GEMINI_API_KEY}`;

    const payload = {
        contents: [{ role: "user", parts: [{ text: prompt }, { inlineData: { mimeType: "image/jpeg", data: base64Data.split(',')[1] } }] }],
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

// --- Handler Principal (SIMPLIFICADO y usando 2.5 Flash) ---
exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
    
    try {
        const { base64Data } = JSON.parse(event.body);
        if (!base64Data) {
            return { statusCode: 400, body: JSON.stringify({ error: 'No se proporcionó la imagen en formato base64.' }) };
        }

        // === UNA ÚNICA LLAMADA CON EL PROMPT MAESTRO y el modelo más rápido ===
        const fechaFormateada = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
        let masterPrompt = readPromptFromFile('maestro_expert.txt');
        masterPrompt = masterPrompt.replace('${fechaFormateada}', fechaFormateada);
        
        // ¡AQUÍ ESTÁ EL CAMBIO CLAVE! Usamos 'gemini-2.5-flash'
        const finalResult = await callGeminiAPI(masterPrompt, 'gemini-2.5-flash', base64Data);

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
