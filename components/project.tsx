import { Project } from "@/config/projects";
import { Component } from "@/type/component";
import Image from "next/image";
import Link from "next/link";
import { Skill } from "./skill";

export const ProjectCard: Component<Project> = ({ name, status, description, technologies, awards }) => {
  return (
    <div
      className="flex flex-col gap-4 p-6 bg-[#1d1d1d] transition-colors border-inside border-inside-default"
      style={{ "--border-inside-size": "1.5px" } as React.CSSProperties}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="bg-[#1d1d1d] border-inside border-inside-default px-1">
            {status}
          </span>

          {awards && awards.length > 0 && (
            <Link
              className="bg-[#F3FF45] p-[4px] border-inside border-inside-preferred select-none"
              href={awards[0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/assets/thinsmooth.svg"}
                alt="Award"
                width={16}
                height={16}
              />
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