import { NextRequest, NextResponse } from "next/server";

// @ts-ignore
const middleware = async(req): Promise<NextResponse> => {
  const requestHeaders = new Headers(req.headers)

  requestHeaders.set('request-ip', req.ip);
  requestHeaders.set('request-url', req.url);
  requestHeaders.set('request-geo', JSON.stringify(req.geo));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}