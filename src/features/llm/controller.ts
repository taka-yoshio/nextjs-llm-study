// src/features/llm/controller.ts
import { createJobUseCase, getJobUseCase } from "./usecase"

type CreateJobRequest = {
  prompt: string
}

export async function createJobController(body: CreateJobRequest) {
  const { prompt } = body

  if (!prompt || typeof prompt !== "string") {
    throw new Error("Invalid prompt")
  }

  const result = await createJobUseCase(prompt)
  return result
}

export async function getJobController(job_id: string) {
  if (!job_id || typeof job_id !== "string") {
    throw new Error("Invalid job_id")
  }

  const result = await getJobUseCase(job_id)
  return result
}
