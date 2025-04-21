import { Request, Response, } from "express";
import { actualizarUsuarioServiceById, crearUsuarioService, deleteUsuarioByIdService, obtenerUsuarioByIdService, obtenerUsuariosService } from "./usuarios.service";
import { respuesta } from "../../common/response.common";


export const crearUsuario = async (req: Request, res: Response) => {
    try {

        const usuarioService = await crearUsuarioService(req.body);

        respuesta(res, usuarioService.code, true, usuarioService.message, usuarioService.data);
        return;

    } catch (error: any) {
        console.error("Error crearUsuariosController====>", error, error.message);
        respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
        return;
    };

};


export const actualizarUsuarioById = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const { activo, password, rol, ...data } = req.body


        const answer = await actualizarUsuarioServiceById(id, data);
        respuesta(res, answer.code, true, answer.msg, answer.data);

    }
    catch (error: any) {
        console.error("Error actualizarUsuarioController====>", error, error.message);
        respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
        return;
    }
};



export const obtenerUsuarios = async (req: Request, res: Response) => {

    try {

        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;


        const answer = await obtenerUsuariosService(page, limit);
        respuesta(res, answer.code, answer.success, answer.message, answer.data);
    } catch (error: any) {
        console.error("Error obtenerUsuariosController====>", error, error.message);
        respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    }

};

export const obtenerUsuarioById = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const answer = await obtenerUsuarioByIdService(Number(id));
        respuesta(res, answer.code, answer.success, answer.message, answer.data);
    } catch (error: any) {
        console.error("Error obtenerUsuariosbyidController====>", error, error.message);
        respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    }

};

export const eliminarUsuarioById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;

        const answer = await deleteUsuarioByIdService(Number(id));
        respuesta(res, answer.code, answer.success, answer.message, answer.data);
    } catch (error: any) {
        console.error("Error eliminarUsuariosController====>", error, error.message);
        respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    }

};

