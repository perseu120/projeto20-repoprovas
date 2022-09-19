import { Router } from "express";
import authRoute from "../routers/authRouter";
import categoriesRoute from "../routers/categoriesRoute";
import disciplinesRoute from "../routers/disciplinesRoute";
import teachersRoute from "../routers/teachersRoute";
import validateToken from "../middlewares/validateToken"

const router = Router();
router.use(authRoute);

router.use(validateToken);
router.use(categoriesRoute);
router.use(disciplinesRoute);
router.use(teachersRoute);

export default router;
