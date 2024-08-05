import { NextResponse } from 'next/server';

export const GET = async(): Promise<NextResponse> => {
  const response = await fetch("https://simplist.blog/api/clvb16vqu0000syvk0rfb7pjx/last", {
    headers: {
      "x-api-key": process.env.SIMPLIST_API_KEY!
    } as HeadersInit,
    cache: "no-cache"
  });

  if (!response.ok) {
    console.error('Failed to fetch data');
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }

  const data = await response.json();
  
  return NextResponse.json(data);
}