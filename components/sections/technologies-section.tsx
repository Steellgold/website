import { SkillBadge } from "@/components/skill-badge";
import { TECHNOLOGIES_GRID } from "@/config/skills";
import { piano } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const TechnologiesSection: FC = () => {
  const t = useTranslations("technologies");

  return (
    <section className="flex flex-col gap-3 w-full mt-12">
      <h2 className={cn("text-3xl sm:text-4xl", piano.className)}>{t("title")}</h2>
      <div className="flex flex-wrap gap-2">
        {TECHNOLOGIES_GRID.map((name) => (
          <SkillBadge key={name} name={name} />
        ))}
      </div>
    </section>
  );
};