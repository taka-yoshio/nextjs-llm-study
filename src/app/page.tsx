"use client"

import { useState } from "react"
import { PromptInput } from "@/components/llm/PromptInput"
import { JobIdDisplay } from "@/components/llm/JobIdDisplay"

export default function Home() {
  const [jobId, setJobId] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Gemini Job Sender
            </h1>
            <p className="text-lg text-gray-600">
              AIモデルにプロンプトを送信して、ジョブを作成します
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                プロンプトを入力
              </h2>
              <p className="text-gray-600">
                Geminiに送信したいプロンプトを下記に入力してください。
              </p>
            </div>
            <PromptInput onJobId={(id) => setJobId(id)} />
          </div>

          {jobId && (
            <div className="animate-fade-in">
              <JobIdDisplay jobId={jobId} />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
