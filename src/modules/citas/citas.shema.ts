import Joi from 'joi';

export const schemaCrearCita = Joi.object({
    cliente_id: Joi.number().required(),
    servicio_id: Joi.number().required(),
    fecha: Joi.date().required(),
    hora: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required(), // HH:MM formato 24h
    estado: Joi.string().valid('pendiente', 'confirmada', 'cancelada').default('pendiente')
});


export const schemaActualizarCita = Joi.object({
    cliente_id: Joi.number(),
    servicio_id: Joi.number(),
    fecha: Joi.date(),
    hora: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/),
    estado: Joi.string().valid('pendiente', 'confirmada', 'cancelada')
});