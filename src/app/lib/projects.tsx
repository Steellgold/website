"use client";

import { ProjectCard } from "@/lib/components/project.card";
import { projects } from "@/lib/config/projects";
import { useViewMode } from "@/lib/hooks/mode.store";
import { cn } from "@/lib/utils";
import { ReactElement } from "react";

export const Projects = (): ReactElement => {

  const { viewMode } = useViewMode();

  const isOdd = projects.length % 2 !== 0;

  return <>
    {viewMode == "cv" && (
      <div className="rounded-lg shadow-lg mt-4 mb-1.5">
        <h2 className="text-white text-xl font-bold">
          Here are my latest realizations
        </h2>

        <p className="text-white text-sm">
          I am a developer and I like to create projects to learn new things. Here are some of my latest and best projects.
        </p>
      </div>
    )}

    <div className={cn("gap-3", {
      "grid": viewMode == "normal",
      "md:grid-cols-2": projects.length > 1 && viewMode == "normal",
    })}>
      {projects.map((project, index) => (
        <div key={project.title}>
          <ProjectCard {...project} className={cn({
            "md:col-span-2": isOdd && index === projects.length - 1 && viewMode == "normal"
          })} /> 
        </div>
      ))}
    </div>
  </>;
}