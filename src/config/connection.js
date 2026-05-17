import mongoose from "mongoose";
import { mongoURI } from "../services/enviroments.service.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Conexión a la base de datos establecida"); 
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}