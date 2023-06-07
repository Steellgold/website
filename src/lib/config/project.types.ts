import type { Skill } from "./skills.types";
export type ProjectType = "Open Source" | "Pro";

export type Project = {
  title: string;
  skills: Skill[];

  description: string;
  longDescription?: string;
  images?: string[];

  date: {
    start: string;
    end?: string;
  };

  link: string | null;
  subLink?: string | null;
  type: ProjectType;
  slug: string;
};