import { getConnection } from "@/lib/db"
import { RowDataPacket } from "mysql2"

export type JobRow = {
  job_id: string
  prompt: string
  status: string
  result_text?: string
} & RowDataPacket

export type JobInsert = {
  job_id: string
  prompt: string
  status: string
}

// データ挿入
export async function insertJob(job: JobInsert) {
  const conn = await getConnection()
  await conn.execute(
    "INSERT INTO llm_jobs (job_id, prompt, status) VALUES (?, ?, ?)",
    [job.job_id, job.prompt, job.status],
  )
}

// データ取得
export async function findJobById(job_id: string): Promise<JobRow | null> {
  const conn = await getConnection()
  const [rows] = await conn.execute<JobRow[]>(
    "SELECT * FROM llm_jobs WHERE job_id = ?",
    [job_id],
  )
  return rows.length > 0 ? rows[0] : null
}

export async function updateJobResult(job_id: string, result_text: string) {
  const conn = await getConnection()
  await conn.execute(
    "UPDATE llm_jobs SET result_text = ?, status = ? WHERE job_id = ?",
    [result_text, "DONE", job_id],
  )
}
