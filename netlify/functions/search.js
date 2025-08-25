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
    const prompt = `Actúa como un analista de mercado digital extremadamente meticuloso y preciso. Tu única tarea es encontrar el precio exacto de un producto y su enlace de compra. La precisión es tu máxima prioridad.

    1.  **Producto a Investigar:**
        * Producto: "${query}"
        * Cuentas de Instagram Asociadas: ${accounts.join(', ')}

    2.  **Jerarquía de Búsqueda (Obligatoria):** Debes seguir estos niveles en orden estricto.
        * **Nivel 1 (Máxima Prioridad):** Páginas Oficiales de la marca o de las cuentas de Instagram asociadas al sorteo.
        * **Nivel 2 (Grandes Plataformas):** Si no se encuentra en el Nivel 1, busca en las siguientes tiendas online: Amazon, El Corte Inglés, FNAC, MediaMarkt, PcComponentes, Carrefour, AliExpress, Miravia.
        * **Nivel 3 (Último Recurso):** Si no encuentras el producto en los niveles anteriores, realiza una Búsqueda General en Google.

    3.  **Proceso de Búsqueda y Lógica de Precios (REGLAS CRÍTICAS):**

        A.  **Búsqueda Minuciosa:** Tu principal objetivo es la exactitud. Debes hacer todo lo posible por encontrar el artículo EXACTO descrito en la consulta. No te conformes con el primer resultado; verifica que las características coinciden.

        B.  **Lógica para Lotes (Bundles):** Si el premio es un lote (ej: "4 libretas y 1 estuche"):
            1.  Desglosa el lote en sus componentes individuales (4 x libreta, 1 x estuche).
            2.  Busca el precio de mercado exacto de CADA componente de forma individual y minuciosa.
            3.  **Caso Exacto:** Si encuentras el precio exacto de TODOS los componentes, súmalos para obtener el valor total. Este resultado es un precio EXACTO (ej: si las libretas valen 10€ y el estuche 20€, el total es 60€).
            4.  **Caso de Estimación:** Si para UNO O MÁS componentes no encuentras el producto exacto y tienes que basarte en un producto MUY SIMILAR para estimar su valor, entonces la suma total del lote se considera una APROXIMACIÓN.

        C.  **Formato del Campo 'value'**:
            * Usa un precio sin símbolos (ej: "60€") ÚNICAMENTE si has seguido el "Caso Exacto" (punto B.3) o si el premio era un solo producto y encontraste su precio exacto.
            * El uso del símbolo de aproximación (≈) queda reservado EXCLUSIVAMENTE para los casos descritos en el "Caso de Estimación" (punto B.4). **Ejemplo: "≈60€"**.
            * Si solo encuentras un valor mínimo o "a partir de", usa el símbolo mayor que (>). **Ejemplo: ">60€"**.
            * **PROHIBIDO:** No incluyas NUNCA las palabras "estimado", "aproximado", "aprox", etc. La lógica de usar "≈" ya transmite esa información.

    4.  **Formato de Salida (JSON Estricto):** Tu única respuesta debe ser un objeto JSON con la siguiente estructura, sin ningún texto adicional.
        {
          "value": "string con el precio formateado según las reglas críticas del punto 3 (ej: '60€', '≈60€', '>60€', 'No encontrado')",
          "url": "string con el enlace principal donde se verificó el precio, o null"
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