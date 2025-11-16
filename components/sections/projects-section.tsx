"use client";

import { SkillName } from "@/components/icons";
import { ProjectCard } from "@/components/project";
import { Section } from "@/components/section";
import { PROJECTS } from "@/config/projects";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { ReactElement, useState } from "react";

export const ProjectsSection = (): ReactElement => {
  const [showMore, setShowMore] = useState(false);
  const hasMoreProjects = PROJECTS.length > 2;
  const isMobile = useIsMobile();
  const t = useTranslations("projects");

  return (
    <Section name={t("title")}>
      <div className="relative group">
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {PROJECTS.slice(0, showMore ? PROJECTS.length : 2).map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                status={project.status}
                technologies={project.technologies as SkillName[]}
                awards={project.awards}
                githubUrl={project.githubUrl}
                url={project.url}
              />
            ))}
          </div>
          
          {hasMoreProjects && !showMore && (
            <>
              <div className="relative mt-2 overflow-hidden" style={{ maxHeight: "120px" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 opacity-40">
                  {PROJECTS.slice(2, 4).map((project) => (
                    <ProjectCard
                      key={project.name}
                      name={project.name}
                      description={project.description}
                      status={project.status}
                      technologies={project.technologies as SkillName[]}
                      awards={project.awards}
                      githubUrl={project.githubUrl}
                      url={project.url}
                    />
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black to-transparent pointer-events-none" />
              </div>
              
              <div className={cn(
                "absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black via-black/80 to-transparent flex items-end justify-center pb-4 transition-opacity duration-300",
                isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )}>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <button
                  onClick={() => setShowMore(true)}
                  className="px-2 py-1 bg-white text-[#1d1d1d] rounded-md text-sm"
                >
                  {t("seeMore")}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}; 