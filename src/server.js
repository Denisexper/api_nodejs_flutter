import express from 'express';
import { connectDB } from './config/connection.js';
import alumnoRoutes from './routes/alumno.routes.js';
import { port } from './services/enviroments.service.js'; 

const app = express();

app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// conexion a la base de datos
connectDB();

app.get("/", (req, res) => {
    res.send("Bienvenido a la API de alumnos");
});

app.use("/api", alumnoRoutes);