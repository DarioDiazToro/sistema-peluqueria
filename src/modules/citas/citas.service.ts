import { CitaEntity } from "../../models/citas";
import { getRespuestaCommon } from "../../common/response.common";
import { ClienteEntity } from "../../models/cliente";
import { ServicioEntity } from "../../models/servicio";

export const crearCitaService = async (datos: any) => {
    const { cliente_id, servicio_id, fecha, hora } = datos;

    // Verifica que el cliente existe
    const cliente = await ClienteEntity.findOne({ where: { id: cliente_id } });
    if (!cliente) {
        return getRespuestaCommon(false, 400, `El cliente con id ${cliente_id} no existe`, null);
    }

    // Verifica que el servicio existe
    const servicio = await ServicioEntity.findOne({ where: { id: servicio_id } });
    if (!servicio) {
        return getRespuestaCommon(false, 400, `El servicio con id ${servicio_id} no existe`, null);
    }

    // Crea la cita
    const cita = CitaEntity.create({
        cliente: cliente,
        servicio: servicio,
        fecha,
        hora
    });

    // Guarda la cita en la base de datos
    await CitaEntity.save(cita);

    // Devuelve los detalles de la cita junto con el cliente y el servicio
    return getRespuestaCommon(true, 201, "Cita creada correctamente", cita);
};

export const actualizarCitaServiceById = async (id: number, data: any) => {
    const cita = await CitaEntity.findOneBy({ id });

    if (!cita) {
        return getRespuestaCommon(false, 404, `No se encontró una cita con el ID ${id}`);
    }

    await CitaEntity.update({ id }, data);
    const citaActualizada = await CitaEntity.findOneBy({ id });

    return getRespuestaCommon(true, 200, "Cita actualizada correctamente", citaActualizada);
};

export const obtenerCitaByIdService = async (id: number) => {
    const cita = await CitaEntity.findOne({
        where: { id },
        relations: ["cliente", "servicio"]
    });

    if (!cita) {
        return getRespuestaCommon(false, 404, `No se encontró la cita con ID ${id}`);
    }

    return getRespuestaCommon(true, 200, "Cita encontrada", cita);
};

export const obtenerCitasService = async () => {
    const citas = await CitaEntity.find({
        where: { estado: "pendiente" },
        relations: ["cliente", "servicio"]
    });

    const total = await CitaEntity.countBy({ estado: "pendiente" });

    return getRespuestaCommon(true, 200, "Listado de citas", citas, { total });
};

export const eliminarCitaByIdService = async (id: number) => {
    const cita = await CitaEntity.findOneBy({ id });

    if (!cita) {
        return getRespuestaCommon(false, 404, `No se encontró la cita con ID ${id}`);
    }

    await CitaEntity.update({ id }, { estado: "cancelada" });

    const citaCancelada = await CitaEntity.findOneBy({ id });
    return getRespuestaCommon(true, 200, "Cita cancelada correctamente", citaCancelada);
};
