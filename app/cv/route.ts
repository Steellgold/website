import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "CV.pdf")
    const fileBuffer = await fs.readFile(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=CV.pdf",
      },
    })
  } catch (error) {
    console.error("Error serving CV:", error)
    return NextResponse.json(
      { error: "CV not found" },
      { status: 404 }
    )
  }
}
