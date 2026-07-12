import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/config/projects";
import { piano } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

const FEATURED_COUNT = 4;

export const ProjectsSection: FC = () => {
  const t = useTranslations("projects");
  const featuredProjects = [...PROJECTS]
    .sort((a, b) => Number(b.featured) - Number(a.featured))
    .slice(0, FEATURED_COUNT);

  return (
    <section className="flex flex-col gap-3 w-full mt-12">
      <div className="flex items-center justify-between">
        <h2 className={cn("text-3xl sm:text-4xl", piano.className)}>{t("title")}</h2>
        <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          {t("viewAll")} ({PROJECTS.length})
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.name} project={project} showBanner={index < 2} />
        ))}
      </div>
    </section>
  );
};