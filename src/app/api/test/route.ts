import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';

export const GET = async(req: NextRequest): Promise<NextResponse> => {
  const data = await fetch(`https://ipapi.co/json/`);

  return NextResponse.json(data || {
    error: 'No data found'
  });
}