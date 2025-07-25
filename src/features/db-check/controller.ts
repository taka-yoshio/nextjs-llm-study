// src/features/db-check/controller.ts
import { checkDatabaseHealth } from "./usecase"

export const handleDbCheck = async () => {
  const result = await checkDatabaseHealth()
  return { success: true, result }
}
