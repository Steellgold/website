import { NextRequest, NextResponse } from "next/server";

export const GET = async({ geo, headers }: NextRequest): Promise<NextResponse> => {
  const data = await fetch("https://ipapi.co/json/");

  return NextResponse.json({
    xForwardedFor: headers.get("x-forwarded-for"),
    geo,
    data: await data.json()
  });
}