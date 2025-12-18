// creamos la conexión con la BBDD

import mongoose from "mongoose";

const connectBD = async () => {
  try {
    /**
     * usamos variables de entorno práctica para mentener las credenciales
     * fuera del código fuente.
     */
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB,
    });
    // mensaje de éxito de conexión.
    console.log("Se ha conectado a MongoDB")
  } catch (error) {
    // en el caso de error saltará el mensaje.
    console.error("Error de conexción a MongoDB: ", error)
    // Salida crítica: cuando falla al cargar el código 1 indica error.
    process.exit(1)
  }
};

export default connectBD