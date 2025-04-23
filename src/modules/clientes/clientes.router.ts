import { Router } from "express";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
import { actualizarUsuarioById, crearUsuario, eliminarUsuarioById, obtenerUsuarioById, obtenerUsuarios } from "./clientes.controller";
import { schemaCrearCliente } from "./clientes.shema";





const router = Router();


router.post("/",
    [
        joiValidateMiddleware(schemaCrearCliente)
    ],
    crearUsuario);

// router.put("/:id", [joiValidateMiddleware(schemaActualizarUsuario)], actualizarUsuarioById)


// router.get("/", [], obtenerUsuarios);

// router.get("/:id", [], obtenerUsuarioById);

// router.delete("/:id", [], eliminarUsuarioById);


export default router;