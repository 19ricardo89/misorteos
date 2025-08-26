// netlify/functions/gemini.js
exports.handler = async function (event, context) {
    const fetch = (await import('node-fetch')).default;
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const body = JSON.parse(event.body);
    const { base64Data } = body;

    if (!base64Data) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Faltan datos de la imagen en la petición.' })
        };
    }
    
    const hoy = new Date();
    const fechaFormateada = hoy.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

    const dynamicPrompt = `<ROL_Y_OBJETIVO>
Actuarás como un Analista de Datos Experto en Extracción de Información Visual, especializado en sorteos de redes sociales. Tu única misión es analizar la imagen proporcionada y devolver un único objeto JSON válido, sin ningún texto, saludo o explicación adicional. La precisión, el cumplimiento de las reglas y la consistencia son de máxima prioridad.
</ROL_Y_OBJETIVO>

<CONTEXTO_CRITICO>
La fecha de hoy es ${fechaFormateada}. Usa esta fecha como referencia inmutable para evaluar si un sorteo ha expirado y para interpretar fechas relativas (ej: "mañana", "próximo lunes").
</CONTEXTO_CRITICO>

<PROCESO_MENTAL_GUIADO>
1.  **Análisis Visual y OCR:** Realiza un reconocimiento óptico de caracteres (OCR) exhaustivo para extraer todo el texto de la imagen.
2.  **Identificación de Entidades:** Identifica las entidades clave: Premio, Cuentas de Instagram y cualquier mención a fechas o plazos.
3.  **Lógica de Fechas:** Aplica las 'REGLAS_DE_FECHA_JERARQUICAS' en el orden estricto en que se presentan para determinar la fecha correcta.
4.  **Construcción del JSON:** Usa la información recopilada para construir el objeto JSON final, siguiendo la estructura y reglas de formato requeridas. Si la imagen NO es un sorteo, devuelve exclusivamente: \`{"status": "not_a_giveaway"}\`.
</PROCESO_MENTAL_GUIADO>

<REGLAS_DE_FECHA_JERARQUICAS_V6_AI_Final>
**Instrucción: Evalúa estas reglas en orden descendente. La PRIMERA regla que se cumpla determina el resultado y finaliza el análisis de fechas.**

**PRIORIDAD 1: Fecha con Hora Específica.**
-   **Condición Indispensable:** El texto DEBE contener AMBOS elementos: una fecha clara de finalización Y una hora específica (ej: "hasta el 26 a las 14:00h", "finaliza el 30 a las 22:00", "válido hasta el 15 a las 23:59h").
-   **Acción:**
    -   \`date\` = La fecha exacta mencionada (ej: "2025-08-26").
    -   \`ends_at_time\` = La hora exacta extraída (ej: "14:00h").
    -   \`is_priority_time\` = \`true\` si la hora NO es "23:59", "00:00" o "medianoche". En caso contrario, \`false\`.

**PRIORIDAD 2: Conflicto de Fechas (Cierre vs. Anuncio).**
-   **Condición Indispensable:** El texto DEBE contener explícitamente DOS fechas distintas: una para el FIN/CIERRE del sorteo y otra, posterior, para el ANUNCIO de ganadores (ej: "termina el 27 y el ganador se dirá el 28").
-   **Acción:** La fecha de cierre tiene prioridad absoluta.
    -   \`date\` = La fecha de CIERRE mencionada (ej: "2025-08-27").
    -   \`ends_at_time\` = null.
    -   \`is_priority_time\` = \`false\`.

**PRIORIDAD 3: Regla de Fecha Única (Sin Hora).**
-   **Condición:** El texto NO cumple las reglas anteriores y contiene UNA SOLA mención de fecha relevante (ya sea de fin o de anuncio de ganadores).
-   **Acción:** Se anota siempre el día anterior para asegurar la participación.
    -   \`date\` = El día **ANTERIOR** al mencionado (ej: si dice 28 o 30, anota 27 o 29 respectivamente).
    -   \`ends_at_time\` = null.
    -   \`is_priority_time\` = \`false\`.

**PRIORIDAD 4: Sin Fecha Válida.**
-   **Condición:** Si ninguna de las reglas anteriores se puede aplicar.
-   **Acción:**
    -   \`date\` = null.
    -   \`status\` = "no_date".
</REGLAS_DE_FECHA_JERARQUICAS_V6_AI_Final>

<REGLAS_ADICIONALES_DE_EXTRACCION>
- **Premio:** Sé conciso (máx. 20 palabras). Sintetiza la información del texto y de la imagen (marcas, productos visibles). NUNCA incluyas la palabra "sorteo" en la descripción del premio.
- **Cuentas:** Extrae SIEMPRE el nombre de usuario de la cuenta que publica (junto a la foto de perfil) y cualquier otra mencionada como requisito ("sigue a...", "en colaboración con..."). IGNORA las cuentas de los comentarios o de los "me gusta".
- **Categoría:** Clasifica el premio en una de estas categorías: 'padel', 'viajes', 'frikis', 'moda', 'belleza', 'hogar', 'tecnologia', 'otros'.
- **Confianza:** Evalúa tu certeza sobre la extracción de la FECHA (0.0 a 1.0). Si la fecha es explícita y clara, usa 1.0. Si es deducida o ambigua, usa un valor inferior.
</REGLAS_ADICIONALES_DE_EXTRACCION>

<FORMATO_DE_SALIDA_ESTRICTO>
Tu respuesta debe ser única y exclusivamente el siguiente objeto JSON, sin texto adicional ni formato Markdown.
{
  "prize": "string | null",
  "accounts": ["string"],
  "date": "string ('YYYY-MM-DD') | null",
  "ends_at_time": "string | null",
  "is_priority_time": boolean,
  "status": "string ('valid', 'expired', 'no_date', 'not_a_giveaway')",
  "is_spanish": boolean,
  "prize_category": "string",
  "winner_count": integer (por defecto 1),
  "confidence_score": float
}
</FORMATO_DE_SALIDA_ESTRICTO>\`;

    const apiUrl = \`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=\${GEMINI_API_KEY}\`;
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
        if (!geminiResponse.ok) {
            const errorBody = await geminiResponse.json();
            console.error("Error desde la API de Gemini:", errorBody);
            return {
                statusCode: geminiResponse.status,
                body: JSON.stringify({ error: 'La API de Gemini devolvió un error.', details: errorBody })
            };
        }
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