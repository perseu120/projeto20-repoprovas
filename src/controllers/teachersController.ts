import { Request, Response } from "express";
import teachersService from "../services/teachersService";

export async function getTeachers(req: Request, res: Response) {
  const { disciplineName } = req.body as { disciplineName: string };
  if (!disciplineName) {
    throw {
        code :"NotFound"
    }
  }
  const teachers = await teachersService.getTeachersByDiscipline(disciplineName);

  res.status(200).send({ teachers });
}
