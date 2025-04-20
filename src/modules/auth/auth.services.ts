import { UsuarioEntity } from "../../models/usuario";
import bcryptjs from "bcryptjs";
import { getRespuestaCommon } from "../../common/response.common";

export const loginUsuarioService = async (body: any) => {
    const { email, password } = body;

    const usuario = await UsuarioEntity.findOneBy({ email });

    if (!usuario) {
        return getRespuestaCommon(false, 404, "Usuario no encontrado", null);
    }

    const passwordValida = bcryptjs.compareSync(password, usuario.password);

    if (!passwordValida) {
        return getRespuestaCommon(false, 401, "Contraseña incorrecta", null);
    }

    // Aquí puedes incluir un token si usas JWT
    // const token = jwt.sign({ id: usuario.id, email: usuario.email }, 'secreto', { expiresIn: '1h' });

    return getRespuestaCommon(true, 200, "Login exitoso", {
        id: usuario.id,
        nombres: usuario.nombres,
        email: usuario.email,
        rol: usuario.rol,
        // token // <- si decides usar JWT
    });
};
