import Joi from 'joi';

export const schemaLoginUsuario = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
