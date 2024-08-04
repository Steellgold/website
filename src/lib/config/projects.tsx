import { dayJS } from "../utils/dayjs/day-js";
import { DiscordJS, NextJS, OpenAI, PostgreSQL, Prisma, Railway, Redis, Stripe, Supabase, TailwindCSS, Typescript, Vercel } from "./stacks";
import { Project } from "./types/project.type";

export const projects: Project[] = [
  {
    title: "Tweeets", 
    description: "Tweet generator with AI, powered by OpenAI.",
    cvDescription: <>
      <p>Tweeets is a <b>tweet generator</b> powered by OpenAI, it allows users to generate tweets using the GPT-3 or GPT-4 model.</p>
      <p className="mt-1">It was a project I made for the 2023 Supabase Hackathon, thanks to this project I was able to learn how to use OpenAI and integrate AI models into my projects.</p>
      <p className="mt-1">This project was <span className="text-yellow-200">awarded</span> the first place in the <span className="text-yellow-200">{"\""}Best use of AI{"\""}</span> section of the hackathon 🎉</p>
    </>,
    type: "open-source",
    duration: {
      start: dayJS("01-15-2023")
    },
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
    cvDescription: <>
      <p>Simplist is a <b>blog platform</b> that allows users to post articles and retrieve them using the API.</p>
      <p className="mt-1">It was one of my big planned projects, I decided to make a simpler and <b>open-source</b> version for the 2024 Supabase Hackathon.</p>
    </>,
    type: "open-source",
    duration: {
      start: dayJS("09-30-2023")
    },
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
    duration: {
      start: dayJS("02-19-2023"),
      end: dayJS("02-08-2024")
    },
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