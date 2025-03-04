import Joi from "joi"

export const createLikeMeSchema = Joi.object({
  titulo: Joi.string().required(),
  url: Joi.string().uri().required(),
  descripcion: Joi.string().required(),
})
