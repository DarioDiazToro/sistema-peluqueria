import Joi from 'joi';

export const schemaCrearUsuario = Joi.object({
    nombres: Joi.string().required(),
    apellidos: Joi.string().required(),
    activo: Joi.boolean(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    rol: Joi.string().required()
});