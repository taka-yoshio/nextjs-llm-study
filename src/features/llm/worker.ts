// src/features/llm/worker.ts
import { updateJobResult } from "./repository"
import { sendToGemini } from "./sendToGemini"

export async function processPrompt(job_id: string, prompt: string) {
  try {
    const result = await sendToGemini(prompt)

    // 取得した結果をDBに保存
    await updateJobResult(job_id, result)
  } catch (err) {
    console.error("Gemini処理中にエラー:", err)
    // 必要に応じて、status = 'FAILED' にするなど
  }
}
