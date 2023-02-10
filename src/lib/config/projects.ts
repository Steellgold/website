import type { Project } from "./project.types";
import { Postgresql, Supabase, Svelte, Typescript } from "./skills";

export const Projects: Project[] = [
  {
    title: "Linkfy",
    description: "Open-Source tool to shorten your links quickly",
    skills: [
      Typescript, Svelte, Supabase, Postgresql
    ],
    date: { start: "2023-01-15" },
    link: "https://linkfy.fr",
    type: "Pro"
  }
];