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

    // --- INICIO DEL PROMPT AVANZADO ---
    const prompt = `
        Actúa como un analista de e-commerce experto. Tu misión es determinar el valor de mercado exacto de un premio de sorteo y proporcionar una fuente fiable.

        **Premio a Analizar:** "${query}"
        **Cuentas/Marcas Asociadas:** ${accounts.join(', ')}

        **PROTOCOLO DE BÚSQUEDA JERÁRQUICO (OBLIGATORIO):**
        Sigue estos pasos en orden estricto. Si encuentras un resultado fiable, detén la búsqueda y úsalo.
        1.  **Búsqueda en Webs Oficiales:** Primero, intenta encontrar el producto en la web oficial de las marcas/cuentas asociadas. Este es el precio más fiable.
        2.  **Búsqueda en Plataformas Principales:** Si no lo encuentras, búscalo en grandes plataformas como Amazon, PcComponentes, MediaMarkt, Miravia o AliExpress.
        3.  **Búsqueda General:** Como último recurso, realiza una búsqueda general en Google para encontrar el precio en otros blogs o tiendas.

        **REGLAS DE CÁLCULO DE VALOR (OBLIGATORIO):**
        -   **Si el premio es un "lote", "pack" o "cesta":** Debes identificar los productos principales dentro del lote, buscar su valor de mercado individualmente y devolver la **suma total** de sus precios.
        -   **Si el premio es una experiencia (viaje, cena):** Estima un valor de mercado conservador y razonable para esa experiencia.

        **FORMATO DE SALIDA (MUY IMPORTANTE):**
        Tu respuesta DEBE SER única y exclusivamente un objeto JSON válido. NO incluyas texto, explicaciones ni formato markdown.
        {
          "value": "string",
          "url": "string"
        }

        **REGLAS DEL FORMATO JSON:**
        -   El campo \`"value"\` DEBE ser un string que contenga ÚNICAMENTE el número total del valor en euros (ej: "179.99", "85.50", "1200"). NO incluyas el símbolo '€'.
        -   Si después de seguir todo el protocolo de búsqueda te es absolutamente imposible determinar un precio, el valor del campo \`"value"\` DEBE SER "0".
        -   El campo \`"url"\` debe ser el enlace más relevante que encontraste o \`null\` si no hallaste una fuente directa.
    `;
    // --- FIN DEL PROMPT AVANZADO ---

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