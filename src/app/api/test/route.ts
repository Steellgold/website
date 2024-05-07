import { NextRequest, NextResponse } from "next/server";

export const GET = async(req: NextRequest): Promise<NextResponse> => {
  console.log("Request Headers", req);

  return NextResponse.json({
    ip: req.ip || "No IP",
    test: {
      0: req.ip,
      1: req.headers,
      2: req.geo
    }
    // dataButWithFromVercel: (await fetch(`https://ipapi.co/${ip}/json/`)).json(),
  });
}