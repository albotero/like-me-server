import { addLike, addPost, delPost, getPosts } from "../models/likeme.models.js"

const execute = async ({ res, success, callback, args }) => {
  try {
    res.status(success).json(await callback(args))
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getAllPosts = async (_, res) =>
  await execute({
    res,
    success: 200,
    callback: getPosts,
  })

export const createPost = async (req, res) =>
  await execute({
    res,
    success: 201,
    callback: addPost,
    args: req.body,
  })

export const likePost = async (req, res) =>
  await execute({
    res,
    success: 200,
    callback: addLike,
    args: req.params,
  })

export const deletePost = async (req, res) =>
  await execute({
    res,
    success: 204,
    callback: delPost,
    args: req.params,
  })
