// creamos la conexión con la BBDD

import mongoose from "mongoose";

const connectBD = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB,
    });
    console.log("Se ha conectado a MongoDB")
  } catch (error) {
    console.error("Error de conexción a MongoDB: ", error)
    process.exit(1)
  }
};

export default connectBD