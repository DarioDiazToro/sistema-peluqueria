import { getRespuestaCommon } from "../../common/response.common";
import { ClienteEntity } from '../../models/cliente';
import { UsuarioEntity } from "../../models/usuario";


export const crearClienteService = async (body: any) => {
    // Validar si el usuario existe
    const usuario = await UsuarioEntity.findOneBy({ id: body.usuario_id });
    if (!usuario) {
        throw new Error('Usuario no encontrado'); // Si no se encuentra el usuario, lanzar un error
    }

    // Crear un nuevo cliente
    const cliente = ClienteEntity.create({
        telefono: body.telefono,
        usuario: usuario, // Asignamos el usuario relacionado
    });

    // Guardar el cliente en la base de datos
    const data = await cliente.save();

    // Respuesta común
    return {
        success: true,
        statusCode: 200,
        message: 'Cliente creado correctamente',
        data,
    };
};

export const actualizarClienteServiceById = async (id: any, datos: any) => {

    const usuario = await ClienteEntity.findBy({ id });
    console.log("2", usuario)


    if (usuario.length === 0) {
        return {
            msg: `no existe en la BD id- ${id} `,
            code: 422,
            data: null
        };
    };

    await ClienteEntity.update(id, datos);

    const usuarioActualizado = await ClienteEntity.findOne({ where: { id } });
    console.log("usuarioactuliazadp", usuarioActualizado)

    return {
        msg: "actualizar ok",
        code: 200,
        data: { usuario: usuario, usuarioActualizado }
    };

};

export const obtenerClienteByIdService = async (id: any) => {
    const usuario = await ClienteEntity.findBy({ id });

    if (usuario.length === 0) {
        return getRespuestaCommon(false, 422, `El usuario con el id ${id} no existe en la base de datos`);
    };

    return getRespuestaCommon(true, 200, `Obtner usuario by id ok`, usuario);
};

export const obtenerClienteService = async (page: number, limit: number) => {

    const [data, total] = await ClienteEntity.findAndCount({
        skip: (page - 1) * limit,
        take: limit,

    });

    const totalPages = Math.ceil(total / limit);

    return getRespuestaCommon(true, 200, "obtener todos ok", { usuarios: data, total, totalPages, currentPage: page })
};


export const deleteClienteByIdService = async (id: any) => {
    const item = await ClienteEntity.findBy({ id });

    const usuario = item[0];
    if (!usuario) {

        return getRespuestaCommon(false, 422, `No existe un usuario con id ${id} en la base de datos`);
    };

    if (!usuario.activo) {
        return getRespuestaCommon(true, 200, `El usuario con id ${id} ya se encuentra eliminado`);
    };
    await ClienteEntity.update({ id }, { activo: false });
    const usuarioEliminado = await ClienteEntity.findOne({ where: { id } });
    return getRespuestaCommon(true, 200, `usuario eliminado ok`, usuarioEliminado);
};
















