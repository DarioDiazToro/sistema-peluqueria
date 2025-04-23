import Joi from 'joi';

export const schemaCrearCliente = Joi.object({
    nombres: Joi.string().required(),
    apellidos: Joi.string().required(),
    activo: Joi.boolean(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    rol: Joi.string().required(),
    telefono: Joi.string().required().length(10),
});

export const schemaActualizarCliente = Joi.object({
    nombres: Joi.string().required(),
    apellidos: Joi.string().required(),
    telefono: Joi.number().required(),
    activo: Joi.boolean(),
    password: Joi.string().optional(),
    email: Joi.string().email().required(),
    rol: Joi.string()
});

