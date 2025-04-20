import { Router } from "express";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
import { loginUsuario } from "./auth.controller";
import { schemaLoginUsuario } from "./auth.shema";





const router = Router();


router.post("/login",
    [
        joiValidateMiddleware(schemaLoginUsuario)
    ],
    loginUsuario);


export default router;