import { dayJS } from "../utils/dayjs/day-js";
import { DiscordJS, NextJS, OpenAI, PostgreSQL, Prisma, Railway, Redis, Stripe, Supabase, TailwindCSS, Typescript, Vercel } from "./stacks";
import { Project } from "./types/project.type";

export const projects: Project[] = [
  {
    title: "Tweeets", 
    description: "Tweet generator with AI, powered by OpenAI.",
    cvDescription: <>
      <p>• Tweeets is a tweet generator powered by OpenAI, it allows users to generate tweets using the GPT-3 or GPT-4 model.</p>
      <p className="mt-1">• It was a project I made for the <span className="text-yellow-100">2023 Supabase Hackathon</span>, thanks to this project I was able to learn how to use OpenAI and integrate AI models into my projects.</p>
      <p className="mt-1">• This project was <span className="text-yellow-100">awarded</span> the first place in the <span className="text-yellow-100">Best use of AI</span> section of the hackathon 🎉</p>
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
      <p>• Simplist is a blog platform that allows users to post articles and retrieve them using the API.</p>
      <p className="mt-1">• It was one of my big planned projects, I decided to make a simpler and open-source version for the 2024 Supabase Hackathon.</p>
      <p className="mt-1 italic">fun fact: This is what I use for my blog articles on my portfolio, feel free to check it out 😉</p>
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
    cvDescription: <>
      <p>• Bottly is a Discord bot that allows users to ask questions, chat or generate text using the OpenAI GPT-3 or GPT-4 model.</p>
      <p className="mt-1">• During the development of Bottly, I learned how to use TypeScript with Discord.js, I also learned how to use the OpenAI API to integrate AI models into the bot.</p>
      <p>• Durant toute la periode d&apos;activité de Bottly, le bot à eu plus de <span className="text-yellow-100">~5000 questions</span> posées par les utilisateurs. </p>
    </>,
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
    url: "https://github.com/bottlycorp",
    urls: [
      { title: "Discord Application Directory", url: "https://discord.com/application-directory/1076862546658738236" },
      { title: "GitHub Repository", url: "https://github.com/bottlycorp" }
    ]
  }
];