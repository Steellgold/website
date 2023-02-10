import type { Skill } from "./skills.types";
export type ProjectType = "Open Source" | "Pro";

export type Project = {
  title: string;
  skills: Skill[];

  description: string;
  date: {
    // TODO: DayJs
    start: string;
    end?: string; 
  };

  link: string | null;
  type: ProjectType;
};