import { createIdSchema, createPostSchema } from "./schemes/likeme.schema.js"

const execute = async (schema, data, res, next) => {
  const { error } = await schema.validate(data)
  if (error) {
    const errorMessage = error.details.map(({ message }) => message)
    res.status(400).json(errorMessage)
  } else next()
}

export const createPostMiddleware = async (req, res, next) => await execute(createPostSchema, req.body, res, next)

export const createIdMiddleware = async (req, res, next) => await execute(createIdSchema, req.params, res, next)
