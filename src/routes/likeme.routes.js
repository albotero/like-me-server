import { Router } from "express"
import { createPost, getAllPosts } from "../controllers/likeme.controllers.js"
import { createLikeMeMiddleware } from "../middlewares/likeme.middlewares.js"

const router = Router()

router.get("/", getAllPosts)
router.post("/", createLikeMeMiddleware, createPost)

export default router
