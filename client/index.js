import express, { request, response } from "express";
import cors from "cors";
// para usar la BD -
// usar la variables de entorno que hay en .env
import dotenv from "dotenv";
// para conectar a la BB
import connectBD from "./config/bd.js";

// para conexion openai
import OpenAI from "openai";


//cargas las variables de entorno en el .env
dotenv.config();
const PORT = process.env.PORT || 3000;

// conectar con la BBDD

await connectBD();

const api = express();

// uso del Middleware para que acepte las peticiones
api.use(cors());

// se pasa a json para las peticiones de post/put (crear y editar)
api.use(express.json());

// rutas
import router from "./router/router.js"
api.use("/", router)



const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


api.listen(PORT, () => console.log(`API funcionando en puerto ${PORT}`));
