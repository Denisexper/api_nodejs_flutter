import { Alumno } from "../models/alumno.js";

export class AuthController {

    async login (req, res) {

        const { name, carnet } = req.body;

        if(!name || !carnet){
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }

        try {
            
            const alumno = await Alumno.findOne({ name, carnet });

            if(!alumno){
                return res.status(404).json({ message: "Alumno no encontrado" });
            }

            return res.status(200).json({
                msj: "Login exitoso",
                data: alumno
            });
        } catch (error) {

            return res.status(500).json({ message: "Error en el servidor" });
        }
    }

    async register (req, res) {

        const { name, carnet, carrera } = req.body;

        if(!name || !carnet || !carrera){
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }

        const alumnoExist = await Alumno.findOne({ carnet });

        if(alumnoExist){
            return res.status(400).json({ message: "El carnet ya está registrado" });
        }

        if(carnet.length !== 8){
            return res.status(400).json({ message: "El carnet debe tener 8 caracteres" });
        }   
        try {
            
            const newAlumno = await Alumno.create({ name, carnet, carrera });

            return res.status(201).json({
                msj: "Alumno registrado correctamente",
                data: {
                    name: newAlumno.name,
                    carnet: newAlumno.carnet,
                    carrera: newAlumno.carrera
                }
            });
        } catch (error) {

            return res.status(500).json({ message: "Error en el servidor" });

        }
    }

}