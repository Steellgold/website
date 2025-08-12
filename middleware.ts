import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const UI_HOSTNAMES = new Set(["ui.steellgold.fr", "ui.gaetanhus.fr"]);

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const hostname = nextUrl.hostname;
  const pathname = nextUrl.pathname;

  if (UI_HOSTNAMES.has(hostname)) {
    const isAlreadyUi = pathname === "/ui" || pathname.startsWith("/ui/");
    const isAsset = pathname.startsWith("/_next") || pathname.startsWith("/api") || /\.[\w-]+$/.test(pathname);

    if (!isAlreadyUi && !isAsset) {
      const url = nextUrl.clone();
      url.pathname = "/ui";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

// Avoid running on common static asset paths to reduce overhead
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|og-image.png|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt)).*)",
  ],
};


