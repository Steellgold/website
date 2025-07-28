"use client";

import { PROJECTS } from "@/config/projects";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { ReactElement, useState } from "react";
import { piano } from "../font";
import { SkillName } from "../icons";
import { ProjectCard } from "../project";

export const ProjectsSection = (): ReactElement => {
  const [showMore, setShowMore] = useState(false);
  const hasMoreProjects = PROJECTS.length > 2;
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col gap-3 w-full">
      <h2 className={cn("text-4xl sm:text-5xl", piano.className)}>Projects</h2>
      
      <div className="relative group">
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
          <div className={cn(
            "absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent flex items-end justify-center pb-4 transition-opacity duration-300",
            isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          )}>
            <button
              onClick={() => setShowMore(true)}
              className="px-2 py-1 bg-white text-black rounded-md hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              See more projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}; 