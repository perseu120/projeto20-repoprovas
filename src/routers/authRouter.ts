import { Router } from "express";
import {signinController, signupController} from '../controllers/authController';
import userValidate from "../middlewares/authRegisterMiddlewares";


const authRouter = Router();

authRouter.post('/signin', userValidate, signinController);
authRouter.post('/signup', userValidate, signupController);

export default authRouter;
