import {Request, Response} from 'express';
import categoriesServices from "../services/categoriesService.js";


export async function getCategories( req:Request, res: Response){
  const categories = await categoriesServices.getCategories();

  res.status(200).send({categories})
}