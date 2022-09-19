import { Request, Response } from "express";
import disciplinesServices from "../services/disciplinesService";

export async function getDisciplines(req: Request, res: Response) {
  const { categoryName } = req.body as { categoryName: string };
  if (!categoryName) {
    throw {
        code :"Bad Request"
    }
  }
  const disciplines = await disciplinesServices.getDisciplinesByCategoryName(
    categoryName
  );

  res.status(200).send({ disciplines });
}
