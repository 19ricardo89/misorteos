// Este código se ejecuta en los servidores de Netlify, no en el navegador.

exports.handler = async function (event, context) {
    // Importamos la librería para hacer peticiones.
    const fetch = (await import('node-fetch')).default;
    
    // Obtenemos la clave de API de las variables de entorno seguras de Netlify.
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    // Obtenemos los datos que envió el frontend (la imagen y el prompt).
    const body = JSON.parse(event.body);
    const { base64Data, dynamicPrompt } = body;

    if (!base64Data || !dynamicPrompt) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Faltan datos en la petición.' })
        };
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
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
        const geminiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await geminiResponse.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (error) {
        console.error("Error en la función de Netlify:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error al contactar la API de Gemini.' })
        };
    }
};
