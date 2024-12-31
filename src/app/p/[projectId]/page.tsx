"use client";

import { notFound, useParams } from "next/navigation"
import { ExternalLink, Github } from 'lucide-react'
import Link from "next/link"
import { projects } from "@/lib/config/projects";
import { Badge } from "@/lib/components/ui/badge";
import { Separator } from "@/lib/components/ui/separator";
import { buttonVariants } from "@/lib/components/ui/button";
import { ReactElement } from "react";
import { Buttons } from "@/lib/components/buttons";
import { useLang } from "@/lib/stores/lang.store";
import { cn } from "@/lib/utils";

const ProjectPage = (): ReactElement => {
  const params = useParams<{ projectId: string }>()
  const { lang } = useLang()

  const project = projects.find((project) => project.title.toLowerCase() === params.projectId)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Buttons />

      <div className="container max-w-4xl py-8 mx-auto">
        <div className="space-y-4">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              {lang == "fr" ? project.description.fr : project.description.en}
            </p>
          </div>

          <Separator />

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              {lang == "fr" ? "Technologies" : "Stacks"}
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.stacks.map((stack) => (
                <Badge key={stack.name} variant="outline">
                  {stack.name}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              {lang == "fr" ? "À propos du projet" : "About the project"}
            </h2>

            <div className="prose dark:prose-invert max-w-none">
              {
                lang == "fr" ? (
                  <>
                    {project.cvDescription?.fr || project.description.fr}
                  </>
                ) : (
                  <>
                    {project.cvDescription?.en || project.description.en}
                  </>
                )
              }
            </div>
          </div>

          <div className="flex flex-wrap gap-1 pt-1">
            {project.urls ? (
              project.urls.map((url, index) => (
                <Link href={url.url} target="_blank" className={cn("flex items-center gap-1", buttonVariants({ variant: "outline" }))} key={index}>
                  {url.icon || <ExternalLink className="w-4 h-4" />}
                  {url.title}
                </Link>
              ))
            ) : (
              <Link href={project.url ?? ""} target="_blank" className={cn("flex items-center gap-1", buttonVariants({ variant: "outline" }))}>
                {project.type === "open-source" ? (
                  <Github className="w-4 h-4" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}

                {lang == "fr" ? "Voir le projet" : "View project"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectPage;