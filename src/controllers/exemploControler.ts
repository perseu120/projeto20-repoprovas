import { UserInsertData } from './../repositories/exemploRepository';
import { exemploConsultaBanco } from '../repositories/exemploRepository';
import { Response, Request } from "express";
import { exemploexemploService} from '../services/exemploService';

export async function exemploController(req: Request, res: Response){

    const recebeDados:UserInsertData = req.body.email;

    const token = await exemploexemploService(recebeDados);
 
    res.status(200).send("cheguei no controlador");
}
