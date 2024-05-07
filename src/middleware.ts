import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const clientIP = request.ip ?? "127.0.0.1";
  console.log(`MW: clientIP: ${clientIP}`);

  const x_real_ip = request.headers.get('x-real-ip');
  const x_forwarded_for = request.headers.get('x-forwarded-for');

  console.log(`MW: x-real-ip: ${x_real_ip}`);
  console.log(`MW: x-forwarded-for: ${x_forwarded_for}`);
}