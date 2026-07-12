"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CV_URLS } from "@/config/site";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { RiDownloadLine } from "@remixicon/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FC, useState } from "react";

export const CvFloatingButton: FC = () => {
  const t = useTranslations("cv");
  const locale = useLocale() as "fr" | "en";
  const isScrolled = useScrolled();
  const isExpanded = !isScrolled;
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const link = (
    <Link
      href={CV_URLS[locale] ?? CV_URLS.en}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-center gap-0 h-10 px-2.5 rounded-full",
        "bg-foreground text-background hover:bg-foreground/90 shadow-lg",
        "border border-border transition-all duration-300",
        isExpanded && "gap-2 px-4"
      )}
      aria-label="View CV"
    >
      <RiDownloadLine className="w-5 h-5 shrink-0" />
      <span
        className={cn(
          "grid grid-cols-[0fr] transition-all duration-300",
          isExpanded && "grid-cols-[1fr]"
        )}
      >
        <span className="min-w-0 overflow-hidden text-sm whitespace-nowrap">{t("view")}</span>
      </span>
    </Link>
  );

  return (
    <Tooltip open={!isExpanded && tooltipOpen} onOpenChange={setTooltipOpen}>
      <TooltipTrigger asChild>{link}</TooltipTrigger>
      <TooltipContent side="left">{t("view")}</TooltipContent>
    </Tooltip>
  );
};
