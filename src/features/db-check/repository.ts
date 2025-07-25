// src/features/db-check/repository.ts
import { getConnection } from "@/lib/db"

export const runHealthCheckQuery = async () => {
  const connection = await getConnection()
  const [rows] = await connection.query("SELECT 1")
  await connection.end()
  return rows
}
