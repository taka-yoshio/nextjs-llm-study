"use client"

import { useState } from "react"
import { JobResultInput } from "@/components/llm/JobResultInput"
import { JobResultDisplay } from "@/components/llm/JobResultDisplay"

export default function ResultPage() {
  const [resultText, setResultText] = useState("")

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">ジョブ結果の確認</h1>
      <JobResultInput onResult={setResultText} />
      {resultText && <JobResultDisplay resultText={resultText} />}
    </main>
  )
}
