// netlify/functions/gemini.js (VERSIÓN DE DEPURACIÓN)
exports.handler = async function (event, context) {
    console.log("--- INICIO DE INVOCACIÓN DE LA FUNCIÓN 'gemini.js' ---");

    const fetch = (await import('node-fetch')).default;
    
    // 1. Verificamos si la variable de entorno se está leyendo
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    console.log("Clave API leída del entorno:", GEMINI_API_KEY ? `Sí, una clave que termina en '...${GEMINI_API_KEY.slice(-4)}'` : "NO, NO SE ENCONTRÓ NINGUNA CLAVE");

    // 2. Verificamos el contenido que llega desde el navegador
    const body = JSON.parse(event.body);
    console.log("Body recibido desde el cliente:", JSON.stringify(body, null, 2));
    
    const { base64Data, dynamicPrompt } = body;

    if (!base64Data || !dynamicPrompt) {
        console.error("ERROR: Faltan 'base64Data' o 'dynamicPrompt' en el body.");
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Faltan datos (imagen o prompt) en la petición.' })
        };
    }
    console.log("Datos ('base64Data' y 'dynamicPrompt') extraídos correctamente.");

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
    
    const payload = {
        contents: [{
            role: "user",
            parts: [
                { text: dynamicPrompt },
                { inlineData: { mimeType: "image/jpeg", data: base64Data.split(',')[1] } }
            ]
        }]
    };

    try {
        console.log("Intentando llamar a la API de Gemini en:", apiUrl.split('?')[0]);
        const geminiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        console.log("Respuesta recibida de Gemini. Estado:", geminiResponse.status);

        if (!geminiResponse.ok) {
            const errorBody = await geminiResponse.json();
            console.error("Error desde la API de Gemini:", JSON.stringify(errorBody, null, 2));
            return {
                statusCode: geminiResponse.status,
                body: JSON.stringify({ error: 'La API de Gemini devolvió un error.', details: errorBody })
            };
        }
        
        const data = await geminiResponse.json();
        console.log("Éxito. La API de Gemini devolvió una respuesta válida.");
        console.log("--- FIN DE INVOCACIÓN ---");
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.error("ERROR CATASTRÓFICO en el bloque try/catch:", error);
        console.log("--- FIN DE INVOCACIÓN CON ERROR ---");
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error al contactar la API de Gemini.' })
        };
    }
};