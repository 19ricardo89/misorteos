// netlify/functions/search.js

exports.handler = async function (event, context) {
    const fetch = (await import('node-fetch')).default;
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    const { query, accounts } = JSON.parse(event.body);

    if (!query) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Falta la consulta (query).' })
        };
    }

    // Corregimos el nombre del modelo a la versión correcta
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
    
    // --- INICIO DEL PROMPT MODIFICADO ---
    let prompt = `Actúa como un asistente de investigación de mercado. Tu tarea es encontrar el precio y el enlace de un producto.
    
    1.  **Prioridad Principal:** Busca el producto en la página web oficial de la marca o cuenta del sorteo.
        * Producto: "${query}"
        * Cuentas de Instagram: ${accounts.join(', ')}

    2.  **Si no se encuentra en la página oficial:** Busca el precio y el enlace del producto en Google.

    3.  **Formato de Salida:** Devuelve tu respuesta única y exclusivamente como un objeto JSON con la siguiente estructura:
        {
          "value": "string del precio encontrado, e.g., '150€', 'No encontrado'",
          "url": "string del enlace de la página web donde encontraste el precio, o null si no lo encontraste"
        }

    Tu respuesta debe ser solo el objeto JSON, sin ningún texto adicional, explicaciones o formato Markdown como \`\`\`.`;
    // --- FIN DEL PROMPT MODIFICADO ---

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

        if (!geminiResponse.ok) {
            const errorBody = await geminiResponse.json();
            console.error("Error desde la API de Gemini (en search.js):", errorBody);
            
            return {
                statusCode: geminiResponse.status,
                body: JSON.stringify({ error: 'La API de Gemini devolvió un error en la búsqueda.', details: errorBody.error ? { message: errorBody.error.message, code: errorBody.error.code } : errorBody })
            };
        }

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