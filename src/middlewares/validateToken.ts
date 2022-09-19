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
      const JWT_SECRET = process.env.JWT_SECRET;
      const { userId } = jwt.verify(token, JWT_SECRET) as { userId: number };
      res.locals.user = userId;
      next();
    } catch {
      throw {code:'Invalid token' };
    }
  }