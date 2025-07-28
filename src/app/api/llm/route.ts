// src/app/api/llm/route.ts
import { NextResponse } from "next/server"
import { createJobController } from "@/features/llm/controller"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const result = await createJobController(body)
    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    )
  }
}
