// netlify/functions/search.js
exports.handler = async function (event, context) {
    const fetch = (await import('node-fetch')).default;
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const { query, accounts } = JSON.parse(event.body);

    if (!query) {
        return {
            statusCode: 400,
            body: JSON.stringify({ value: '0', url: null, error: 'Falta la consulta (query).' })
        };
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

    const prompt = `
        Actúa como un Tasador Experto de Productos y Experiencias. Tu única misión es determinar un valor de mercado fiable para el premio de un sorteo.

        **Directiva Principal (Regla de Oro):** Tu objetivo es devolver SIEMPRE un valor numérico estimado. El valor "0" o cualquier texto como "No encontrado" están estrictamente prohibidos, a menos que el premio sea literalmente "nada". Debes proporcionar una estimación monetaria.

        **Premio a Valorar:** "${query}"
        **Cuentas/Marcas Asociadas:** ${accounts.join(', ')}

        **PROTOCOLO DE VALORACIÓN (OBLIGATORIO Y SECUENCIAL):**

        1.  **BÚSQUEDA EXACTA:**
            a. Intenta encontrar el precio del producto exacto en las **webs oficiales** de las marcas asociadas, en **Amazon** o en **Google**. Un producto casi siempre tiene un precio en algún sitio.

        2.  **PROTOCOLO DE ESTIMACIÓN (SI LA BÚSQUEDA EXACTA FALLA):**
            a. Encuentra entre 3 y 5 productos de **características, marca y calidad MUY SIMILARES**.
            b. **Calcula el precio medio** de esos productos. Este será tu valor estimado.
            c. Para **experiencias** (entradas, viajes), busca precios de servicios comparables y ofrece una estimación conservadora.

        3.  **PROTOCOLO DE ÚLTIMO RECURSO (SI TODO LO ANTERIOR FALLA):**
            a. Basándote EXCLUSIVAMENTE en el tipo de producto descrito en "${query}", establece un **RANGO DE PRECIOS CREÍBLE Y CONSERVADOR**.
            b. Elige un **valor MEDIO** dentro de ese rango. Es preferible una estimación razonada a un fallo.
            c. Ejemplo: Si el premio es "un lote de cosméticos de farmacia", puedes estimar un rango de 40€-80€ y devolver "60". Si es "una taza de marca", un rango de 10€-20€ y devolver "15".

        **FORMATO DE SALIDA (REGLAS ESTRICTAS E INQUEBRANTABLES):**
        Tu respuesta DEBE SER única y exclusivamente un objeto JSON válido. NO incluyas explicaciones, saludos ni la palabra \`\`\`json.
        {
          "value": "string",
          "url": "string"
        }

        -   El campo \`"value"\` DEBE ser un **string que contenga ÚNICAMENTE el número** (ej: "179.99", "60").
        -   **REGLA FINAL INEXPUGNABLE:** Bajo NINGUNA circunstancia puedes devolver "No encontrado", null o un objeto JSON inválido. Tu misión es estimar un valor numérico.
    `;

    try {
        const geminiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        if (!geminiResponse.ok) {
            throw new Error(\`La API de Gemini devolvió el estado: \${geminiResponse.status}\`);
        }

        const data = await geminiResponse.json();

        if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
            const text = data.candidates[0].content.parts[0].text;
            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                return {
                    statusCode: 200,
                    headers: { 'Content-Type': 'application/json' },
                    body: jsonMatch[0] 
                };
            }
        }
        
        throw new Error("La respuesta de la IA no contenía un JSON válido.");

    } catch (error) {
        console.error("Error en la función search.js:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ value: '1', url: null, error: error.message }) // Devuelve '1' como fallback para evitar "No encontrado"
        };
    }
};
