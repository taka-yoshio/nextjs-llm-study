// src/features/llm/controller.ts
import { createJobUseCase } from "./usecase"

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
