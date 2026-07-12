"use client";

import { CONTACT_EMAIL } from "@/config/site";
import { lastik } from "@/lib/font";
import { cn } from "@/lib/utils";
import { RiCheckLine, RiExternalLinkLine, RiFileCopyLine } from "@remixicon/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC, useState } from "react";

export const FreelanceSection: FC = () => {
  const t = useTranslations("freelance");
  const servicesPrimary = t.raw("servicesPrimary") as string[];
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="flex flex-col gap-4 w-full mt-12 border border-border rounded-lg p-5 sm:p-6 bg-card/40">
      <div className="flex flex-col gap-2">
        <h2 className={cn("text-2xl sm:text-3xl text-pretty", lastik.className)}>{t("title")}</h2>
        <p className="text-muted-foreground text-pretty">{t("pitch")}</p>
      </div>

      <ul className="flex flex-col gap-2">
        {servicesPrimary.map((service) => (
          <li key={service} className="flex items-center gap-2 text-sm">
            <RiCheckLine className="w-4 h-4 text-flag-blue shrink-0" />
            {service}
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-2 pt-4 border-t border-border">
        <span className="text-sm text-muted-foreground">{t("quoteNote")}</span>

        <div className="flex flex-row gap-2 w-full sm:w-auto sm:ml-auto">
          <Link
            href="https://www.malt.fr/profile/gaetanhuszovits"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-sm hover:bg-accent transition-colors"
          >
            <span className="sm:hidden">Malt</span>
            <span className="hidden sm:inline">{t("maltCta")}</span>
            <RiExternalLinkLine className="w-3.5 h-3.5" />
          </Link>

          <div className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-primary text-primary-foreground pl-3 pr-1.5 py-1.5 text-sm font-medium">
            <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>
            <button
              onClick={handleCopy}
              aria-label="Copy email"
              className="flex items-center justify-center w-6 h-6 rounded-sm hover:bg-primary-foreground/10 transition-colors"
            >
              {copied ? <RiCheckLine className="w-3.5 h-3.5" /> : <RiFileCopyLine className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};