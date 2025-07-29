import { getShortLink } from '@/lib/shortener';
import { RESERVED_SHORT_LINKS } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';

type Props = {
  params: Promise<{ short: string }>
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const { short } = await params;

    if (RESERVED_SHORT_LINKS.includes(short)) {
      return new NextResponse("Not found", { status: 404 });
    }

    const shortLink = await getShortLink(short);

    if (!shortLink) {
      return new NextResponse("Not found", { status: 404 });
    }

    if (shortLink.password) {
      return NextResponse.redirect(new URL(`/${short}/password`, request.url));
    }

    return NextResponse.redirect(shortLink.url);
  } catch (error) {
    console.error("Error in short link route:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}