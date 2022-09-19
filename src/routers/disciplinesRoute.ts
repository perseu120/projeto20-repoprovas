import { Router } from "express";
import { getDisciplines } from "../controllers/disciplinesController";

const disciplinesRoute = Router();

disciplinesRoute.get("/disciplines", getDisciplines);

export default disciplinesRoute;
