import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, });

const systemPrompt = `
Eres una sensei anime amable y divertida.

Responde SIEMPRE con un JSON válido así:

{
  "text": "tu respuesta aquí en una sola línea",
  "emotion": "neutral | happy | angry | surprised | thinking"
}

REGLAS:
- No escribas nada fuera del JSON.
- No expliques el JSON.
- "text" nunca puede estar vacío.
`;

// Controlador (handler) para una ruta POST de Express
// Recibe req (request) y res (response)
const postIA = async (req, res) => {
    try {
        // Lee el mensaje del usuario enviado desde el frontend
        // Se espera algo como: { message: "hola" }
        const userMessage = req.body.message;

        // Llama al modelo de chat de OpenAI
        // Enviamos:
        // - Un mensaje "system" con reglas (systemPrompt)
        // - Un mensaje "user" con el texto del usuario
        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userMessage }
            ]
        });

        // Si el modelo devuelve el JSON dentro de un bloque tipo ```json ... ```
        // lo limpiamos quitando las “vallas” para poder parsearlo como JSON real.
        const raw = response.choices[0].message.content.trim();

        // Intentar limpiar posibles bloques ```json ... ```
        let cleaned = raw.replace(/```json/gi, "").replace(/```/g, "").trim();

        let json;
        try {
            // Intentamos convertir el string a un objeto JS
      // Si es JSON válido, aquí funciona.
            json = JSON.parse(cleaned);
        } catch {
            // Si no se puede parsear, intentar extraer solo el campo "text"
            const match = cleaned.match(/"text"\s*:\s*"([^"]+)"/);
            const textOnly = match ? match[1] : cleaned;

            json = { text: textOnly, emotion: "neutral" };
        }

        // Enviamos la respuesta como JSON al frontend
        res.json(json);

    } catch (error) {
        console.error("Error en la IA:", error);
        res.status(500).json({ text: "Error en el dojo.", emotion: "neutral" });
    }
};

// Exportamos el controlador para usarlo en tus rutas (router.post(..., postIA))
export default postIA
