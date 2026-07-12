"use client";

import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { RiDownloadLine } from "@remixicon/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

const CV_URL = "https://cdn.gaetanhus.fr/resume.pdf";

export const CvFloatingButton: FC = () => {
  const t = useTranslations("cv");
  const isScrolled = useScrolled();
  const isExpanded = !isScrolled;

  return (
    <Link
      href={CV_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-center gap-0 h-10 px-2.5 rounded-full",
        "bg-card hover:bg-accent shadow-lg",
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
};
