import { defaultLocale, locales } from "@/i18n/routing";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const getLocale = (request: NextRequest): string => {
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale as any)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const languages = acceptLanguage
      .split(',')
      .map((lang: string) => lang.split(';')[0].trim().toLowerCase());
    
    for (const lang of languages) {
      if (locales.includes(lang as any)) {
        return lang;
      }

      const prefix = lang.split('-')[0];
      if (locales.includes(prefix as any)) {
        return prefix;
      }
    }
  }

  return defaultLocale;
};

export function proxy(request: NextRequest) {
  const { nextUrl } = request;
  const pathname = nextUrl.pathname;

  const locale = getLocale(request);
  const response = NextResponse.next();
  
  response.headers.set('x-next-intl-locale', locale);
  
  if (!request.cookies.get('NEXT_LOCALE')) {
    response.cookies.set('NEXT_LOCALE', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|og-image.png|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt)).*)",
  ],
};
