"use client";

import { locales, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { FC, useState, useTransition } from "react";

const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

const localeFlags: Record<Locale, string> = {
  fr: "fr",
  en: "gb",
};

export const LanguageSwitcher: FC = () => {
  const locale = useLocale() as Locale;
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;

    startTransition(() => {
      window.location.reload();
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full",
            "bg-card hover:bg-accent shadow-lg",
            "border border-border transition-colors",
            isPending && "opacity-50 cursor-not-allowed"
          )}
          disabled={isPending}
          aria-label="Switch language"
        >
          <img
            src={`/flags/${localeFlags[locale]}.svg`}
            alt=""
            className="w-5 h-5 rounded-full object-cover"
          />
        </button>

        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <div className="absolute bottom-full mb-2 right-0 z-20 bg-card border border-border rounded-md shadow-lg min-w-30">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className={cn(
                    "w-full flex items-center gap-2 text-left px-4 py-2 text-sm transition-colors",
                    "hover:bg-accent first:rounded-t-md last:rounded-b-md",
                    loc === locale ? "text-foreground font-medium" : "text-muted-foreground"
                  )}
                >
                  <img
                    src={`/flags/${localeFlags[loc]}.svg`}
                    alt=""
                    className="w-4 h-4 rounded-sm object-cover"
                  />
                  {localeNames[loc]}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};