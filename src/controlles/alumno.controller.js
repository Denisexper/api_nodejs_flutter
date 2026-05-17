import { Alumno } from "../models/alumno.js";

export const getAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        res.status(200).json({
            msj: "Alumnos obtenidos correctamente",
            data: alumnos
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createAlumno = async (req, res) => {
    const { name, carnet, carrera } = req.body;
    console.log("Body recibido:", req.body);
    try {
        const newAlumno = await Alumno.create({ name, carnet, carrera });
        return res.status(201).json({
            msj: "Alumno creado correctamente",
            data: newAlumno
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}