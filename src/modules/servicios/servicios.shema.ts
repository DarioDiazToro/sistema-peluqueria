//REAME: IMPORT PACKAGE
import Joi from 'joi';


export const schemaCrearServicio = Joi.object({
    nombre: Joi.string().required(),
    codigo: Joi.string().required(),
    valor: Joi.number().required(),
    estado: Joi.string().required(),
    tipo_corte: Joi.string().required()
})

export const schemaActualizarServicio = Joi.object({
    nombre: Joi.string().required(),
    codigo: Joi.string().required(),
    valor: Joi.number().required(),
    estado: Joi.string().required(),
    tipo_corte: Joi.string().required()

})