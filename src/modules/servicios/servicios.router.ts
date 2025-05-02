
import { Router } from "express";
import { schemaActualizarServicio, schemaCrearServicio } from "./servicios.shema";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
import { actualizarServicioById, crearServicio, eliminarServicioById, obtenerServicioById, obtenerServicios } from "./servicios.controller";


const router = Router();


router.post("/", [
    joiValidateMiddleware(schemaCrearServicio)
], crearServicio);

router.put("/:id", [joiValidateMiddleware(schemaActualizarServicio)], actualizarServicioById);

router.get("/:id", [], obtenerServicioById);
router.get("/", [], obtenerServicios);


router.delete("/:id", [], eliminarServicioById);
export default router;