"use client";

import { useScrolled } from "@/hooks/use-scrolled";
import { type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { FC, useTransition } from "react";

const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

const localeFlags: Record<Locale, string> = {
  fr: "fr",
  en: "gb",
};

const otherLocale: Record<Locale, Locale> = {
  fr: "en",
  en: "fr",
};

export const LanguageSwitcher: FC = () => {
  const locale = useLocale() as Locale;
  const [isPending, startTransition] = useTransition();
  const isScrolled = useScrolled();
  const isExpanded = !isScrolled;

  const toggleLocale = () => {
    const newLocale = otherLocale[locale];
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;

    startTransition(() => {
      window.location.reload();
    });
  };

  return (
    <button
      onClick={toggleLocale}
      className={cn(
        "flex items-center justify-center gap-0 h-10 px-2.5 rounded-full",
        "bg-card hover:bg-accent shadow-lg",
        "border border-border transition-all duration-300",
        isExpanded && "sm:gap-2 sm:px-4",
        isPending && "opacity-50 cursor-not-allowed"
      )}
      disabled={isPending}
      aria-label="Switch language"
    >
      <img
        src={`/flags/${localeFlags[locale]}.svg`}
        alt=""
        className="w-5 h-5 rounded-full object-cover shrink-0"
      />
      <span
        className={cn(
          "grid grid-cols-[0fr] transition-all duration-300",
          isExpanded && "sm:grid-cols-[1fr]"
        )}
      >
        <span className="min-w-0 overflow-hidden text-sm whitespace-nowrap">
          {localeNames[locale]}
        </span>
      </span>
    </button>
  );
};