import { Request, Response, } from "express";
import { crearUsuarioService } from "./usuarios.service";
import { respuesta } from "../../common/response.common";


export const crearUsuario = async (req: Request, res: Response) => {
    try {

        const usuarioService = await crearUsuarioService(req.body);

        respuesta(res, usuarioService.code, true, usuarioService.message, usuarioService.data);
        return;

    } catch (error: any) {
        console.error("Error obtenerUsuariosController====>", error, error.message);
        respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
        return;
    };

};