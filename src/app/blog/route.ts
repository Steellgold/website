import { NextRequest, NextResponse } from "next/server";

export const GET = ({ nextUrl }: NextRequest): NextResponse => {
  return NextResponse.redirect(nextUrl.origin);
}