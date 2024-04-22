import { AuthJS, NextJS, OpenAI, PostgreSQL, Prisma, Stripe, Supabase, TailwindCSS, Typescript, Vercel } from "./stacks";
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
    ]
  },
  {
    title: "Simplist",
    description: "Simplist is a fast posting API.",
    type: "open-source",
    stacks: [
      Typescript,
      NextJS,
      TailwindCSS,
      Vercel,
      Prisma,
      PostgreSQL,
      Stripe,
      AuthJS
    ],
    url: "https://simplist.blog"
  }
];