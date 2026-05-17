import { Router } from "express";
import { getAlumnos, createAlumno } from "../controlles/alumno.controller.js";

const router = Router();

router.get("/alumnos", getAlumnos);
router.post("/alumnos", createAlumno);

export default router;