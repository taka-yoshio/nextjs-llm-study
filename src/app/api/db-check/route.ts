// src/app/api/db-check/route.ts
import { NextResponse } from "next/server"
import { handleDbCheck } from "@/features/db-check/controller"

export async function GET() {
  try {
    const result = await handleDbCheck()
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 },
    )
  }
}
