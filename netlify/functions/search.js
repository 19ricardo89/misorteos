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

    // --- INICIO DEL PROMPT "TASADOR EXPERTO" v2 ---
    const prompt = `
        Actúa como un Tasador Experto de Productos y Experiencias. Tu única misión es determinar un valor de mercado fiable para el premio de un sorteo.

        **Directiva Principal (Regla de Oro):** Tu objetivo es devolver SIEMPRE un valor numérico estimado. El valor "0" está prohibido, a menos que el premio sea literalmente "nada". Para todos los demás casos, DEBES proporcionar una estimación monetaria siguiendo el protocolo.

        **Premio a Valorar:** "${query}"
        **Cuentas/Marcas Asociadas:** ${accounts.join(', ')}

        **PROTOCOLO DE VALORACIÓN (OBLIGATORIO Y SECUENCIAL):**

        1.  **BÚSQUEDA EXACTA:**
            a. Intenta encontrar el precio del producto exacto en las **webs oficiales** de las marcas asociadas.
            b. Si no lo encuentras, búscalo en **Amazon**.
            c. Si sigue sin aparecer, realiza una búsqueda exhaustiva en **Google**. Un producto casi siempre tiene un precio en algún sitio.

        2.  **PROTOCOLO DE ESTIMACIÓN (SI LA BÚSQUEDA EXACTA FALLA):**
            a. Si no encuentras el producto exacto, tu tarea es encontrar entre 3 y 5 productos de **características, marca y calidad MUY SIMILARES**.
            b. **Calcula el precio medio** de esos productos similares que has encontrado. Este será tu valor estimado.
            c. Para **experiencias** (entradas, viajes, cenas), busca precios de servicios comparables en la misma ciudad/región y ofrece una estimación conservadora. (Ej: "Entrada doble Dino Expo" -> busca "precio entrada exposición dinosaurios españa").

        **FORMATO DE SALIDA (REGLAS ESTRICTAS E INQUEBRANTABLES):**
        Tu respuesta DEBE SER única y exclusivamente un objeto JSON válido.
        {
          "value": "string",
          "url": "string"
        }

        -   El campo \`"value"\` DEBE ser un **string que contenga ÚNICAMENTE el número total del valor** (ej: "179.99", "85.50", "1200"). NO incluyas el símbolo '€' ni ningún otro texto.
        -   **Repito: NUNCA devuelvas "0"** a menos que sea imposible realizar una estimación, lo cual es extremadamente improbable.
        -   El campo \`"url"\` debe ser el enlace más relevante de tu hallazgo (ya sea del producto exacto o de uno de los similares usados para la media) o \`null\`.
    `;
    // --- FIN DEL PROMPT ---

    try {
        const geminiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        if (!geminiResponse.ok) {
            throw new Error(`La API de Gemini devolvió el estado: ${geminiResponse.status}`);
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
            body: JSON.stringify({ value: '0', url: null, error: error.message })
        };
    }
};