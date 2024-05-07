import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const response = await fetch("https://ipapi.co/json/");
  const ipData = await response.json();

  const data = {
    ok: true,
    ipData: ipData,
    ip: req.headers.get("x-real-ip") ?? "127.0.0.1",
    message: "Hello from the API",
  };
  
  return new NextResponse(JSON.stringify(data, null, 2));
}