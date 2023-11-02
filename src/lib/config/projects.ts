import type { Project } from "./project.types";
import {
  DiscordJs,
  Express,
  Google,
  Graphql,
  NextJs,
  Nodejs,
  OpenAI,
  Postgresql,
  Prisma,
  Railway,
  React,
  Redis,
  Stripe,
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
    links: ["https://github.com/Steellgold/svelte-linkfy", "https://linkfy.fr"],
    type: "Open Source",
    slug: "linkfy",
    images: [
      "https://cdn.discordapp.com/attachments/927843710669062204/1116660688744628284/image.png",
      "https://cdn.discordapp.com/attachments/927843710669062204/1116660757589921857/image.png",
      "https://cdn.discordapp.com/attachments/927843710669062204/1116660843757699133/image.png"
    ],
    // eslint-disable-next-line max-len
    longDescription: "Linkfy est un outil pour créer des liens raccourcis vers des sites web, totalement gratuit et open source. Il est développé en Typescript avec Svelte et Tailwindcss. Il utilise Supabase pour la base de données et Prisma pour l'ORM. Il est hébergé sur Vercel.",
    features: [
      "● Création de liens raccourcis",
      "● Gérer ses liens via un tableau de bord",
      "● Historique complet des liens créés"
    ],
    preview: "https://preview.linkfy.fr",
    color: "#111827"
  },
  {
    title: "Tweeets",
    description: "Générateur de tweets avec l'intelligence artificielle, gratuit et open source",
    skills: [
      Typescript, NextJs, OpenAI, Tailwindcss, Vercel, Prisma, Postgresql, Supabase, Stripe,
    ],
    date: { start: "06/08/2023" },
    links: ["https://github.com/Steellgold/tweeets", "https://tweeets.app/"],
    type: "Open Source",
    slug: "tweeets",
    images: [
      "https://media.discordapp.net/attachments/1139302236258832405/1139302237340958812/Group_38_3_2.png",
      "https://media.discordapp.net/attachments/1139302236258832405/1139302236711833650/Group_45_1.png",
      "https://media.discordapp.net/attachments/1139302236258832405/1139302237089316954/Group_43_1.png"
    ],
    color: "#070709"
  },
  {
    title: "Royaume",
    // eslint-disable-next-line max-len
    description: "Une communauté de développeurs, de graphistes, de joueurs et toute personne qui se réunissent pour partager leurs passions et leurs connaissances",
    skills: [
      Typescript, Graphql, Tailwindcss, DiscordJs, Nodejs
    ],
    date: { start: "23/06/2022" },
    links: ["https://github.com/Virtual-Royaume"],
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
    longDescription: "Royaume est une communauté de développeurs, de graphistes, de joueurs et toute personne qui se réunissent pour partager leurs passions et leurs connaissances. Nous avons pour but de créer un espace de partage et d'entraide pour tous, que vous soyez débutant ou expert. Nous avons également pour but de créer des projets open source pour que tout le monde puisse y contribuer et apprendre de nouvelles choses. Nous avons également un serveur discord qui est ouvert à tous, vous pouvez y rejoindre en cliquant sur le bouton ci-dessous.",
    color: "#5339dd"
  },
  {
    title: "Bottly",
    description: "l'Organisation sur GitHub qui regroupe tous les projets internes de Bottly (un bot discord IA)",
    skills: [
      Typescript, DiscordJs, OpenAI, Prisma, Postgresql, Railway, Express, Svelte, Tailwindcss
    ],
    date: { start: "19/02/2023" },
    links: ["https://github.com/bottlycorp", "https://bottly.xyz"],
    type: "Open Source",
    slug: "bottlycorp",
    color: "#454cb5"
  },
  {
    title: "Simplist",
    description: "Une page d'accueil simplifiée pour vos navigateurs web.",
    skills: [
      Typescript, React, NextJs, Stripe, Tailwindcss, Vercel, OpenAI, Redis, Supabase, Prisma, Postgresql
    ],
    date: { start: "01/07/2023" },
    links: ["https://simplist.page", "https://github.com/Steellgold/simplist"],
    type: "Open Source",
    color: "#0f172a",
    slug: "simplist"
  },
  {
    title: "bettercolors",
    description: "Une librairie pour envoyer des messages en couleur dans la console",
    skills: [
      Typescript, Nodejs
    ],
    date: { start: "06/04/2023" },
    links: ["https://npmjs.com/package/bettercolors"],
    type: "Open Source",
    features: [
      "● Formater et afficher des messages console avec différentes couleurs et styles.",
      "● Fournir un ensemble de méthodes pour formater les messages pour différents types tels que success, error, warning, info, debug, log et rainbow.",
    ],
    longDescription: "BetterColors est une librairie NPM qui permet de formater et afficher des messages console avec différentes couleurs et styles. Elle fournit également un ensemble de méthodes pour formater les messages pour différents types tels que success, error, warning, info, debug, log et rainbow.",
    slug: "bettercolors",
    color: "#6b7280"
  },
  {
    title: "beyond2021",
    description: "Une librairie pour récupérer les informations au-delà de 2021 pour OpenAI",
    skills: [
      Typescript, Nodejs, OpenAI, Google
    ],
    date: { start: "27/05/2023" },
    links: ["https://npmjs.com/package/beyond2021"],
    type: "Open Source",
    features: [
      "● Récupérer les informations au-delà de 2021 pour OpenAI.",
      "● Générer un texte à partir des informations récupérées."
    ],
    longDescription: "Beyond2021 est une librairie NPM qui permet de récupérer les informations au-delà de 2021 pour OpenAI. Elle permet également de générer un texte à partir des informations récupérées.",
    slug: "beyond2021",
    images: [
      "https://media.discordapp.net/attachments/927843710669062204/1116833496472760370/ray-so-export_2.png?width=1088&height=654"
    ],
    color: "#6672f3"
  },
  {
    title: "Site internet",
    description: "Mon portfolio, mon site web, mon CV, mon blog, mon tout",
    skills: [
      Typescript, Svelte, Tailwindcss, Supabase, Postgresql, Prisma
    ],
    date: { start: "18/08/2022" },
    links: ["https://github.com/Steellgold/Portfolio"],
    type: "Open Source",
    slug: "portfolio",
    color: "#111111"
  },
  // For more projects, add them here
];
