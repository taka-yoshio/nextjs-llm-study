// src/features/llm/sendToGemini.ts

export async function sendToGemini(prompt: string): Promise<string> {
  // 本来はここで fetch などを使って Gemini API を叩くが、今回はモック実装
  console.log("Sending prompt to Gemini:", prompt)

  // 模擬的な応答を返す
  return `【Geminiの応答】${prompt} に対する回答です。`
}
