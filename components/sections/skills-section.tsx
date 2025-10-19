import { Section } from "@/components/section";
import { Skill } from "@/components/skill";
import { piano } from "@/lib/font";
import { cn } from "@/lib/utils";
import { ReactElement } from "react";

export const SkillsSection = (): ReactElement => {
  return (
    <Section name="Using">
      <div className="flex flex-wrap items-center gap-1 sm:gap-1">
        <Skill name="React" />
        <Skill name="Next" />
        <Skill name="Tailwind" />
        <Skill name="shadcn/ui" />
        <Skill name="TypeScript" />
        <Skill name="BetterAuth" />
        <Skill name="Prisma" />
        <Skill name="Vercel" />
        <Skill name="Supabase" />
        <Skill name="OpenAI" />
        <Skill name="Stripe" />
        <Skill name="Neon" />
        <Skill name="Zod" />
        <Skill name="Turborepo" />
        <Skill name="AWS" />
        <Skill name="PostgreSQL" />
        <Skill name="Nodejs" />
        <Skill name="Upstash" />
        <Skill name="Redis" />

        <span className={cn(piano.className, "ml-3 text-sm sm:text-lg")}>
          and many others...
        </span>
      </div>
    </Section>
  );
};