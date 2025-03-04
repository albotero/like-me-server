import { addPost, getPosts } from "../models/likeme.models.js"

const execute = async ({ res, success, callback, args }) => {
  try {
    res.status(success).json(await callback(args))
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getAllPosts = (_, res) =>
  execute({
    res,
    success: 200,
    callback: getPosts,
  })

export const createPost = (req, res) =>
  execute({
    res,
    success: 201,
    callback: addPost,
    args: req.body,
  })
