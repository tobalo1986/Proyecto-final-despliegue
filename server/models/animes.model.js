import mongoose from "mongoose";
const animesShema = new mongoose.Schema({
    name: { type: String, require: true },
    description: { type: String },
    youtubeId: { type: String, require: true },
    genre: { type: [String], require: true },
    year: {
        type: String,
        required: true,
        // para validar el formato de la fecha.
        validate: {
            validator: (value) => {
                // intenta convertirlo a fecha
                const date = new Date(value);
                return !isNaN(date); // true si es válida
            },
            message: "El formato de fecha no es válido"
        }
    }
})
export default mongoose.model("Anime", animesShema, "animes");