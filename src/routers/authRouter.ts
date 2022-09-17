import { Router } from "express";
import {signinController, signupController} from '../controllers/authControler';
import userValidate from "../middlewares/authRegisterMiddlewares";


const authRouter = Router();

authRouter.post('/signin', userValidate, signinController);
authRouter.post('/signup', userValidate, signupController);//coloca o validate token

export default authRouter;
