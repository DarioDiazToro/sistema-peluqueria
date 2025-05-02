
import { getRespuestaCommon, IRespuestaFuncion } from "../../common/response.common";
import { ServicioEntity } from "../../models/servicio";


export const crearServicioService = async (datos: any) => {

    const servicios = await ServicioEntity.find();
    const servicio = await ServicioEntity.create(datos);
    const { codigo } = servicio;
    for (let i = 0; i < servicios.length; i++) {
        const codigos = servicios[i].codigo;
        if (codigos === codigo) {
            return {
                msg: `El codigo ${codigo} debe ser unico ya existes en la base de datos`,
                code: 400,
                data: null,
            }
        };
    };
    await ServicioEntity.save(servicio);
    return {
        code: 200,
        msg: "crear ok",
        data: servicio,
    }
};

export const actualizarServicioServiceById = async (id: number, datos: any) => {
    const servicio = await ServicioEntity.findBy({ id });

    const item = servicio[0];

    if (!item) {
        return getRespuestaCommon(false, 422, `no existe un servicio con el id ${id} en la Base de datos`)
    };

    await ServicioEntity.update({ id }, datos);

    const servicioActualizado = await ServicioEntity.findOne({ where: { id } });

    return getRespuestaCommon(true, 200, "actualizar ok", { servicio, servicioActualizado });

};



export const obtenerServiciosService = async () => {
    const servicios = await ServicioEntity.findBy({ estado: "pendiente" });
    const totalServicios = await ServicioEntity.countBy({ estado: "pediente" });


    return getRespuestaCommon(true, 200, "obtener todos ok", servicios, { total: totalServicios });
};

export const obtenerServicioByIdService = async (id: number) => {

    const item = await ServicioEntity.findBy({ id });
    const servicio = item[0];
    if (!servicio) {
        return getRespuestaCommon(false, 422, `El servicio con el id ${id} no existe en la base de datos`);

    };

    return getRespuestaCommon(true, 200, "obtener servicio by id ok", servicio);

};



export const eliminarServicioByIdService = async (id: any) => {

    const item = await ServicioEntity.findBy({ id });
    const servicio = item[0];
    console.log(servicio);

    if (!servicio) {
        return getRespuestaCommon(false, 422, `No existe un id ${id} en la base de datos`, null);
    };

    await ServicioEntity.update({ id }, { estado: "cancelado" });
    const servicioEliminado = await ServicioEntity.findOne({ where: { id } });
    return getRespuestaCommon(true, 200, "eliminacion ok", servicioEliminado);
};