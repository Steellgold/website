"use client";

import { SkillBadge } from "@/components/skill-badge";
import { Social_Malt } from "@/components/social-icons";
import { piano } from "@/lib/font";
import { cn } from "@/lib/utils";
import { RiDownloadLine, RiGithubFill, RiLinkedinBoxFill, RiTwitterXFill } from "@remixicon/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const CV_URL = "https://cdn.gaetanhus.fr/resume.pdf";

export const HeaderSection: FC = () => {
  const t = useTranslations("header");
  const tCv = useTranslations("cv");

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <div className="flex flex-row items-center gap-3 sm:gap-4">
          <div className="flex shrink-0 self-center sm:self-auto relative">
            <Image
              src="https://cdn.gaetanhus.fr/assets/me.png"
              alt="Gaëtan Huszovits"
              width={74}
              height={74}
              className="rounded-xl"
            />
          </div>

          <div className="flex flex-col text-left min-w-0">
            <span className="text-md sm:text-lg text-muted-foreground">{t("hello")}</span>
            <h1 className={cn("text-3xl sm:text-4xl", piano.className)}>Gaëtan Huszovits</h1>
          </div>
        </div>

        <Link
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-card hover:bg-accent border border-border text-sm transition-colors shrink-0"
        >
          <RiDownloadLine className="w-3.5 h-3.5" />
          <span>{tCv("view")}</span>
        </Link>
      </div>

      <div className="mt-1 sm:mt-2 text-muted-foreground">
        <p>
          {t("fullStackDeveloper")}{" "}
          <SkillBadge name="TypeScript" size="xs" className="align-middle mx-0.5" />{" "}
          {t("fullStackDeveloperSuffix")}
        </p>
        <p>{t("pitch")}</p>
      </div>

      <div
        className={cn(
          "flex flex-row flex-wrap gap-2 *:bg-card *:hover:bg-accent",
          "*:px-2.5 *:py-1 *:flex *:flex-row *:items-center *:gap-2 *:text-sm",
          "*:border *:border-border *:rounded-md *:transition-colors"
        )}
      >
        <Link href="https://www.linkedin.com/in/gaetanhus/" target="_blank" rel="noopener noreferrer" className="group">
          <RiLinkedinBoxFill className="w-3.5 h-3.5 group-hover:text-[#0077B5]" />
          <span>LinkedIn</span>
        </Link>

        <Link href="https://www.malt.fr/profile/gaetanhuszovits" target="_blank" rel="noopener noreferrer" className="group">
          <Social_Malt className="w-3.5 h-3.5 group-hover:text-[#FC5656]" />
          <span>Malt</span>
        </Link>

        <Link href="https://github.com/Steellgold" target="_blank" rel="noopener noreferrer" className="group">
          <RiGithubFill className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </Link>

        <Link href="https://x.com/Steellgold" target="_blank" rel="noopener noreferrer" className="group">
          <RiTwitterXFill className="w-3.5 h-3.5" />
          <span>X</span>
        </Link>
      </div>
    </div>
  );
};