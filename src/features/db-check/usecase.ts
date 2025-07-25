// src/features/db-check/usecase.ts
import { runHealthCheckQuery } from "./repository"

export const checkDatabaseHealth = async () => {
  const result = await runHealthCheckQuery()
  return result
}
