import { Schema, model } from "mongoose";

const alumnoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    carnet: {
        type: String,
        required: true,
    },
    carrera: {
        type: String,
        required: true,
    }
})

export const Alumno = model("Alumno", alumnoSchema);