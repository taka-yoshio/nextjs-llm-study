import type { NextApiRequest, NextApiResponse } from "next"
import mysql from "mysql2/promise"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    })

    const [rows] = await connection.query("SELECT 1")
    await connection.end()

    res.status(200).json({ success: true, result: rows })
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message })
  }
}
