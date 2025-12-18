import express from "express";
const routerIA = express.Router()

import postIA from "../controller/ai.controller.js"


routerIA.post("/", postIA)


export default routerIA