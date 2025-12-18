import cors from "cors"
import express from "express"
import { get } from "mongoose"
import animes from "./data/animeData.js"
import mangas from "./data/magData.js"
import games from "./data/videogameData.js"

// creamos la instancia a express
const api = express()
// puerto.
const PORT = 3000

// Para hacer las peticiones al servidor. 
api.use(cors())

// ruta de prueba, verificamos que el servidor responde.


api.get("/", (request, response) => {
    response.send("Hola mundo 2.")
})
api.get("/animes", (req, res) => {
    res.json(animes);
})
api.get("/mangas", (req, res) => {
    res.json(mangas);
})
api.get("/games", (req, res) => {
    res.json(games);
})

// El servidor escuchas.
 api.listen(PORT, () => {
    console.log(`API server running en localhost 3000`)
})

