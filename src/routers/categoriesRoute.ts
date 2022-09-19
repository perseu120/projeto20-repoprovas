import { Router } from "express";
import { getCategories } from "../controllers/categoriesController";

const categoriesRoute = Router();

categoriesRoute.get("/categories", getCategories);

export default categoriesRoute;
