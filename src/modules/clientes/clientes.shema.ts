import Joi from 'joi';

export const schemaCrearCliente = Joi.object({
    telefono: Joi.string().required().length(10), // Validación de teléfono de 10 dígitos
    usuario_id: Joi.number().required(), // Validación del usuario_id
    activo: Joi.boolean(),

});

export const schemaActualizarCliente = Joi.object({

    nombres: Joi.string().required(),
    apellidos: Joi.string().required(),

    telefono: Joi.number().required(),
    activo: Joi.boolean(),



});



