import { defaultLocale, locales, type Locale } from "@/i18n/routing";
import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

const localeFromAcceptLanguage = (header: string | null): Locale | null => {
  if (!header) return null;

  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, qValue] = part.trim().split(";q=");
      return { tag: tag.split("-")[0].toLowerCase(), quality: qValue ? parseFloat(qValue) : 1 };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of preferred) {
    if (locales.includes(tag as Locale)) return tag as Locale;
  }

  return null;
};

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;

  let locale: Locale;

  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    locale = cookieLocale as Locale;
  } else {
    const headerStore = await headers();
    locale = localeFromAcceptLanguage(headerStore.get("accept-language")) ?? defaultLocale;
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});