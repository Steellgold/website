import { NextResponse } from "next/server";

export async function GET () {
  return NextResponse.redirect(new URL("https://better-md.vercel.app"));
}