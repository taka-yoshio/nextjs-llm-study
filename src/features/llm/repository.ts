// src/features/llm/repository.ts
import { getConnection } from "@/lib/db"

type Job = {
  job_id: string
  prompt: string
  status: string
}

export async function insertJob(job: Job) {
  const conn = await getConnection()
  await conn.execute(
    "INSERT INTO llm_jobs (job_id, prompt, status) VALUES (?, ?, ?)",
    [job.job_id, job.prompt, job.status],
  )
}
