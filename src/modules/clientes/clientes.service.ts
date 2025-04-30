import { getRespuestaCommon } from "../../common/response.common";
import { ClienteEntity } from "../../models/cliente";
// import bcryptjs from "bcryptjs";
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

// export const actualizarUsuarioServiceById = async (id: any, datos: any) => {

//     const usuario = await UsuarioEntity.findBy({ id });


//     if (usuario.length === 0) {
//         return {
//             msg: `no existe en la BD id- ${id} `,
//             code: 422,
//             data: null
//         };
//     };

//     await UsuarioEntity.update(id, datos);

//     const usuarioActualizado = await UsuarioEntity.findOne({ where: { id } });

//     return {
//         msg: "actualizar ok",
//         code: 200,
//         data: { usuario: usuario, usuarioActualizado }
//     };

// };

// export const obtenerUsuarioByIdService = async (id: any) => {
//     const usuario = await UsuarioEntity.findBy({ id });

//     if (usuario.length === 0) {
//         return getRespuestaCommon(false, 422, `El usuario con el id ${id} no existe en la base de datos`);
//     };


//     if (!usuario[0].activo) {
//         return getRespuestaCommon(false, 422, `El usuario con el id ${id} se enecuentra inactivo en el sistema`);
//     };

//     return getRespuestaCommon(true, 200, `Obtner usuario by id ok`, usuario);
// };

// export const obtenerUsuariosService = async (page: number, limit: number) => {

//     const [data, total] = await UsuarioEntity.findAndCount({
//         skip: (page - 1) * limit,
//         take: limit,
//         where: { activo: true }
//     });

//     const totalPages = Math.ceil(total / limit);

//     return getRespuestaCommon(true, 200, "obtener todos ok", { usuarios: data, total, totalPages, currentPage: page })
// };


// export const deleteUsuarioByIdService = async (id: any) => {
//     const item = await UsuarioEntity.findBy({ id });

//     const usuario = item[0];
//     if (!usuario) {

//         return getRespuestaCommon(false, 422, `No existe un usuario con id ${id} en la base de datos`);
//     };

//     if (!usuario.activo) {
//         return getRespuestaCommon(true, 200, `El usuario con id ${id} ya se encuentra eliminado`);
//     };
//     await UsuarioEntity.update({ id }, { activo: false });
//     const usuarioEliminado = await UsuarioEntity.findOne({ where: { id } });
//     return getRespuestaCommon(true, 200, `usuario eliminado ok`, usuarioEliminado);
// };






// export const actualizarPasswordUsuarioService = async (documento: string, password: string): Promise<IRespuestaFuncion> => {

//     const [usuario] = await UsuarioEntity.findBy({ documento_identificacion: documento });
//     if (!usuario) {
//         return getRespuestaCommon(false, 422, `El usuario con documento ${documento} no existe en la base de datos`);

//     };

//     const salt = bcryptjs.genSaltSync();

//     const nuevaPassword = bcryptjs.hashSync(password, salt);

//     const actualizado = await UsuariosEntity.update({ documento_identificacion: documento }, { password: nuevaPassword })

//     if (!actualizado) {
//         return getRespuestaCommon(false, 422, "No se logro actualizar la contraseña");
//     };

//     return getRespuestaCommon(true, 200, "Contraseña actualizada");

// };











