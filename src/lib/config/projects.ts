import { AuthJS, DiscordJS, NextJS, OpenAI, PostgreSQL, Prisma, Railway, Redis, Stripe, Supabase, TailwindCSS, Typescript, Vercel } from "./stacks";
import { Project } from "./types/project.type";

export const projects: Project[] = [
  {
    title: "Tweeets", 
    description: "Tweet generator with AI, powered by OpenAI.",
    type: "open-source",
    stacks: [
      Typescript,
      NextJS,
      OpenAI,
      TailwindCSS,
      Vercel,
      Prisma,
      PostgreSQL,
      Supabase,
      Stripe
    ],
    url: "https://tweeets.app"
  },
  {
    title: "Simplist",
    description: "Post a article and retrieve it using the API.",
    type: "open-source",
    stacks: [
      Typescript,
      NextJS,
      TailwindCSS,
      Vercel,
      Prisma,
      PostgreSQL,
      Supabase,
      Redis
    ],
    url: "https://simplist.blog"
  },
  {
    title: "Bottly",
    description: "An Discord bot allow users ask questions to ChatGPT",
    type: "open-source",
    stacks: [
      Typescript,
      DiscordJS,
      OpenAI,
      Prisma,
      Supabase,
      PostgreSQL,
      Railway,
      Redis
    ],
    url: "https://discord.com/application-directory/1076862546658738236"
  }
];