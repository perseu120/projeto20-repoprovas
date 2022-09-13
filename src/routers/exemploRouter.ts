import { Router } from "express";
import {exemploController} from '../controllers/exemploControler';


const exemploRouter = Router();

exemploRouter.post('/login', exemploController);

export default exemploRouter;
