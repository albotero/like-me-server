import pool from "../config/db/connection.db.js"

const executeQuery = async (sqlQuery) => (await pool.query(sqlQuery)).rows

export const getPosts = async () =>
  executeQuery({
    text: "SELECT * FROM posts",
  })

export const addPost = async ({ titulo, url, descripcion }) =>
  executeQuery({
    text: `
      INSERT INTO posts (titulo, img, descripcion)
      VALUES ($1, $2, $3)
      RETURNING *`,
    values: [titulo, url, descripcion],
  })
