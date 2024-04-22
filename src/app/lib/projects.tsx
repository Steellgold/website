import { ProjectCard } from "@/lib/components/project.card";
import { projects } from "@/lib/config/projects";
import { cn } from "@/lib/utils";
import { ReactElement } from "react";

export const Projects = (): ReactElement => {

  const isOdd = projects.length % 2 !== 0;

  return (
    <div className={cn("grid gap-3", {
      "md:grid-cols-2": projects.length > 1,
    })}>
      {projects.map((project, index) => (
        <ProjectCard {...project} key={project.title} className={cn({
          "md:col-span-2": isOdd && index === projects.length - 1
        })} /> 
      ))}
    </div>
  );
}