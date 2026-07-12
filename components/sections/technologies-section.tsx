import { SkillBadge } from "@/components/skill-badge";
import { TECHNOLOGIES_GRID } from "@/config/skills";
import { lastik } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const TechnologiesSection: FC = () => {
  const t = useTranslations("technologies");

  return (
    <section className="flex flex-col gap-3 w-full mt-12">
      <h2 className={cn("text-2xl sm:text-3xl", lastik.className)}>{t("title")}</h2>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
        {TECHNOLOGIES_GRID.map((name) => (
          <SkillBadge key={name} name={name} className="w-full justify-center sm:w-auto sm:justify-start" />
        ))}
      </div>
    </section>
  );
};