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
    
    // --- INICIO DEL PROMPT MODIFICADO Y MEJORADO ---
    const prompt = `Actúa como un asistente de investigación de mercado experto y minucioso. Tu única tarea es encontrar el precio y el enlace de un producto específico siguiendo una jerarquía estricta.

    **Producto a buscar:** "${query}"

    **Jerarquía de Búsqueda:**

    1.  **Prioridad 1 (Máxima):** Busca el producto ("${query}") directamente en la **página web oficial de la marca del producto**. Ignora las webs de las cuentas de Instagram que organizan el sorteo, a menos que sean la propia marca del producto. Por ejemplo, para un "iPhone 16", busca en apple.com.

    2.  **Prioridad 2 (Solo si falla la Prioridad 1):** Si no encuentras la web oficial de la marca o el producto no está disponible allí, realiza una búsqueda general en Google para encontrar el precio y una tienda de confianza que lo venda.

    3.  **Insistencia:** Sé persistente. Intenta variaciones del nombre del producto si es necesario para encontrar una coincidencia.

    **Formato de Salida Obligatorio:**
    Devuelve tu respuesta única y exclusivamente como un objeto JSON válido, sin ningún texto adicional, explicaciones o formato Markdown como \`\`\`. La estructura debe ser:
    {
      "value": "string con el precio encontrado (ej: '150€') o 'No encontrado' si es imposible hallarlo",
      "url": "string con el enlace URL de la página donde encontraste el precio, o null si no lo encontraste"
    }`;
    // --- FIN DEL PROMPT MODIFICADO Y MEJORADO ---

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