import { Stars_Thinsmooth } from "@/components/icons";
import { Skill } from "@/components/skill";
import { Project } from "@/config/projects";
import { cn } from "@/lib/utils";
import { Component } from "@/type/component";
import Link from "next/link";
import { useRef } from "react";
import { useHover } from "usehooks-ts";

export const ProjectCard: Component<Project> = ({ name, status, description, technologies, awards, url, githubUrl }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isHovering = useHover<HTMLDivElement>(ref as React.RefObject<HTMLDivElement>);

  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-2 p-4 sm:p-5 bg-[#1d1d1d] transition-all border-inside border-inside-default", {
        "border-inside-working": status === "Refactoring" && isHovering
      })}
      style={{ "--border-inside-size": "1.5px" } as React.CSSProperties}
    >
      <div className="flex items-center justify-between">
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-xl font-semibold text-white">{name}</h3>
        </Link>

        <div className="flex items-center gap-1">
          <Link 
            href={githubUrl || url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bg-[#1d1d1d] border-inside border-inside-default px-2 py-0.5">
              {status}
            </span>
          </Link>

          {awards && awards.length > 0 && (
            <Link
              className="bg-[#F3FF45] p-[4px] border-inside border-inside-preferred select-none flex items-center gap-1"
              href={awards[0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Stars_Thinsmooth />

              <span className="text-xs">
                Awarded
              </span>
            </Link>
          )}
        </div>
      </div>

      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </Link>
      
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {technologies.map((tech) => (
          <Skill key={tech} name={tech} minimized />
        ))}
      </div>
    </div>
  );
}; 