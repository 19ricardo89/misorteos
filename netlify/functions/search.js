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

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

    // --- PROMPT MEJORADO ---
    // Es más directo y menos propenso a errores de formato.
    const prompt = `
        Tu único objetivo es encontrar el precio de mercado aproximado y un enlace de compra para el siguiente producto.
        
        Producto a buscar: "${query}"
        Posibles marcas/tiendas asociadas (cuentas de Instagram): ${accounts.join(', ')}

        Prioriza la búsqueda en las webs oficiales de las marcas o en tiendas de referencia (Amazon, PcComponentes, etc.).

        Devuelve tu respuesta ÚNICA Y EXCLUSIVAMENTE como un objeto JSON válido con la siguiente estructura. No añadas texto, explicaciones, ni formato markdown como \`\`\`.

        {
          "value": "string con el precio encontrado (ej: '179.00€') o 'No encontrado' si es imposible hallarlo.",
          "url": "string con la URL más relevante donde encontraste el precio, o null."
        }
    `;

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
                body: JSON.stringify({ error: 'La API de Gemini devolvió un error en la búsqueda.', details: errorBody })
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