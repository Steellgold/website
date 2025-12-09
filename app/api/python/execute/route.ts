import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

interface ExecuteRequest {
  code: string;
  inputs?: string[];
}

export async function POST(request: NextRequest) {
  try {
    const { code, inputs = [] }: ExecuteRequest = await request.json();

    if (!code) {
      return NextResponse.json(
        { success: false, error: "No code provided" },
        { status: 400 }
      );
    }

    const stdin = inputs.join("\n");

    const response = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: "python",
        version: "3.10.0",
        files: [
          {
            name: "main.py",
            content: code,
          },
        ],
        stdin: stdin,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: "Failed to execute Python code" },
        { status: 500 }
      );
    }

    const result = await response.json();

    const outputs: string[] = [];
    let needsInput = false;

    if (result.run?.stdout) {
      const lines = result.run.stdout.split("\n");
      outputs.push(...lines);
    }

    if (result.run?.stderr) {
      const stderr = result.run.stderr;
      if (stderr.includes("EOFError: EOF when reading a line")) {
        needsInput = true;
      } else {
        const errors = stderr.split("\n").filter((line: string) => line.trim());
        outputs.push(...errors.map((line: string) => `⚠️ ${line}`));
      }
    }

    if (result.compile?.stderr) {
      const compileErrors = result.compile.stderr.split("\n").filter((line: string) => line.trim());
      outputs.push(...compileErrors.map((line: string) => `❌ ${line}`));
    }

    return NextResponse.json({
      success: !result.run?.stderr || needsInput,
      output: outputs.length > 0 ? outputs : ["✓ Code exécuté avec succès"],
      needsInput: needsInput,
      code: result.run?.code || 0,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
