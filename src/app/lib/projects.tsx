"use client";

import { ProjectCard } from "@/lib/components/project.card";
import { projects } from "@/lib/config/projects";
import { useLang } from "@/lib/hooks/lang.store";
import { useViewMode } from "@/lib/hooks/mode.store";
import { cn } from "@/lib/utils";
import { ReactElement } from "react";

export const Projects = (): ReactElement => {

  const { viewMode } = useViewMode();
  const { lang } = useLang();

  const isOdd = projects.length % 2 !== 0;

  return <>
    {viewMode == "cv" && (
      <div className="rounded-lg shadow-lg mt-4 mb-1.5">
        <h2 className="text-white text-xl font-bold">
          {lang == "en" ? "Here are my latest realizations" : "Voici mes dernières réalisations"}
        </h2>

        <p className="text-white text-sm">
          {lang == "en"
            ? "I am a developer and I like to create projects to learn new things. Here are some of my latest and best projects."
            : "Je suis un développeur et j'aime créer des projets pour apprendre de nouvelles choses. Voici quelques-uns de mes derniers et meilleurs projets."
          }
        </p>
      </div>
    )}

    <div className={cn("gap-3", {
      "grid": viewMode == "normal",
      "md:grid-cols-2": projects.length > 1,
    })}>
      {projects.map((project, index) => (
        <ProjectCard {...project} key={project.title} className={cn({
          "md:col-span-2": isOdd && index === projects.length - 1
        })} /> 
      ))}
    </div>
  </>;
}