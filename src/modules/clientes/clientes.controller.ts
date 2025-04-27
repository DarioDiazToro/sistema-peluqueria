import { Request, Response, } from "express";
// import { actualizarUsuarioServiceById, crearUsuarioService, deleteUsuarioByIdService, obtenerUsuarioByIdService, obtenerUsuariosService, actualizarClienteServiceById } from './clientes.service';
import { respuesta } from "../../common/response.common";
import { crearClienteService } from "./clientes.service";
import { number } from "joi";

import { actualizarClienteServiceById } from "./clientes.service"; // importa bien

export const crearUsuario = async (req: Request, res: Response) => {
    try {

        const usuarioService = await crearClienteService(req.body);

        respuesta(res, usuarioService.statusCode, true, usuarioService.message, usuarioService.data);
        return;

    } catch (error: any) {
        console.error("Error crearUsuariosController====>", error, error.message);
        respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
        return;
    };

};


export const actualizarClienteById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;

        console.log("1", data);

        // Validación específica del teléfono
        if (data.telefono) {
            const telefono = String(data.telefono).trim();
            if (telefono.length !== 10 || !/^\d+$/.test(telefono)) {
                return respuesta(res, 400, false, "El teléfono debe tener exactamente 10 dígitos numéricos.", null);
            }
            data.telefono = telefono; // normalizado
        }

        const clienteActualizado = await actualizarClienteServiceById(Number(id), data);

        respuesta(res, 200, true, "Cliente actualizado correctamente", clienteActualizado);
    }
    catch (error: any) {
        console.error("Error actualizarClienteController ====>", error.message);
        respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
    }
};




// export const obtenerUsuarios = async (req: Request, res: Response) => {

//     try {

//         const page = parseInt(req.query.page as string) || 1;
//         const limit = parseInt(req.query.limit as string) || 10;


//         const answer = await obtenerUsuariosService(page, limit);
//         respuesta(res, answer.code, answer.success, answer.message, answer.data);
//     } catch (error: any) {
//         console.error("Error obtenerUsuariosController====>", error, error.message);
//         respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
//     }

// };

// export const obtenerUsuarioById = async (req: Request, res: Response) => {

//     try {

//         const { id } = req.params;
//         const answer = await obtenerUsuarioByIdService(Number(id));
//         respuesta(res, answer.code, answer.success, answer.message, answer.data);
//     } catch (error: any) {
//         console.error("Error obtenerUsuariosbyidController====>", error, error.message);
//         respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
//     }

// };

// export const eliminarUsuarioById = async (req: Request, res: Response) => {

//     try {
//         const { id } = req.params;

//         const answer = await deleteUsuarioByIdService(Number(id));
//         respuesta(res, answer.code, answer.success, answer.message, answer.data);
//     } catch (error: any) {
//         console.error("Error eliminarUsuariosController====>", error, error.message);
//         respuesta(res, 422, false, `Error inesperado ${error.message}`, null);
//     }

// };

