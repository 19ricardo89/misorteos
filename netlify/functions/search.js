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

    const prompt = `Actúa como un experto asistente de investigación de mercado. Tu tarea es encontrar el precio de mercado y el enlace de compra de un producto a partir de una descripción, que puede ser imprecisa o demasiado larga.

**ESTRATEGIA DE BÚSQUEDA INTELIGENTE (OBLIGATORIA):**

1.  **DECONSTRUCCIÓN:** Analiza la descripción del producto proporcionada ("${query}") e identifica sus componentes esenciales:
    * **Marca Principal:** (Ej: TCL, Gigabyte, Samsung)
    * **Modelo / Identificador Único:** (Ej: 25G64, GS25F2) - ¡Esta es la parte más importante!
    * **Tipo de Producto:** (Ej: Monitor, Teclado, Móvil)
    * **Características Clave (Opcional):** (Ej: 25 pulgadas, 300Hz, QD-Mini LED)

2.  **PRIORIZACIÓN:** La consulta de búsqueda más efectiva casi siempre será la combinación de **"Marca" + "Modelo"**. Las características adicionales a veces ayudan, pero a menudo añaden ruido.

3.  **EJECUCIÓN DE BÚSQUEDA:**
    * **Intento 1 (Búsqueda Prioritaria):** Realiza una búsqueda en la web utilizando la consulta optimizada (Marca + Modelo). Por ejemplo, si la descripción es "Monitor Gaming TCL 25G64 300Hz", tu búsqueda interna debería ser \`"TCL 25G64 precio"\` o \`"Monitor TCL 25G64"\`.
    * **Intento 2 (Búsqueda Amplia):** Si el primer intento falla, amplía la búsqueda usando la Marca y el Tipo de Producto. Ejemplo: \`"Monitor TCL 25 pulgadas"\`.
    * **Prioridad de Fuentes:** Busca primero en la web oficial de la marca (si se puede deducir de las cuentas: ${accounts.join(', ')}) y luego en tiendas de referencia como Amazon, PcComponentes, etc.

4.  **FORMATO DE SALIDA:** Devuelve tu respuesta única y exclusivamente como un objeto JSON con la siguiente estructura, basándote en el resultado más fiable que encuentres:
    {
      "value": "string del precio encontrado, e.g., '179.00€', 'No encontrado'",
      "url": "string del enlace de la página web donde encontraste el precio, o null si no lo encontraste"
    }

Tu respuesta debe ser solo el objeto JSON, sin texto adicional, explicaciones o formato Markdown.`;

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