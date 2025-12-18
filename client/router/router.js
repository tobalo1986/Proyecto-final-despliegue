import express from 'express'
const router = express.Router()

import routeGame from "./games.routes.js"
import routeAnime from "./animes.routes.js"
import routeIA from "./ai.routes.js"


// usar las rutas 
router.use("/animes", routeAnime)
router.use("/games", routeGame)
router.use("/api/sensei", routeIA)


export default router