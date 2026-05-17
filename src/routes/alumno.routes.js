import { Router } from "express";
import { getAlumnos, createAlumno, updateAlumno, deleteAlumno} from "../controlles/alumno.controller.js";

const router = Router();

router.get("/alumnos", getAlumnos);
router.post("/alumnos", createAlumno);
router.put("/alumnos/:id", updateAlumno);
router.delete("/alumnos/:id", deleteAlumno);

export default router;