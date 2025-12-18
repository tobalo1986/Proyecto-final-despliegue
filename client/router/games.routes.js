import express from "express"
const routerGames = express.Router()

import Game from "../controller/game.controller.js"

routerGames.get("/", Game.getGames)
routerGames.post("/", Game.createGame)
routerGames.put("/:id", Game.updadteGame)
routerGames.delete("/:id", Game.deleteGame)

export default routerGames