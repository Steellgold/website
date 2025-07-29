import { getShortLink, incrementClicks } from "@/lib/shortener";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: Promise<{ short: string }>
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const { short } = await params;
    const shortLink = await getShortLink(short);

    if (!shortLink) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (shortLink.password) {
      return NextResponse.redirect(new URL(`/${short}/password`, request.url));
    }

    await incrementClicks(short);
    return NextResponse.redirect(shortLink.url);

  } catch (error) {
    console.error("Error in short link redirect:", error);
    return NextResponse.redirect(new URL("/", request.url));
  }
}