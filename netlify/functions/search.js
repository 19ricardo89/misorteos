// netlify/functions/search.js

exports.handler = async function (event, context) {
    const fetch = (await import('node-fetch')).default;
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    const { query } = JSON.parse(event.body);

    if (!query) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Falta la consulta (query).' })
        };
    }

    // Corregimos el nombre del modelo a la versión correcta
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
    
    const prompt = `Busca en internet el precio aproximado del siguiente producto: "${query}". Devuélveme el precio encontrado y la URL de la fuente en un objeto JSON. Por ejemplo: {"value": "150€", "url": "https://example.com"}. Si no encuentras un precio, usa "No encontrado" para la clave "value" y null para "url". Tu respuesta debe ser únicamente el objeto JSON, sin texto adicional ni markdown.`;

    const payload = {
        contents: [{
            role: "user",
            parts: [{ text: prompt }]
        }]
    };

    try {
        const geminiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        // --- INICIO DEL CÓDIGO AÑADIDO PARA MEJORAR EL MANEJO DE ERRORES ---
        if (!geminiResponse.ok) {
            const errorBody = await geminiResponse.json();
            console.error("Error desde la API de Gemini (en search.js):", errorBody);
            
            return {
                statusCode: geminiResponse.status,
                body: JSON.stringify({ 
                    error: 'La API de Gemini devolvió un error en la búsqueda.', 
                    details: errorBody.error ? { message: errorBody.error.message, code: errorBody.error.code } : errorBody 
                })
            };
        }
        // --- FIN DEL CÓDIGO AÑADIDO ---

        const data = await geminiResponse.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.error("Error en la función search.js:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error al contactar la API de Gemini.' })
        };
    }
};