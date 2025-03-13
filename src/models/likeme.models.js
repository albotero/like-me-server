import pool from "../config/db/connection.db.js"

const executeQuery = async (sqlQuery) => (await pool.query(sqlQuery)).rows

export const getPosts = async () =>
  await executeQuery({
    text: `
      SELECT * FROM posts
      ORDER BY id DESC`,
  })

export const addPost = async ({ titulo, url, descripcion }) =>
  await executeQuery({
    text: `
      INSERT INTO posts (titulo, img, descripcion)
      VALUES ($1, $2, $3)
      RETURNING *`,
    values: [titulo, url, descripcion],
  })

export const addLike = async ({ id }) =>
  await executeQuery({
    text: `
      UPDATE posts
      SET likes = COALESCE (likes, 0) + 1
      WHERE id = $1
      RETURNING *`,
    values: [id],
  })

export const delPost = async ({ id }) =>
  await executeQuery({
    text: `
    DELETE FROM posts
    WHERE id = $1`,
    values: [id],
  })
