import { Router } from "express";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
// import { actualizarUsuarioById, crearUsuario, eliminarUsuarioById, obtenerUsuarioById, obtenerUsuarios } from "./clientes.controller";
import { schemaActualizarCliente, schemaCrearCliente, } from "./clientes.shema";
import { actualizarClienteById, crearUsuario } from "./clientes.controller";





const router = Router();


router.post("/",
    [
        joiValidateMiddleware(schemaCrearCliente)
    ],
    crearUsuario);

router.put("/:id", [joiValidateMiddleware(schemaActualizarCliente)], actualizarClienteById)


// router.get("/", [], obtenerUsuarios);

// router.get("/:id", [], obtenerUsuarioById);

// router.delete("/:id", [], eliminarUsuarioById);


export default router;