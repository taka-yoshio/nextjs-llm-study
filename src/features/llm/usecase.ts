// src/features/llm/usecase.ts
import { insertJob, findJobById } from "./repository"
import { processPrompt } from "./worker"

export async function createJobUseCase(prompt: string) {
  const job_id = generateJobId()
  const status = "PENDING"

  await insertJob({ job_id, prompt, status })

  // 背景処理を発火（awaitしない）
  processPrompt(job_id, prompt).catch(console.error)

  return { job_id }

  return { job_id }
}

export async function getJobUseCase(job_id: string) {
  const job = await findJobById(job_id)

  if (!job) return null

  return {
    job_id: job.job_id,
    prompt: job.prompt,
    status: job.status,
    result: job.result_text || null,
  }
}

function generateJobId(): string {
  const now = Date.now().toString()
  const random = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0")
  return `${now}${random}`
}
