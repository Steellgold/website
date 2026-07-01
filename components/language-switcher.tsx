"use client";

import { locales, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { IconGlobe } from "@tabler/icons-react";
import { useLocale } from "next-intl";
import { useState, useTransition } from "react";

const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

export const LanguageSwitcher = () => {
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
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 rounded-md",
          "bg-[#2d2d2d] hover:bg-[#242424]",
          "text-sm text-white transition-colors",
          "border border-[#3d3d3d]",
          isPending && "opacity-50 cursor-not-allowed"
        )}
        disabled={isPending}
        aria-label="Switch language"
      >
        <IconGlobe className="w-4 h-4" />
        <span>{localeNames[locale]}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full mt-2 right-0 z-20 bg-[#1d1d1d] border border-[#3d3d3d] rounded-md shadow-lg min-w-[120px]">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm transition-colors",
                  "hover:bg-[#2d2d2d] first:rounded-t-md last:rounded-b-md",
                  loc === locale && "bg-[#2d2d2d] text-white font-medium",
                  loc !== locale && "text-gray-300"
                )}
              >
                {localeNames[loc]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

