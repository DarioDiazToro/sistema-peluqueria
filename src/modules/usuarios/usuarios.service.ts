import { getRespuestaCommon } from "../../common/response.common";
import { UsuarioEntity } from "../../models/usuario";
import bcryptjs from "bcryptjs";


export const crearUsuarioService = async (body: any) => {

    const usuario = await UsuarioEntity.create(body);
    const { password } = body;
    const salt = bcryptjs.genSaltSync();

    usuario.password = bcryptjs.hashSync(password, salt);
    const data = await UsuarioEntity.save(usuario);

    return getRespuestaCommon(true, 200, "crear usuario ok", data);
};
