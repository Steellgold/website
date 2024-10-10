"use client";

import { ProjectCard } from "@/lib/components/project.card";
import { projects } from "@/lib/config/projects";
import { useLang } from "@/lib/stores/lang.store";
import { useViewMode } from "@/lib/stores/mode.store";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactElement } from "react";

export const Projects = (): ReactElement => {

  const { viewMode } = useViewMode();
  const { lang } = useLang();

  const isOdd = projects.length % 2 !== 0;

  return <>
    {viewMode == "cv" && (
      <div className="rounded-lg shadow-lg mt-4 mb-1.5">
        <h2 className="text-white text-xl font-bold">
          {lang == "en" ? "My projects and my journey" : "Mes projets et mon parcours"}
        </h2>

        <p className="text-white text-sm mt-1 text-white/80">
          {lang == "en" ? <>
            <p>My journey into development began with a passion for creating my own Minecraft server back in 2016 using PHP with <Link className="text-[#f5f1de] hover:underline" href={"https://github.com/pmmp/PocketMine-MP"}>PocketMine-MP</Link> on mobile.</p>
            <p className="mt-2">
              It wasn&apos;t until 2017, when I got my first computer, that I started doing more serious work—still within the Minecraft world. I created and sold numerous plugins (around a hundred in total, ranging from 4 to 60 euros each depending on complexity, time, ect), which taught me how to <span className="text-[#f5f1de]">listen to clients</span> and <span className="text-[#f5f1de]">target their needs</span>.
            </p>
            <p className="mt-2">In 2020, I shifted my focus entirely to web development, starting with <span className="text-[#f5f1de]">SvelteKit</span> by building linkfy.fr and my  <Link className="text-[#f5f1de] hover:underline" href={"https://old.steellgold.fr/"}>old portfolio</Link>. Later, I transitioned to Next.js and discovered Supabase, both of which have become my favorites, and I use them whenever I can.</p>
            <p className="mt-2">I love discovering new technologies, especially within the TypeScript ecosystem, and I&apos;m always participating in new hackathons organized by Supabase 🚀.</p>
          </>
          : <></>}
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