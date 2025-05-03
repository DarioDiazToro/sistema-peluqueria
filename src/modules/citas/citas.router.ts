import { Router } from "express";
import { schemaCrearCita, schemaActualizarCita } from "./citas.shema";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
import {
    crearCita,
    actualizarCitaById,
    obtenerCitaById,
    obtenerCitas,
    eliminarCitaById
} from "./citas.controller";

const router = Router();

router.post("/", [
    joiValidateMiddleware(schemaCrearCita)
], crearCita);

router.put("/:id", [
    joiValidateMiddleware(schemaActualizarCita)
], actualizarCitaById);

router.get("/:id", [], obtenerCitaById);
router.get("/", [], obtenerCitas);

router.delete("/:id", [], eliminarCitaById);

export default router;
