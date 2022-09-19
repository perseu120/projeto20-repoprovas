import { Router } from "express";
import { getTeachers } from "../controllers/teachersController";

const teachersRoute = Router();

teachersRoute.get("/teachers", getTeachers);

export default teachersRoute;
