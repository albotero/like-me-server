import express from "express"
import cors from "cors"
import envs from "./src/config/envs.js"
import likeMeRoutes from "./src/routes/likeme.routes.js"

const whiteList = [envs.SERVER_URL, envs.CLIENT_URL]

const app = express()

app.use(
  cors({
    origin: (origin, callback) =>
      !origin || whiteList.includes(origin)
        ? callback(null, true)
        : callback(new Error(`CORS Error: ${origin}`), false),
    credentials: true,
  })
)
app.use(express.json())
app.use("/posts", likeMeRoutes)

app.listen(envs.PORT, console.log(`Server listening on port ${envs.PORT}`))
