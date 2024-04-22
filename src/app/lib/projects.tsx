import { ProjectCard } from "@/lib/components/project.card";
import { projects } from "@/lib/config/projects";
import { cn } from "@/lib/utils";
import { ReactElement } from "react";

export const Projects = (): ReactElement => {
  return (
    <div className={cn("mt-3 grid grid-cols-1 gap-3", {
      "md:grid-cols-2": projects.length > 1,
    })}>
      {projects.map((project) => (
        <ProjectCard {...project} key={project.title} />
      ))}
    </div>
  );
}