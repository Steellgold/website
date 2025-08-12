import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const UI_HOSTNAMES = new Set(["ui.steellgold.fr", "ui.gaetanhus.fr", "ui.localhost"]);

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const hostHeader = request.headers.get("host")?.toLowerCase() ?? "";
  const hostname = hostHeader.split(":")[0];
  const pathname = nextUrl.pathname;

  if (UI_HOSTNAMES.has(hostname)) {
    const isAlreadyUi = pathname === "/ui" || pathname.startsWith("/ui/");
    const isAsset = pathname.startsWith("/_next") || pathname.startsWith("/api") || /\.[\w-]+$/.test(pathname);

    if (!isAlreadyUi && !isAsset) {
      const url = nextUrl.clone();
      url.pathname = pathname === "/" ? "/ui" : `/ui${pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|og-image.png|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt)).*)",
  ],
};


