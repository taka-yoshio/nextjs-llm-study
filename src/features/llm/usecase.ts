// src/features/llm/usecase.ts
import { insertJob } from "./repository"

export async function createJobUseCase(prompt: string) {
  const job_id = generateJobId()
  const status = "PENDING"

  await insertJob({ job_id, prompt, status })

  return { job_id }
}

function generateJobId(): string {
  const now = Date.now().toString()
  const random = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0")
  return `${now}${random}`
}
