// import dotenv from "dotenv";
// import Cryptr from "cryptr";
// import bcrypt from "bcrypt";
// import jwt from 'jsonwebtoken';
import { exemploConsultaBanco, UserInsertData } from "../repositories/exemploRepository";
// dotenv.config();



export async function exemploexemploService(user:UserInsertData) {
    const email:string = String(user.email);
    const senha:string = String(user.senha);
    exemploConsultaBanco
    console.log("estou no service");
}
