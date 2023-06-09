import type { Skill } from "./skills.types";
export type ProjectType = "Open Source" | "Freelance - Pro";

export type Project = {
  title: string;
  skills: Skill[];

  description: string;
  longDescription?: string;
  features?: string[];
  images?: string[];

  date?: {
    start: string;
    end?: string;
  };

  links?: string[];
  preview?: string | null;
  type: ProjectType;
  slug: string;
};