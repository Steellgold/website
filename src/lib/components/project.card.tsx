"use client";

import Link from "next/link";
import { Project } from "../config/types/project.type";
import { cn } from "../utils";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Component } from "./utils/component";
import { ExternalLink } from "lucide-react";
import { PropsWithChildren } from "react";
import { CustomCard } from "./card";
import { useViewMode } from "../stores/mode.store";
import { useLang } from "../stores/lang.store";

export const ProjectCard: Component<Project & { className?: string }> = ({ title, description, cvDescription, stacks, url, duration, type, className, isHighlighted, highlightUrl }) => {
  const { viewMode } = useViewMode();
  const { lang } = useLang();

  return (
    // <SurroundLink href={url} className={cn("cursor-pointer relative z-0", className)}>
      // {viewMode == "cv" && <div className="mt-2.5"></div>}
      <Card className={cn(className, { "mt-4": viewMode == "cv" })} style={{ boxShadow: "inset 1px -1px 10.7px 0px #242424" }}>
        <Link href={url ?? ""} passHref>
          <CardHeader className="p-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <CardTitle className={cn("text-[#f0f0f0]", { "flex items-center": url !== "" })}>
                  {title}
                  {url ? <ExternalLink className="w-4 h-4 ml-2" /> : null}
                </CardTitle>

                <CardDescription className="text-[#f5f1de] text-xs mt-1.5">
                  {duration.start.format("DD MMM YYYY")} → {duration.end ? duration.end.format("DD MMM YYYY") : "Today"}
                </CardDescription>
              </div>
              
              {type === "pro" && <span className="text-[#181b20] bg-[#f5f1de] px-2 py-1 rounded-md text-xs">Pro</span>}
              {type === "team" && <span className="text-[#181b20] bg-[#e1f5de] px-2 py-1 rounded-md text-xs">Team project</span>}

              {isHighlighted && (
                <>
                  {highlightUrl ? (
                    <Link href={highlightUrl} target="_blank" onClick={(e) => e.stopPropagation()} className="relative z-[100]">
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

            {viewMode == "cv" && cvDescription ?
              <CardDescription>{cvDescription[lang]}</CardDescription>
              : <CardDescription>{description[lang]}</CardDescription>}
          </CardHeader>

          <CardFooter className="p-4">
            <div className="flex flex-wrap gap-1">
              {stacks.map((stack) => (
                <span key={stack.name} className="text-[#f0f0f0] bg-[#333] px-2 py-1 rounded-md text-xs">
                  {stack.name}
                </span>
              ))}
            </div>
          </CardFooter>
        </Link>
      </Card>
    // {/* </SurroundLink> */}
  );
}

const SurroundLink: Component<PropsWithChildren & { href?: string, className?: string }> = ({ href, children, className }) => {
  if (!href) return children as any;

  return (
    <Link href={href} passHref className={className}>
      {children}
    </Link>
  );
}