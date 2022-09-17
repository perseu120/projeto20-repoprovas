import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import * as authRepository from "../repositories/authRepository";
dotenv.config();


export async function login(user:authRepository.UserInsertData) {
    const email:string = String(user.email);
    const password:string = String(user.password);

    const userData = await emailExists(email);

    
    const isValidPassword = comparePassword(password, userData.password);

    if(!isValidPassword){
        throw {
            code :"Unauthorized"
        }
    }
    
    const token = createToken(userData);

    return token;    
}

function createToken(user:authRepository.User){
    const SECRET: string = process.env.TOKEN_SECRET_KEY ?? '';

    const token = jwt.sign(user, SECRET);
    
    return token;
}

function comparePassword(password: string, hashPassword: string) {

    return bcrypt.compareSync(password, hashPassword);
}

export async function createUser(user:authRepository.UserInsertData) {
    const email:string = String(user.email);
    const password:string = String(user.password);

    await emailExists(email, true);
    
    const hashPassword = encryptPassword(password);
    
    const insetUser:authRepository.UserInsertData = {email, password:hashPassword}

    await authRepository.createUser(insetUser);
    
}

function encryptPassword(password: string) {
    
    const hashPassword = bcrypt.hashSync(password, parseInt(process.env.KEY));

    return hashPassword;
}

async function emailExists(email:string, errorOnExists:boolean=false) {
    const hasUser = await authRepository.findUserByEmail(email);
 
    if((!!hasUser ) === errorOnExists){
        throw {
            code: 'Conflict'
        }
    }

    return hasUser
}