import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const data = {
    ok: true,
    ip: req.headers.get("x-real-ip") ?? "127.0.0.1",
    message: "Hello from the API",
  };
  
  return new NextResponse(JSON.stringify(data, null, 2));
}