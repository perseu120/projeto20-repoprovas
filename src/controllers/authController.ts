import { UserInsertData } from '../repositories/authRepository';
import { Response, Request } from "express";
import  * as authService from '../services/authService'

export async function signinController(req: Request, res: Response){

    const recebeDados:UserInsertData = req.body;

    const token = await  authService.login(recebeDados);
    res.status(200).send({token});
}

export async function signupController(req: Request, res: Response){

    const recebeDados:UserInsertData = req.body;

    await authService.createUser(recebeDados);

    res.status(201).send("usuario criado com sucesso");
}