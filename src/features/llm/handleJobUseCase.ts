// src/features/llm/handleJobUseCase.ts

import { updateJobResult } from "./repository"
import { sendToGemini } from "./sendToGemini"

export async function handleJobUseCase(job_id: string, prompt: string) {
  try {
    const result_text = await sendToGemini(prompt)
    await updateJobResult(job_id, result_text)
  } catch (error) {
    console.error("Job handling failed:", error)
    // エラー時の処理（任意でDBにエラーログ保存など）
  }
}
