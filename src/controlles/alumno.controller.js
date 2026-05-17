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

    //validar campos obligatorios
    if(!name || !carnet || !carrera){
        return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

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

export const updateAlumno = async (req, res) => { 

    const { id } = req.params;
    const { name, carnet, carrera } = req.body;
    
    // verificar si el id es de mongo
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ message: "ID no válido" });
    }
    
    //buscar alumno para ver si existe
    const alumonoExist = await Alumno.findById(id);
    if(!alumonoExist){
        return res.status(404).json({ message: "Alumno no existe" });
    }

    try {
        
        const updatedAlumno = await Alumno.findByIdAndUpdate(id, { name, carnet, carrera }, { new: true });

        return res.status(200).json({
            msj: "Alumno actualizado correctamente",
            data: {
                name: updatedAlumno.name,
                carnet: updatedAlumno.carnet,
                carrera: updatedAlumno.carrera
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteAlumno = async (req, res) => {
    const { id } = req.params;

    // verificar si el id es de mongo
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ message: "ID no válido" });
    }
    
    //buscar alumno para ver si existe
    const alumonoExist = await Alumno.findById(id);
    if(!alumonoExist){
        return res.status(404).json({ message: "Alumno no existe" });
    }

    try {
        
        const deletedAlumno = await Alumno.findByIdAndDelete(id);

        return res.status(200).json({
            msj: "Alumno eliminado correctamente",
            data: {
                name: deletedAlumno.name,
                carnet: deletedAlumno.carnet,
                carrera: deletedAlumno.carrera
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}