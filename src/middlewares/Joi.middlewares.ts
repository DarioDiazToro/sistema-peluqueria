
import { RequestHandler } from "express";
import { respuesta } from "../common/response.common";

// Middleware con tipado correcto
export const joiValidateMiddleware = (schema: any): RequestHandler => {
    return (req, res, next) => {
        const verificacion = schema.validate(req.body);

        if (verificacion.error) {
            const message = verificacion.error.details[0].message;
            respuesta(res, 422, false, message, null);
            return; // ✅ IMPORTANTE: return void, no devolver `res`
        }

        next(); // ✅ Llamada a next()
    };
};
