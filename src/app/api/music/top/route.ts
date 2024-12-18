import { getStatsSpotify } from "@/lib/spotify";
import { NextResponse } from "next/server";

export const GET = async (req: Request): Promise<NextResponse> => {
  const data = await getStatsSpotify("all", "all");
  if (!data) {
    return NextResponse.json({ error: "No data found" }, { status: 404 });
  }

  return NextResponse.json(data);
};