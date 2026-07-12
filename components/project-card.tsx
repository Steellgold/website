import { SkillBadge } from "@/components/skill-badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { type Project } from "@/config/projects";
import { RiAwardFill, RiGithubFill } from "@remixicon/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const locale = useLocale() as "en" | "fr";
  const t = useTranslations("projects");
  const hasAward = Boolean(project.awards && project.awards.length > 0);

  return (
    <div className="flex flex-col gap-2 p-4 sm:p-5 border border-border rounded-lg bg-card/40">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <h3 className="text-lg font-semibold whitespace-nowrap">{project.name}</h3>

        <div className="flex items-center gap-1.5 shrink-0">
          {hasAward && project.githubUrl ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-6 h-6 border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-white/30 transition-colors"
                >
                  <RiGithubFill className="w-3.5 h-3.5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>{project.status}</TooltipContent>
            </Tooltip>
          ) : project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs border border-border rounded-md px-2 py-0.5 text-muted-foreground hover:text-foreground hover:border-white/30 transition-colors"
            >
              {project.status}
            </Link>
          ) : (
            <span className="text-xs border border-border rounded-md px-2 py-0.5 text-muted-foreground">
              {project.status}
            </span>
          )}

          {hasAward && (
            <Link
              href={project.awards![0]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs bg-[#F3FF45] text-black rounded-md px-2 py-0.5 font-medium"
            >
              <RiAwardFill className="w-3 h-3" />
              {t("awardBadge")}
            </Link>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {project.description[locale] ?? project.description.en}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {project.technologies.map((tech) => (
          <SkillBadge key={tech} name={tech} minimized />
        ))}
      </div>
    </div>
  );
};