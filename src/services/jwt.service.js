import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../services/enviroments.service.js';

export const generateToken = (payload) => {

    const token = jwt.sign(
        payload,
        JWT_SECRET,
        { expiresIn: '1h' }
    )
    return token;
}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded;
    } catch (error) {
        throw new Error("Token no válido");
    }
}