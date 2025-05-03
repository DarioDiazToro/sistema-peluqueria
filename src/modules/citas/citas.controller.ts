import { Request, Response } from "express";
import { respuesta } from "../../common/response.common";
import {
    crearCitaService,
    actualizarCitaServiceById,
    obtenerCitaByIdService,
    obtenerCitasService,
    eliminarCitaByIdService
} from "./citas.service";

export const crearCita = async (req: Request, res: Response) => {
    const respuestaServicio = await crearCitaService(req.body);
    respuesta(res, respuestaServicio.code, respuestaServicio.success, respuestaServicio.message, respuestaServicio.data);
};

export const actualizarCitaById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const respuestaServicio = await actualizarCitaServiceById(Number(id), req.body);
    respuesta(res, respuestaServicio.code, respuestaServicio.success, respuestaServicio.message, respuestaServicio.data);
};

export const obtenerCitaById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const respuestaServicio = await obtenerCitaByIdService(Number(id));
    respuesta(res, respuestaServicio.code, respuestaServicio.success, respuestaServicio.message, respuestaServicio.data);
};

export const obtenerCitas = async (_req: Request, res: Response) => {
    const respuestaServicio = await obtenerCitasService();
    respuesta(res, respuestaServicio.code, respuestaServicio.success, respuestaServicio.message, respuestaServicio.data);
};

export const eliminarCitaById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const respuestaServicio = await eliminarCitaByIdService(Number(id));
    respuesta(res, respuestaServicio.code, respuestaServicio.success, respuestaServicio.message, respuestaServicio.data);
};
