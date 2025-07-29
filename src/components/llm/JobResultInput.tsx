"use client"

import { useState } from "react"

type Props = {
  onResult: (text: string) => void
}

export function JobResultInput({ onResult }: Props) {
  const [job_id, setJobId] = useState("")

  const handleFetch = async () => {
    const res = await fetch(`/api/check-job/${job_id}`)
    const data = await res.json()
    onResult(data.result ?? "結果がありません")
  }

  return (
    <div className="mb-4">
      <input
        value={job_id}
        onChange={(e) => setJobId(e.target.value)}
        placeholder="jobIdを入力"
        className="border p-2 mr-2"
      />
      <button onClick={handleFetch} className="bg-blue-500 text-white p-2">
        結果を取得
      </button>
    </div>
  )
}
