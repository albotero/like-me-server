import { Router } from "express"
import { createPost, deletePost, getAllPosts, likePost } from "../controllers/likeme.controllers.js"
import { createIdMiddleware, createPostMiddleware } from "../middlewares/likeme.middlewares.js"

const router = Router()

router.get("/", getAllPosts)
router.post("/", createPostMiddleware, createPost)
router.put("/like/:id", createIdMiddleware, likePost)
router.delete("/:id", createIdMiddleware, deletePost)

export default router
