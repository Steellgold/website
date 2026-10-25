import { CV_URLS } from "@/config/site";
import Link from "next/link";

import { getLocale, getTranslations } from "next-intl/server";

export const FtrvCards = async () => {
  const t = await getTranslations("ftrv");
  const locale = (await getLocale()) as keyof typeof CV_URLS;
  const cards = [
    {
      title: t("portfolio.title"),
      description: t("portfolio.description"),
      href: "/",
      external: false,
    },
    {
      title: t("resume.title"),
      description: t("resume.description"),
      href: CV_URLS[locale] ?? CV_URLS.en,
      external: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {cards.map(({ title, description, href, external }) => {
        const className = "flex h-full flex-col gap-2 rounded-lg border border-border bg-card/40 p-4 sm:p-5";
        const content = (
          <>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
          </>
        );

        return external ? (
          <a key={title} href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {content}
          </a>
        ) : (
          <Link key={title} href={href} className={className}>
            {content}
          </Link>
        );
      })}
    </div>
  );
};
