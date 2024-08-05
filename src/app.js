import express from "express";
import morgan from  "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors';

//Rutas
import authRoutes from './routes/auth.routes.js';
import formDescount from './routes/formDescount.routes.js';

const app = express();

//Cors
app.use(cors());

//Morgan
app.use(morgan('dev'));


app.use(express.json());
app.use(cookieParser());

//Rutas
app.use("/api",authRoutes)
app.use(formDescount)

export default app;