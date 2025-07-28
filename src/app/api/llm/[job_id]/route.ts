// src/app/api/llm/[jobId]/route.ts
import { NextResponse } from "next/server"
import { getJobController } from "@/features/llm/controller"

export async function GET(
  _: Request,
  { params }: { params: { job_id: string } },
) {
  try {
    const job_id = params.job_id
    const result = await getJobController(job_id)
    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Job not found" }, { status: 404 })
  }
}
