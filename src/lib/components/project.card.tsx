import Link from "next/link";
import { Project } from "../config/types/project.type";
import { cn } from "../utils";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Component } from "./utils/component";
import { ExternalLink } from "lucide-react";
import { useViewMode } from "../stores/mode.store";
import { useLang } from "../hooks/use-lang";
import { Stack } from "../config/types/stack.type";

export const ProjectCard: Component<Project & { className?: string }> = ({ title, description, cvDescription, stacks, url, duration, type, className, isHighlighted, highlightUrl, showOnCv }) => {
  const { viewMode } = useViewMode();
  const lang = useLang();

  if (viewMode == "cv" && !showOnCv) return <></>;

  return (
    <>
      {viewMode == "cv" && <div className="mt-2.5"></div>}
      <Card className={cn(...[
        "transition-colors duration-300 flex flex-col h-full",
        className
      ], { "mt-4": viewMode == "cv" })}>
        <Link href={url ?? ""} passHref className="flex flex-col h-full">
          <CardHeader className="p-5 flex-grow">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <CardTitle className={cn("text-[#1f1f1f] dark:text-[#f0f0f0]", { "flex items-center": url !== "" })}>
                  {title}
                  {url ? <ExternalLink className="w-4 h-4 ml-2" /> : null}
                </CardTitle>

                <CardDescription className="text-[#333332] dark:text-[#f5f1de] text-xs mt-1.5">
                  {duration.start.format("DD MMM YYYY")} → {duration.end ? duration.end.format("DD MMM YYYY") : "Today"}
                </CardDescription>
              </div>

              <div className="flex flex-row gap-1">
                {type === "pro" && <span className="text-[#181b20] bg-[#f5f1de] px-2 py-1 rounded-md text-xs">Pro</span>}
                {type === "team" && <span className="text-[#181b20] bg-[#e1f5de] px-2 py-1 rounded-md text-xs">Team project</span>}

                {isHighlighted && (
                  <>
                    {highlightUrl ? (
                      <Link href={highlightUrl} target="_blank" onClick={(e) => e.stopPropagation()} className="relative z-[10]">
                        <span className="text-[#333] bg-[#f5f1de] px-2 py-1 rounded-md text-xs flex items-center gap-1">
                          {lang === "en" ? "Prized project 🏆" : "Projet primé 🏆"}
                          <ExternalLink className="h-3" />
                        </span>
                      </Link>
                    ) : (
                      <span className="text-[#333] bg-[#f5f1de] px-2 py-1 rounded-md text-xs">
                        {lang === "en" ? "Prized project 🏆" : "Projet primé 🏆"}
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>

            {viewMode == "cv" && cvDescription ?
              <CardDescription>{cvDescription[lang]}</CardDescription>
              : <CardDescription>{description[lang]}</CardDescription>}
          </CardHeader>

          <CardFooter className="p-5 mt-auto">
            <div className="flex flex-wrap gap-1">
              {stacks.map((stack) => (
                <StackBadge key={stack.name} {...stack} />
              ))}
            </div>
          </CardFooter>
        </Link>
      </Card>
    </>
  );
}

export const StackBadge: Component<Stack> = ({ name, url }) => (
  <Link className={cn(
    "group",
    "dark:text-[#f0f0f0] bg-[#f1f1f1] dark:bg-[#333]",
    "hover:bg-[#e6e5e5] dark:hover:bg-[#555]",
    "px-2 py-1 rounded-md text-xs z-[10]",
    "flex items-center gap-0.5"
  )} href={url ?? ""} target="_blank" passHref>
    {name}
    <ExternalLink className="hidden group-hover:block h-3 w-3 ml-1" />
  </Link>
);