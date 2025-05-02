import { Request, Response } from "express";
import { respuesta } from "../../common/response.common";
import {
    crearServicioService,
    actualizarServicioServiceById,
    obtenerServicioByIdService,
    obtenerServiciosService,
    eliminarServicioByIdService
} from "./servicios.service";

export const crearServicio = async (req: Request, res: Response) => {
    const answer = await crearServicioService(req.body);
    respuesta(res, answer.code, true, answer.msg, answer.data);
};

export const actualizarServicioById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const answer = await actualizarServicioServiceById(Number(id), req.body);
    respuesta(res, answer.code, answer.success, answer.message, answer.data);
};

export const obtenerServicioById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const answer = await obtenerServicioByIdService(Number(id));
    respuesta(res, answer.code, answer.success, answer.message, answer.data);
};

export const obtenerServicios = async (req: Request, res: Response) => {
    const answer = await obtenerServiciosService();
    respuesta(res, answer.code, answer.success, answer.message, answer.data);
};

export const eliminarServicioById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const answer = await eliminarServicioByIdService(Number(id));
    respuesta(res, answer.code, answer.success, answer.message, answer.data);
};