"use client";

import { Stars_Thinsmooth } from "@/components/icons";
import { Skill } from "@/components/skill";
import { Project } from "@/config/projects";
import { cn } from "@/lib/utils";
import { Component } from "@/type/component";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRef } from "react";
import { useHover } from "usehooks-ts";

export const ProjectCard: Component<Project & { onClick?: () => void }> = ({ name, status, description, technologies, awards, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isHovering = useHover<HTMLDivElement>(ref as React.RefObject<HTMLDivElement>);
  const t = useTranslations("projects");

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={cn("flex flex-col gap-2 p-4 sm:p-5 bg-[#1d1d1d] transition-all border-inside border-inside-default cursor-pointer", {
        "border-inside-working": status === "Refactoring" && isHovering
      })}
      style={{ "--border-inside-size": "1.5px" } as React.CSSProperties}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{name}</h3>

        <div className="flex items-center gap-1">
          <span className="bg-[#1d1d1d] border-inside border-inside-default px-2 py-0.5">
            {status}
          </span>

          {awards && awards.length > 0 && (
            <Link
              className="bg-[#F3FF45] p-1.5 border-inside border-inside-preferred select-none flex items-center gap-1"
              href={awards[0]}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Stars_Thinsmooth />

              <span className="text-xs">
                {t("awarded")}
              </span>
            </Link>
          )}
        </div>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {technologies.map((tech) => (
          <Skill key={tech} name={tech} minimized />
        ))}
      </div>
    </div>
  );
}; 