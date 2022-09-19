import { NextFunction, Response, Request } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();


export default async function validateToken(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers['authorization'];
    if (!authorization) throw {
        code :"Unauthorized"
    };
  
    const token = authorization.replace('Bearer ', '');
    if (!token) throw {
        code :"Unauthorized"
    };;
  
    try {             
      const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY;
      const { userId } = jwt.verify(token, TOKEN_SECRET_KEY) as { userId: number };
      res.locals.user = userId;
      next();
    } catch {
      throw {code:'Invalid token' };
    }
  }