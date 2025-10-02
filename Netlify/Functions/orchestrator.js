const fetch = (await import('node-fetch')).default;

exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
    
    try {
        const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
        if (!GEMINI_API_KEY) {
            throw new Error("La clave de API de Gemini no está configurada.");
        }

        const model = 'gemini-pro'; // Usamos el modelo más básico y estable
        const apiUrl = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
        
        const payload = {
            contents: [{ parts: [{ text: "Hola, responde solo con este JSON: {\"status\": \"ok\"}" }] }]
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error de la API de Gemini: ${errorData.error.message}`);
        }

        const data = await response.json();
        const text = data.candidates[0].content.parts[0].text;
        
        // Devolvemos un JSON de éxito si la prueba funciona
        return {
            statusCode: 200,
            body: text // Debería ser {"status": "ok"}
        };

    } catch (error) {
        console.error("Error fatal en el orquestador de diagnóstico:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: 'Error en la prueba de diagnóstico.', 
                details: error.message
            })
        };
    }
};
