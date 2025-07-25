// src/pages/api/db-check.ts
import type { NextApiRequest, NextApiResponse } from "next"
import { handleDbCheck } from "@/features/db-check/controller"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const result = await handleDbCheck()
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message })
  }
}
