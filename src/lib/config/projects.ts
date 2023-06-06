import type { Project } from "./project.types";
import {
  DiscordJs,
  Express,
  Graphql,
  Nodejs,
  OpenAI,
  Postgresql,
  Prisma,
  Railway,
  Supabase,
  Svelte,
  Tailwindcss,
  Typescript,
  Vercel
} from "./skills";

export const Projects: Project[] = [
  {
    title: "Linkfy",
    description: "Outil pour créer des liens raccourcis vers des sites web, totalement gratuit et open source",
    skills: [
      Typescript, Svelte, Supabase, Postgresql, Prisma, Tailwindcss, Vercel
    ],
    date: { start: "15/01/2023" },
    link: "https://github.com/Steellgold/Linkfy",
    subLink: "https://linkfy.fr",
    type: "Open Source"
  },
  {
    title: "Royaume",
    description: "Communauté de développeurs où chacun contribue aux projets internes",
    skills: [
      Typescript, Graphql, Tailwindcss, DiscordJs, Nodejs
    ],
    date: { start: "23/06/2022" },
    link: "https://github.com/Virtual-Royaume",
    type: "Open Source"
  },
  {
    title: "Bottly (Corp)",
    description: "l'Organisation sur GitHub qui regroupe tous les projets internes de Bottly (un bot discord IA)",
    skills: [
      Typescript, DiscordJs, OpenAI, Prisma, Postgresql, Railway, Express, Svelte, Tailwindcss
    ],
    date: { start: "19/02/2023" },
    link: "https://github.com/bottlycorp",
    type: "Open Source"
  },
  {
    title: "Site internet",
    description: "Mon portfolio, mon site web, mon CV, mon blog, mon tout",
    skills: [
      Typescript, Svelte, Tailwindcss, Supabase, Postgresql, Prisma
    ],
    date: { start: "18/08/2022" },
    link: "https://github.com/Steellgold/Portfolio",
    type: "Open Source"
  },
  {
    title: "bettercolors",
    description: "Une librairie pour envoyer des messages en couleur dans la console",
    skills: [
      Typescript, Nodejs
    ],
    date: { start: "06/04/2023" },
    link: "https://npmjs.com/package/bettercolors",
    type: "Open Source"
  }
  // For more projects, add them here
];