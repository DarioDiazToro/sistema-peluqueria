import { Router } from "express";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
import { crearUsuario } from "./usuarios.controller";
import { schemaCrearUsuario } from "./usuarios.shema";





const router = Router();


router.post("/",
    [
        joiValidateMiddleware(schemaCrearUsuario)
    ],
    crearUsuario);


export default router;