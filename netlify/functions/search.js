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

    // Mantenemos el modelo 'flash' como solicitaste.
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
    
    // --- INICIO DEL PROMPT DE TASADOR SENIOR ---
    const prompt = `
    **ROL Y MISIÓN:**
    Actúa como un Tasador Digital Senior y Estratega de E-commerce. Tu única misión es determinar un valor de mercado (PVP en Euros) para el producto de un sorteo, aplicando una lógica de marketing, subastas y comparativas.

    **CONTEXTO DEL ANÁLISIS:**
    - **Producto a Valorar:** "${query}"
    - **Organizadores (fuente de contexto):** ${accounts ? accounts.join(', ') : 'No especificadas'}

    **DIRECTIVA PRINCIPAL INQUEBRANTABLE:**
    Tu objetivo es devolver SIEMPRE un valor monetario. El campo "value" en tu respuesta JSON NUNCA puede ser "No encontrado", nulo o vacío. Si un precio exacto es imposible de encontrar, tu deber es realizar una estimación experta y fundamentada.

    **PROTOCOLO DE TASACIÓN INTELIGENTE (CUANDO EL PRECIO EXACTO NO ESTÁ DISPONIBLE):**
    Si la búsqueda jerárquica no arroja un precio exacto, aplicarás la siguiente lógica de estimación:
    1.  **Análisis de "Lotes de Productos":**
        - Si el lote detalla los productos (ej: "lote con 5 cremas de sol y 1 toalla"), busca el precio individual y súmalo.
        - Si el lote es genérico (ej: "cesta de maquillaje", "lote de productos de limpieza"), asigna un valor de mercado conservador basado en la categoría y la marca (si se conoce). **Ejemplo de tu razonamiento:** "Un lote de maquillaje de una marca de consumo como L'Oréal podría estimarse en 45€. Un lote de una marca de lujo como Dior, en 120€". Tu valor final debe ser una cifra concreta.
    2.  **Análisis de "Experiencias":**
        - Estima un valor de mercado estándar. Ejemplos: "una cena para dos" -> "70€ (estimado)", "una noche de hotel" -> "120€ (estimado)", "dos entradas de cine" -> "20€ (estimado)".
    3.  **Análisis de "Genéricos y Merchandising":**
        - Asigna un valor base creíble. Ejemplos: "camiseta de merchandising" -> "25€ (estimado)", "tote bag de marca" -> "15€ (estimado)".

    **ESTRATEGIA DE BÚSQUEDA JERÁRQUICA (PARA PRECIOS EXACTOS):**
    1.  **Paso 1 (Inteligencia de Marca):** Deduce la marca principal a partir de las cuentas organizadoras. Realiza tu primera búsqueda del producto en la **página web oficial de esa marca**. Esta es la fuente más fiable.
    2.  **Paso 2 (Análisis de Mercado):** Si el Paso 1 falla, busca el producto en las principales plataformas de e-commerce (Amazon, El Corte Inglés, Zalando, etc.). Compara precios y obtén el más representativo (PVP).
    3.  **Paso 3 (Búsqueda Exhaustiva):** Como último recurso, realiza una búsqueda general en Google para encontrar cualquier referencia de precio en blogs de reseñas, comparadores, etc.

    **FORMATO DE SALIDA (JSON ESTRICTO):**
    Tu respuesta debe ser únicamente un objeto JSON válido, sin explicaciones ni markdown.
    {
      "value": "string con el precio y la moneda (ej: '149.99€', '50€ (estimado)'). ESTE CAMPO ES OBLIGATORIO Y NUNCA PUEDE ESTAR VACÍO.",
      "url": "string con la URL si encontraste un precio exacto, o null si es una estimación"
    }
    `;
    // --- FIN DEL PROMPT DE TASADOR SENIOR ---

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
            console.error("Error desde la API de Gemini (search.js):", errorBody);
            // Si la API falla, devolvemos un valor estimado por defecto para no romper la regla.
            return {
                statusCode: 200, // Devolvemos 200 para que la app no se rompa
                body: JSON.stringify({
                    candidates: [{
                        content: {
                            parts: [{
                                text: JSON.stringify({ value: "30€ (estimado por error)", url: null })
                            }]
                        }
                    }]
                })
            };
        }

        const data = await geminiResponse.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.error("Error en la función search.js:", error);
        // Si hay un error de conexión, también devolvemos un valor por defecto.
        return {
            statusCode: 200,
            body: JSON.stringify({
                candidates: [{
                    content: {
                        parts: [{
                            text: JSON.stringify({ value: "30€ (estimado por error)", url: null })
                        }]
                    }
                }]
            })
        };
    }
};
