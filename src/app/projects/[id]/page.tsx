"use client";

import { Badge } from "@/lib/components/ui/badge";
import { Button, buttonVariants } from "@/lib/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { Component } from "@/lib/components/utils/component"
import { projects } from "@/lib/config/projects";
import { useLang } from "@/lib/stores/lang.store";
import { cn } from "@/lib/utils";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cloneElement } from "react";

type Params = {
  params: {
    id: string
  }
}

const Page: Component<Params> = ({ params: { id } }) => {
  const router = useRouter();
  const { lang } = useLang();

  const project = projects.find(project => project.title === id.charAt(0).toUpperCase() + id.slice(1));
  if (!project) {
    router.push("/404")
    return <></>;
  }

  return (
    <div className="container mx-auto px-4 mt-4">
      <div className="flex justify-end">
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
      </div>

      <div className="relative mt-4 w-full h-[300px] lg:h-[500px] xl:h-[550px]">
        <Image
          src={'/projects/' + project.title.toLowerCase() + '.png'}
          alt="Example project banner"
          className={cn(
            "w-full object-cover block object-center md:rounded-3xl",
            "h-[300px] lg:h-[500px] xl:h-[550px]"
          )}
          fill
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">
        <Card className="md:col-span-4" style={{ boxShadow: "inset 1px -1px 10.7px 0px #242424" }}>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <CardTitle>
                  {project.title}
                </CardTitle>

                <CardDescription>
                  {project.duration.start.format("DD MMM YYYY")} → {project.duration.end ? project.duration.end.format("DD MMM YYYY") : "Today"}
                </CardDescription>
              </div>

              {project.type === "pro" && <span className="text-[#181b20] bg-[#f5f1de] px-2 py-1 rounded-md text-xs">Pro</span>}
              {project.type === "team" && <span className="text-[#181b20] bg-[#e1f5de] px-2 py-1 rounded-md text-xs">Team project</span>}
            </div>

            <CardDescription>
              {lang === "en" ? project.description.en : project.description.fr}
            </CardDescription>
          </CardHeader>

          <CardFooter>
            {project.cvDescription && (
              <CardDescription>
                {lang === "en" ? project.cvDescription.en : project.cvDescription.fr}
              </CardDescription>
            )}
          </CardFooter>
        </Card>

        <div className="flex flex-col gap-2 md:col-span-2">
          {project.urls && project.urls.map(url => (
            <Link
              href={project.url ?? "/"}
              className={buttonVariants({ variant: "outline", className: "flex items-center gap-1" })}
              style={{ boxShadow: "inset 1px -1px 10.7px 0px #242424" }}
              key={url.title}
            >
              {url.icon && cloneElement(url.icon)}
              {url.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-2 flex items-center gap-1 flex-wrap">
        {project.stacks.map(tag => (
          <span key={tag.name} className="text-[#f0f0f0] bg-[#333] px-2 py-1 rounded-md text-xs">
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Page