import dotenv from "dotenv";

dotenv.config();

const ENVS = [
    "PORT",
    "MONGO_URI",
    "JWT_SECRET"
]

ENVS.forEach(env => {
    if(!process.env[env]){
        console.error(`Error: Missing environment variable ${env}`);
        process.exit(1);
    }
})

export const mongoURI = process.env.MONGO_URI;
export const port = process.env.PORT;
export const jwtSecret = process.env.JWT_SECRET;