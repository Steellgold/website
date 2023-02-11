import type { Project } from "./project.types";
import { DiscordJs, Graphql, Postgresql, Railway, Supabase, Svelte, Tailwindcss, Typescript } from "./skills";

export const Projects: Project[] = [
  {
    title: "Linkfy",
    description: "Outil open-source pour raccourcir rapidement vos liens",
    skills: [
      Typescript, Svelte, Supabase, Postgresql
    ],
    date: { start: "15/01/2023" },
    link: "https://github.com/Steellgold/Linkfy",
    type: "Open Source"
  },
  {
    title: "Royaume Bot",
    description: "Communauté de développeurs où chacun contribue aux projets internes",
    skills: [
      Typescript, Graphql, DiscordJs
    ],
    date: { start: "23/06/2022" },
    link: "https://github.com/Virtual-Royaume",
    type: "Open Source"
  }
  // For more projects, add them here
];