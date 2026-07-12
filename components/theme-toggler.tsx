"use client"

import { useScrolled } from "@/hooks/use-scrolled"
import { cn } from "@/lib/utils"
import { RiMoonLine, RiSunLine } from "@remixicon/react"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import { FC } from "react"

export const ThemeToggler: FC = () => {
  const t = useTranslations("theme")
  const { resolvedTheme, setTheme } = useTheme()
  const isScrolled = useScrolled()
  const isExpanded = !isScrolled
  // resolvedTheme is undefined before next-themes resolves the stored value
  // client-side; default to the site's defaultTheme ("dark") so server and
  // client render the same thing on the first pass and avoid a hydration mismatch.
  const isDark = resolvedTheme !== "light"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "flex h-10 items-center justify-center gap-0 rounded-full px-2.5",
        "bg-card hover:bg-accent shadow-lg",
        "border border-border transition-all duration-300",
        isExpanded && "sm:gap-2 sm:px-4"
      )}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <RiMoonLine className="h-5 w-5 shrink-0" />
      ) : (
        <RiSunLine className="h-5 w-5 shrink-0" />
      )}
      <span
        className={cn(
          "grid grid-cols-[0fr] transition-all duration-300",
          isExpanded && "sm:grid-cols-[1fr]"
        )}
      >
        <span className="min-w-0 overflow-hidden text-sm whitespace-nowrap">
          {isDark ? t("dark") : t("light")}
        </span>
      </span>
    </button>
  )
}
