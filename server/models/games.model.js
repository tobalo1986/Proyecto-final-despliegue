import mongoose from "mongoose"

const gamesShema = new mongoose.Schema({
    name: {type: String, require: true},
    image: {type: String},
    price: {type: Number, require: true},
    platform: {type: String, required: true},
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

export default mongoose.model("Game", gamesShema, "games")