import { Request, Response } from "express";
import { respuesta } from "../../common/response.common";
import { loginUsuarioService } from "./auth.services";

export const loginUsuario = async (req: Request, res: Response) => {
    try {
        const resultado = await loginUsuarioService(req.body);
        respuesta(res, resultado.code, resultado.success, resultado.message, resultado.data);
    } catch (error: any) {
        console.error("Error loginUsuarioController ====>", error);
        respuesta(res, 500, false, `Error inesperado: ${error.message}`, null);
    }
};
