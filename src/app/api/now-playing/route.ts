import { PostSchema } from "@/lib/types/post.type";
import { getNowPlaying } from "@/lib/utils/spotify/spotify";
import { NextResponse } from "next/server";

export const GET = async(): Promise<NextResponse> => {
  try {
    const track = await getNowPlaying();
    if (!track || !track.is_playing) {
      return NextResponse.json({ error: "No track playing" }, { status: 404 });
    }

    return NextResponse.json(track);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}