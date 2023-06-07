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

export const projects: Project[] = [
  {
    title: "Linkfy",
    description: "Outil pour créer des liens raccourcis vers des sites web, totalement gratuit et open source",
    skills: [
      Typescript, Svelte, Supabase, Postgresql, Prisma, Tailwindcss, Vercel
    ],
    date: { start: "15/01/2023" },
    link: "https://github.com/Steellgold/Linkfy",
    subLink: "https://linkfy.fr",
    type: "Open Source",
    slug: "linkfy"
  },
  {
    title: "Royaume",
    // eslint-disable-next-line max-len
    description: "Une communauté de développeurs, de graphistes, de joueurs et toute personne qui se réunissent pour partager leurs passions et leurs connaissances",
    skills: [
      Typescript, Graphql, Tailwindcss, DiscordJs, Nodejs
    ],
    date: { start: "23/06/2022" },
    link: "https://github.com/Virtual-Royaume",
    type: "Open Source",
    slug: "royaume",
    images: [
      "https://media.discordapp.net/attachments/927843710669062204/1116042719370948608/image.png?width=1298&height=783",
      "https://media.discordapp.net/attachments/927843710669062204/1116042810739675227/image.png?width=1296&height=783",
      "https://media.discordapp.net/attachments/927843710669062204/1116043059856150640/image.png?width=1299&height=783",
      "https://media.discordapp.net/attachments/927843710669062204/1116043348801757334/image.png?width=1251&height=783",
      "https://media.discordapp.net/attachments/927843710669062204/1116043411749884007/image.png?width=1249&height=783"
    ],
    // eslint-disable-next-line max-len
    longDescription: "Royaume est une communauté de développeurs, de graphistes, de joueurs et toute personne qui se réunissent pour partager leurs passions et leurs connaissances. Nous avons pour but de créer un espace de partage et d'entraide pour tous, que vous soyez débutant ou expert. Nous avons également pour but de créer des projets open source pour que tout le monde puisse y contribuer et apprendre de nouvelles choses. Nous avons également un serveur discord qui est ouvert à tous, vous pouvez y rejoindre en cliquant sur le bouton ci-dessous."
  },
  {
    title: "Bottly (Corp)",
    description: "l'Organisation sur GitHub qui regroupe tous les projets internes de Bottly (un bot discord IA)",
    skills: [
      Typescript, DiscordJs, OpenAI, Prisma, Postgresql, Railway, Express, Svelte, Tailwindcss
    ],
    date: { start: "19/02/2023" },
    link: "https://github.com/bottlycorp",
    type: "Open Source",
    slug: "bottlycorp"
  },
  {
    title: "Site internet",
    description: "Mon portfolio, mon site web, mon CV, mon blog, mon tout",
    skills: [
      Typescript, Svelte, Tailwindcss, Supabase, Postgresql, Prisma
    ],
    date: { start: "18/08/2022" },
    link: "https://github.com/Steellgold/Portfolio",
    type: "Open Source",
    slug: "portfolio"
  },
  {
    title: "bettercolors",
    description: "Une librairie pour envoyer des messages en couleur dans la console",
    skills: [
      Typescript, Nodejs
    ],
    date: { start: "06/04/2023" },
    link: "https://npmjs.com/package/bettercolors",
    type: "Open Source",
    slug: "bettercolors"
  }
  // For more projects, add them here
];