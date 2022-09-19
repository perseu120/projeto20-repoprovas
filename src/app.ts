import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import "express-async-errors";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";
import authRouter from "./routers/authRouter";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use(authRouter);
app.use(errorHandlerMiddleware);


export default app;

