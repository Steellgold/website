import Link from "next/link";
import { Project } from "../config/types/project.type";
import { cn } from "../utils";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Component } from "./utils/component";
import { ExternalLink } from "lucide-react";
import { PropsWithChildren } from "react";

export const ProjectCard: Component<Project> = ({ title, description, stacks, url, type }) => {
  return (
    <SurroundLink href={url}>
      <Card className={cn(
        "flex flex-col h-full bg-[#161616] border-[2px] border-[#1a1a1a]",
        "hover:border-[#2b2b2b] transition-colors duration-300 hover:bg-[#1a1a1a]"
      )}>
        <CardHeader>
          <CardTitle className={cn("text-[#f0f0f0]", {
            "flex items-center": url !== ""
          })}>
            {title}
            {url ? <ExternalLink className="w-4 h-4 ml-2" /> : null}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardFooter className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-1">
            {stacks.map((stack) => (
              <span key={stack.name} className="text-[#f0f0f0] bg-[#333] px-2 py-1 rounded-md text-xs">
                {stack.name}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </SurroundLink>
  );
}

const SurroundLink: Component<PropsWithChildren & { href?: string }> = ({ href, children }) => {
  if (!href) return children as any;

  return (
    <Link href={href}>
      {children}
    </Link>
  );
}