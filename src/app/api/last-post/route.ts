import { NextResponse } from "next/server";

export const GET = async(): Promise<NextResponse> => {
  try {
    const randomString = Math.random().toString(36).substring(7);
    const response = await fetch("https://simplist.blog/api/clvb16vqu0000syvk0rfb7pjx/last?nocache=" + randomString, {
      headers: {
        "x-api-key": process.env.SIMPLIST_API_KEY || "",
        "Cache-Control": "no-cache"
      } as HeadersInit
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}