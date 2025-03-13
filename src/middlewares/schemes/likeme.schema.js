import Joi from "joi"

export const createPostSchema = Joi.object({
  titulo: Joi.string().required(),
  url: Joi.string().uri().required(),
  descripcion: Joi.string().required(),
})

export const createIdSchema = Joi.object({
  id: Joi.number().required(),
})
