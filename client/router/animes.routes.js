import express from "express"
const routerAnimes = express.Router()

import Anime from "../controller/anime.controler.js"

routerAnimes.get("/", Anime.getAnimes)
routerAnimes.post("/", Anime.createAnime)
routerAnimes.put("/:id", Anime.updateAnime)
routerAnimes.delete("/:id", Anime.deleteAnime)

export default routerAnimes