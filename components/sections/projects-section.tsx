import { PROJECTS } from "@/config/projects";
import { cn } from "@/lib/utils";
import { Oregano } from "next/font/google";
import { ReactElement } from "react";
import { SkillName } from "../icons";
import { ProjectCard } from "../project";

const oregano = Oregano({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export const ProjectsSection = (): ReactElement => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h2 className={cn("text-4xl sm:text-5xl", oregano.className)}>Projects</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            status={project.status}
            technologies={project.technologies as SkillName[]}
            awards={project.awards}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}; 