"use client";

import { ProjectCard } from "@/lib/components/project.card";
import { HiglightedLink, HiglightedSpan, projects } from "@/lib/config/projects";
import { useLang } from "@/lib/hooks/use-lang";
import { useViewMode } from "@/lib/stores/mode.store";
import { cn } from "@/lib/utils";
import { ReactElement } from "react";

export const Projects = (): ReactElement => {

  const { viewMode } = useViewMode();
  const lang = useLang();

  const isOdd = projects.length % 2 !== 0;

  return <>
    {viewMode == "cv" && (
      <div className="rounded-lg shadow-lg border dark:border-0 mt-4 mb-1.5 p-4">
        <h2 className="text-[#272727] dark:text-white text-xl font-bold">
          {lang == "en" ? "My projects and my journey" : "Mes projets et mon parcours"}
        </h2>

        <p className="text-[#262626] dark:text-white text-sm font-normal mt-2">
          {lang == "en" ? <>
            <p className="mt-3">My journey into development began with a passion for creating my own Minecraft server back in 2016 using PHP with <HiglightedLink href={"https://github.com/pmmp/PocketMine-MP"}>PocketMine-MP</HiglightedLink> on mobile.</p>
            <p className="mt-3">
              It wasn&apos;t until 2017, when I got my first computer, that I started doing more serious work—still within the Minecraft world. I created and sold numerous plugins (around a hundred in total, ranging from 4 to 60 euros each depending on complexity, time, ect), which taught me how to <HiglightedSpan>listen to clients</HiglightedSpan> and <HiglightedSpan>target their needs</HiglightedSpan>.
            </p>
            <p className="mt-3">In 2020, I shifted my focus entirely to web development, starting with <HiglightedSpan>SvelteKit</HiglightedSpan> by building linkfy.fr and my  <HiglightedLink href={"https://old.steellgold.fr/"}>old portfolio</HiglightedLink>. Later, I transitioned to Next.js and discovered Supabase, both of which have become my favorites, and I use them whenever I can.</p>
            <p className="mt-3">I love discovering new technologies, especially within the TypeScript ecosystem, and I&apos;m always participating in new hackathons organized by Supabase 🚀.</p>
          </>
          : <>
            <p className="mt-3">Mon parcours dans le développement a commencé avec une passion pour la création de mon propre serveur Minecraft en 2016 en utilisant PHP avec <HiglightedLink href={"https://github.com/pmmp/PocketMine-MP"}>PocketMine-MP</HiglightedLink> sur mobile.</p>
            <p className="mt-3">
              En 2017, lorsque j&apos;ai eu mon premier ordinateur, que j&apos;ai commencé à faire un travail plus sérieux—toujours dans le monde de Minecraft. J&apos;ai créé et vendu de nombreux plugins (environ une centaine au total, allant de 4 à 60 euros chacun en fonction de la complexité, du temps, etc.), ce qui m&apos;a appris à <HiglightedSpan>écouter les clients</HiglightedSpan> et <HiglightedSpan>cibler leurs besoins</HiglightedSpan>.</p>
            <p className="mt-3">En 2020, j&apos;ai entièrement orienté mon focus vers le développement web, en commençant par <HiglightedSpan>SvelteKit</HiglightedSpan> en construisant linkfy.fr et mon <HiglightedLink href={"https://old.steellgold.fr/"}>ancien portfolio</HiglightedLink>. Plus tard, je suis passé à Next.js et j&apos;ai découvert Supabase, tous deux devenus mes favoris et je les utilise chaque fois que je le peux.</p>
            <p className="mt-3">J&apos;aime découvrir de nouvelles technologies, en particulier dans l&apos;écosystème TypeScript, et je participe toujours à de nouveaux hackathons organisés par Supabase 🚀.</p>
          </>}
        </p>
      </div>
    )}

    <div className={cn("gap-3", {
      "grid": viewMode == "normal",
      "md:grid-cols-2": projects.length > 1,
    })}>
      {projects.map((project, index) => (
        <ProjectCard {...project} key={project.title} className={cn({
          "md:col-span-2": isOdd && index === projects.length - 1,

          "hover:bg-[#f8f8f8] dark:hover:bg-[#111111]": viewMode == "normal",
        })} />
      ))}
    </div>
  </>;
}