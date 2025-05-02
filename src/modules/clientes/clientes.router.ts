import { Router } from "express";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
import { schemaActualizarCliente, schemaCrearCliente, } from "./clientes.shema";
import { actualizarClienteById, crearUsuario, eliminarClienteById, obtenerClienteById, obtenerClientes } from "./clientes.controller";






const router = Router();


router.post("/",
    [
        joiValidateMiddleware(schemaCrearCliente)
    ],
    crearUsuario);

// router.put("/:id", [joiValidateMiddleware(schemaActualizarCliente)], actualizarClienteById);


router.get("/", [], obtenerClientes)

router.get("/:id", [], obtenerClienteById);

router.delete("/:id", [], eliminarClienteById);



export default router;