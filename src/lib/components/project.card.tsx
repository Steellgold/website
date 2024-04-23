import Link from "next/link";
import { Project } from "../config/types/project.type";
import { cn } from "../utils";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Component } from "./utils/component";
import { ExternalLink } from "lucide-react";
import { PropsWithChildren } from "react";

export const ProjectCard: Component<Project & { className?: string }> = ({ title, description, stacks, url, duration, type, className }) => {
  return (
    <SurroundLink href={url} className={cn("cursor-pointer", className)}>
      <Card className={cn(
        "h-full bg-[#161616] border-[2px] border-[#1a1a1a]",
        "hover:border-[#2b2b2b] transition-colors duration-300 hover:bg-[#1a1a1a]",
        className
      )}>
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
          </div>
          <CardDescription>{description}</CardDescription>
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
      </Card>
    </SurroundLink>
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