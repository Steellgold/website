import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/config/projects";
import { piano } from "@/lib/font";
import { cn } from "@/lib/utils";
import { RiArrowLeftLine } from "@remixicon/react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of full-stack projects built with Next.js, React and TypeScript — from open-source SaaS tools to freelance client work.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects",
    description:
      "A selection of full-stack projects built with Next.js, React and TypeScript.",
    url: "/projects",
    type: "website",
  },
};

const Page: FC = async () => {
  const t = await getTranslations("projects");
  const activeProjects = PROJECTS.filter((p) => p.category === "active");
  const finishedProjects = PROJECTS.filter((p) => p.category === "finished");

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <RiArrowLeftLine className="w-4 h-4" />
        Gaëtan Huszovits
      </Link>

      <h1 className={cn("text-3xl sm:text-4xl mb-10", piano.className)}>{t("title")}</h1>

      <div className="flex flex-col gap-3 mb-10">
        <h2 className="text-sm uppercase tracking-wide text-muted-foreground">{t("categoryActive")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {activeProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-sm uppercase tracking-wide text-muted-foreground">{t("categoryFinished")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {finishedProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
