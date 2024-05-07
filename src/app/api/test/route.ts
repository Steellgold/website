import { NextRequest, NextResponse } from "next/server";

export const GET = async({ geo, headers, ip }: NextRequest): Promise<NextResponse> => {
  const data = await fetch("https://ipapi.co/json/");

  return NextResponse.json({
    ip,
    headers,
    geo,
    data: await data.json(),
    dataButWithFromVercel: (await fetch(`https://ipapi.co/${ip}/json/`)).json(),
  });
}