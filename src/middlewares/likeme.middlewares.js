import { createLikeMeSchema } from "./schemes/likeme.schema.js"

export const createLikeMeMiddleware = async (req, res, next) => {
  const { error } = createLikeMeSchema.validate(req.body)
  if (error) {
    const errorMessage = error.details.map(({ message }) => message)
    res.status(400).json(errorMessage)
  } else next()
}
