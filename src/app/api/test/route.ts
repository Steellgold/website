import { NextRequest, NextResponse } from "next/server";

export const GET = async({ geo, headers }: NextRequest): Promise<NextResponse> => {
  const data = await fetch("https://ipapi.co/json/");

  return NextResponse.json({
    xForwardedFor: headers.get("x-forwarded-for"),
    remoteAddress: headers.get("x-real-ip"),
    requestIp: headers.get("x-request-ip"),
    requestheaderIp: headers.get('request-ip'),
    geo,
    data: await data.json()
  });
}