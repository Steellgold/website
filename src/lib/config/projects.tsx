import { AppWindow, Github } from "lucide-react";
import { Separator } from "../components/ui/separator";
import { dayJS } from "../utils/dayjs/day-js";
import { DiscordJS, Fastify, Flowbite, NextJS, OpenAI, PHP, PocketMine, PostgreSQL, Prisma, Railway, Redis, SocketIO, Stripe, Supabase, SvelteKit, TailwindCSS, Typescript, uiShadcn, Vercel } from "./stacks";
import { Project } from "./types/project.type";
import { Component } from "../components/utils/component";
import { PropsWithChildren } from "react";
import Link from "next/link";
import { CardStackIcon } from "@radix-ui/react-icons";

export const HiglightedSpan: Component<PropsWithChildren> = ({ children }) => (
  <span className="bg-[#f5f1de] text-[#262626] dark:bg-[#262626] dark:text-[#eff0b9] px-1 py-0.5 rounded-md">
    {children}
  </span>
);

export const HiglightedLink: Component<PropsWithChildren & { href: string }> = ({ children, href }) => (
  <Link className="bg-[#f5f1de] text-[#262626] dark:bg-[#262626] dark:text-[#eff0b9] px-1 py-0.5 rounded-md hover:underline" href={href} passHref>
    {children}
  </Link>
);

export const projects: Project[] = [
  {
    title: "Imagine.place",
    showOnCv: true,
    description: {
      en: "An interactive storytelling platform powered by AI where players shape their adventure with choices, visuals, and dynamic outcomes.",
      fr: "Une plateforme de récits interactifs alimentée par l'IA où les joueurs façonnent leur aventure à travers des choix, des visuels et des issues dynamiques."
    },
    cvDescription: {
      en: <>
        <p>• Imagine.place is an <HiglightedSpan>AI-powered storytelling platform</HiglightedSpan> where users can create or explore narrative adventures that evolve based on their choices.</p>
        <p className="mt-1">• I developed this app using the latest stack: <HiglightedSpan>Next.js 15</HiglightedSpan> with React 19, App Router, Server Actions and shadcn/ui components for the UI system.</p>
        <p className="mt-1">• Stories are generated in real-time thanks to <HiglightedSpan>OpenAI (GPT & DALL·E)</HiglightedSpan> and Supabase Edge Functions, allowing the player to interact with text and visuals.</p>
        <p className="mt-1">• The platform supports <HiglightedSpan>French and English</HiglightedSpan>, offers visual themes, dice rolling mechanics, and tracks user progression.</p>
      </>,
      fr: <>
        <p>• Imagine.place est une <HiglightedSpan>plateforme de récits interactifs alimentée par l&apos;IA</HiglightedSpan> où les utilisateurs peuvent créer ou explorer des aventures narratives évolutives selon leurs choix.</p>
        <p className="mt-1">• J’ai développé cette application avec les dernières technologies : <HiglightedSpan>Next.js 15</HiglightedSpan> avec React 19, App Router, Server Actions, et les composants shadcn/ui pour l’interface.</p>
        <p className="mt-1">• Les histoires sont générées en temps réel grâce à <HiglightedSpan>OpenAI (GPT & DALL·E)</HiglightedSpan> et les Edge Functions de Supabase, permettant au joueur d’interagir avec des textes et des visuels.</p>
        <p className="mt-1">• La plateforme est <HiglightedSpan>bilingue (FR/EN)</HiglightedSpan>, propose des thèmes visuels, un système de dés, et permet de sauvegarder la progression de l&apos;utilisateur.</p>
      </>
    },
    type: "open-source",
    duration: {
      start: dayJS("03-05-2025")
    },
    highlightUrl: "https://x.com/supabase/status/1909552551206560004",
    isHighlighted: true,
    stacks: [
      Typescript,
      NextJS,
      TailwindCSS,
      Vercel,
      uiShadcn,
      Supabase,
      Prisma,
      OpenAI
    ],
    url: "https://imagine.place",
    urls: [
      { title: "Website", url: "https://imagine.place", icon: <AppWindow className="w-4 h-4" /> },
      { title: "Demo Video", url: "https://www.youtube.com/watch?v=LS3gtutZYnU", icon: <CardStackIcon className="w-4 h-4" /> }
    ]
  },
  {
    title: "Tweeets", 
    showOnCv: true,
    description: {
      en: "Tweet generator with AI, powered by OpenAI with emotions, tones, and other features.",
      fr: "Générateur de tweets avec IA, avec émotions, tons et d'autres fonctionnalités."
    },
    cvDescription: {
      en: <>
        <p>• Tweeets is a tweet generator powered by OpenAI, it allows users to generate tweets using the GPT-3 or GPT-4 model.</p>
        <p className="mt-1">• It was a project I made for the <HiglightedSpan>2023 Supabase Hackathon</HiglightedSpan>, thanks to this project I was able to learn how to use OpenAI and integrate AI models into my projects.</p>
        <p className="mt-1">• This project was <HiglightedSpan>awarded</HiglightedSpan> the first place in the <HiglightedSpan>Best use of AI</HiglightedSpan> section of the hackathon 🎉</p>
      </>,
      fr: <>
        <p>• Tweeets est un générateur de tweets alimenté par OpenAI, il permet aux utilisateurs de générer des tweets en utilisant le modèle GPT-3 ou GPT-4.</p>
        <p className="mt-1">• C&apos;était un projet que j&apos;ai réalisé pour le <HiglightedSpan>Supabase Hackathon 2023</HiglightedSpan>, grâce à ce projet j&apos;ai pu apprendre à utiliser OpenAI et intégrer des modèles d&apos;IA dans mes projets.</p>
        <p className="mt-1">• Ce projet a été <HiglightedSpan>récompensé</HiglightedSpan> la première place dans la section <HiglightedSpan>Meilleure utilisation de l&apos;IA</HiglightedSpan> du hackathon 🎉</p>
      </>
    },
    type: "open-source",
    duration: {
      start: dayJS("04-08-2023"),
      end: dayJS("09-22-2023")
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
      Stripe,
      uiShadcn
    ],
    url: "https://tweeets.app",
    isHighlighted: true,
    highlightUrl: "https://supabase.com/blog/launch-week-8-hackathon-winners#best-use-of-ai"
  },
  {
    title: "Simplist",
    showOnCv: true,
    description: {
      en: "A blog platform that allows users to post articles and retrieve them using the API.",
      fr: "Une plateforme de blog qui permet aux utilisateurs de publier des articles et de les récupérer en utilisant l&apos;API."
    },
    cvDescription: {
      en: <>
        <p>• Simplist is a blog platform that allows users to post articles and retrieve them using the API.</p>
        <p className="mt-1">• It was one of my big planned projects, I decided to make a simpler and open-source version for the 2024 Supabase Hackathon.</p>
        <p className="mt-1 italic">fun fact: This is what I use for my blog articles on my portfolio, feel free to check it out 😉</p>
      </>,
      fr: <>
        <p>• Simplist est une plateforme de blog qui permet aux utilisateurs de publier des articles et de les récupérer en utilisant l&apos;API.</p>
        <p className="mt-1">• C&apos;était l&apos;un de mes grands projets prévus, j&apos;ai décidé de faire une version plus simple et open-source pour le Supabase Hackathon 2024.</p>
        <p className="mt-1 italic">fun fact: C&apos;est ce que j&apos;utilise pour mes articles de blog sur mon portfolio, n&apos;hésitez pas à y jeter un œil 😉</p>
      </>
    },
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
      Redis,
      uiShadcn
    ],
    url: "https://simplist.blog"
  },
  {
    title: "Linkfy",
    showOnCv: false,
    description: {
      en: "Link shortener with analytics, custom domains or link-tree like pages.",
      fr: "Raccourcisseur de liens avec analytics, domaines personnalisés ou pages de type link-tree."
    },
    cvDescription: {
      en: <>
        <p>• Linkfy is a link shortener that allows users to shorten links and share them with others.</p>
        <p className="mt-1">• It was my serious first open-source project, I learned how to use TypeScript with SvelteKit and how to deploy applications on Vercel.</p>
        <p className="mt-1">• It was on this project that I discovered Supabase, I learned how to use TailwindCSS and how to make REST APIs or use Prisma with PostgreSQL.</p>
        <p className="mt-1">• During the activity period of Linkfy, the site had more than <HiglightedSpan>~500 shortened links</HiglightedSpan>.</p>
        
        <Separator className="mt-3" />

        <p className="mt-3">• Thanks to this project, I learned a lot, especially the importance of securing my APIs to prevent any abusive use of the API routes to modify the shortened links.</p>
        <p className="mt-1">• And I recently (October 2024) took over the project under NextJS, I fixed the security flaws and added new features as well as a new design.</p>
      </>,
      fr: <>
        <p>• Linkfy est un raccourcisseur de liens qui permet aux utilisateurs de raccourcir des liens et de les partager avec d&apos;autres.</p>
        <p className="mt-1">• C&apos;était mon premier projet open-source sérieux, j&apos;ai appris à utiliser TypeScript avec SvelteKit et comment déployer des applications sur Vercel.</p>
        <p className="mt-1">• C&apos;est sur ce projet que j&apos;ai découvert Supabase, j&apos;ai appris à utiliser TailwindCSS et comment faire des APIs REST ou utiliser Prisma avec PostgreSQL.</p>
        <p className="mt-1">• Durant toute la periode d&apos;activité de Linkfy, le site à eu plus de <HiglightedSpan>~500 liens raccourcis</HiglightedSpan>.</p>
        
        <Separator className="mt-3" />

        <p className="mt-3">• Grâce à ce projet, j&apos;ai appris énormément, notamment l&apos;importance de sécuriser mes APIs afin de prévenir toute utilisation abusive des routes API pour modifier les liens de raccourcissement.</p>
        <p className="mt-1">• Et j&apos;ai récemment (octobre 2024) repris le projet sous NextJS, j&apos;ai corrigé les failles de sécurité et j&apos;ai ajouté de nouvelles fonctionnalités ainsi qu&apos;un nouveau design.</p>
      </>
    },
    type: "open-source",
    duration: {
      start: dayJS("01-15-2023"),
      end: dayJS("01-18-2025")
    },
    stacks: [
      Typescript,
      SvelteKit,
      TailwindCSS,
      Vercel,
      Prisma,
      PostgreSQL,
      Supabase,
      Flowbite
    ],
    url: "https://github.com/Steellgold/svelte-linkfy",
    urls: [
      { title: "Website", url: "https://linkfy.fr", icon: <AppWindow className="w-4 h-4" /> },
      { title: "GitHub Repository", url: "https://github.com/Steellgold/linkfy", icon: <Github className="w-4 h-4" /> },
      { title: "Legacy NextJS Version", url: "https://github.com/Steellgold/linkfy-nextjs-legacy", icon: <Github className="w-4 h-4" /> }
    ]
  },
  {
    title: "Bottly",
    showOnCv: false,
    description: {
      en: "An Discord bot allow users ask questions to OpenAI GPT-3.5 in commands or thread directly (discuss, chat, generate text).",
      fr: "Un bot Discord permet aux utilisateurs de poser des questions à OpenAI en commandes ou dans un salon de discussion"
    },
    cvDescription: {
      en: <>
        <p>• Bottly is a Discord bot that allows users to ask questions, chat or generate text using the OpenAI GPT-3 or GPT-4 model.</p>
        <p className="mt-1">• During the development of Bottly, I learned how to use TypeScript with Discord.js, I also learned how to use the OpenAI API to integrate AI models into the bot.</p>
        <p>• During the activity period of Bottly, the bot had more than <HiglightedSpan>~5000 questions</HiglightedSpan> asked by users.</p>
      </>,
      fr: <>
        <p>• Bottly est un bot Discord qui permet aux utilisateurs de poser des questions, discuter ou générer du texte en utilisant le modèle OpenAI GPT-3 ou GPT-4.</p>
        <p className="mt-1">• Durant le développement de Bottly, j&apos;ai appris à utiliser TypeScript avec Discord.js, j&apos;ai également appris à utiliser l&apos;API OpenAI pour intégrer des modèles d&apos;IA dans le bot.</p>
        <p>• Durant toute la periode d&apos;activité de Bottly, le bot à eu plus de <HiglightedSpan>~5000 questions</HiglightedSpan> posées par les utilisateurs. </p>
      </>
    },
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
  },
  // {
  //   title: "Wapy",
  //   showOnCv: false,
  //   description: {
  //     en: "A Minecraft Bedrock Edition, PvP Factions server.",
  //     fr: "Un serveur Minecraft Bedrock Edition, PvP Factions."
  //   },
  //   cvDescription: {
  //     fr: <>
  //       <p className="mt-1">• Le projet Wapy a été lancé en 2022 par une équipe de passionnés souhaitant offrir une alternative aux serveurs PVP Faction classiques. Dès le début, le but était de proposer un serveur original et immersif, tout en mettant en avant des mécaniques de jeu inédites.</p>
  //       <p className="mt-1">• En 2023, le projet a connu une pause, principalement due à un manque de motivation et de disponibilité de la part de l&apos;équipe. Après plusieurs mois de travail intensif, le projet est resté en veille pendant un moment. Bien que cette pause ait ralenti le développement, elle a permis à l&apos;équipe de se ressourcer et de réfléchir à de nouvelles idées.</p>
  //       <p className="mt-1">• En 2024, la motivation est revenue plus forte que jamais. Grâce à de nouvelles inspirations et à l&apos;envie de donner vie au projet, l&apos;équipe a repris le développement de Wapy avec détermination. Depuis, nous travaillons d&apos;arrache-pied chaque jour pour vous
  //         proposer une expérience de jeu toujours plus enrichissante, en ajoutant de nouvelles fonctionnalités et en perfectionnant chaque détail du serveur.</p>
  //       <p className="mt-1">• Nous sommes plus que jamais engagés à faire de Wapy un serveur de référence dans le monde des PVP Faction, et nous sommes impatients de partager cette aventure avec vous !</p>
  //     </>,
  //     en: <>
  //       <p className="mt-1">• The Wapy project was launched in 2022 by a team of enthusiasts wishing to offer an alternative to classic PVP Faction servers. From the beginning, the goal was to offer an original and immersive server, while highlighting new game mechanics.</p>
  //       <p className="mt-1">• In 2023, the project experienced a pause, mainly due to a lack of motivation and availability on the part of the team. After several months of intensive work, the project remained on hold for a while. Although this break slowed down development, it allowed the team to recharge and think about new ideas.</p>
  //       <p className="mt-1">• In 2024, motivation returned stronger than ever. Thanks to new inspirations and the desire to bring the project to life, the team resumed the development of Wapy with determination. Since then, we have been working hard every day to offer you an ever more enriching gaming experience, adding new features and perfecting every detail of the server.</p>
  //       <p className="mt-1">• We are more committed than ever to making Wapy a reference server in the world of PVP Faction, and we are looking forward to sharing this adventure with you!</p>
  //     </>
  //   },
  //   type: "team",
  //   duration: {
  //     start: dayJS("12-25-2020")
  //   },
  //   stacks: [
  //     PocketMine,
  //     PHP,
  //     Typescript,
  //     NextJS,
  //     TailwindCSS,
  //     Vercel,
  //     Railway,
  //     Redis,
  //     PostgreSQL,
  //     Prisma,
  //     Stripe,
  //   ],
  //   url: "https://github.com/WapyMC"
  // },
  {
    title: "Blackjack",
    showOnCv: false,
    description: {
      en: "A modern multiplayer Blackjack game with real-time features, chat system and multiple themes.",
      fr: "Un jeu de Blackjack multijoueur moderne avec des fonctionnalités en temps réel, système de chat et thèmes multiples."
    },
    cvDescription: {
      en: <>
        <p>• A real-time multiplayer Blackjack game where players can create or join tables and play together.</p>
        <p className="mt-1">• I extensively customized the <HiglightedSpan>shadcn/ui components</HiglightedSpan> to create a unique, semi-transparent glass-morphism design - modifying their base styles while keeping their accessibility and functionality.</p>
        <p className="mt-1">• Features include a complete betting system with chip animations, real-time chat, multiple visual themes (classic casino, modern, neon, darkness), and responsive design for both desktop and mobile.</p>
        <p className="mt-1">• This project allowed me to deepen my knowledge of <HiglightedSpan>WebSocket</HiglightedSpan> technologies for real-time gaming mechanics and <HiglightedSpan>component design systems</HiglightedSpan>.</p>
        <p className="mt-1">• The game includes complex features like betting timers, card dealing animations, and state management for multiple players, all while maintaining a smooth user experience.</p>
      </>,
      fr: <>
        <p>• Un jeu de Blackjack multijoueur en temps réel où les joueurs peuvent créer ou rejoindre des tables et jouer ensemble.</p>
        <p className="mt-1">• J&apos;ai largement personnalisé les <HiglightedSpan>composants shadcn/ui</HiglightedSpan> pour créer un design unique semi-transparent de type glass-morphism - modifiant leurs styles de base tout en conservant leur accessibilité et fonctionnalité.</p>
        <p className="mt-1">• Les fonctionnalités incluent un système complet de paris avec animations des jetons, un chat en temps réel, plusieurs thèmes visuels (casino classique, moderne, néon, sombre), et un design adaptatif pour ordinateur et mobile.</p>
        <p className="mt-1">• Ce projet m&apos;a permis d&apos;approfondir mes connaissances des technologies <HiglightedSpan>WebSocket</HiglightedSpan> pour les mécaniques de jeu en temps réel et des <HiglightedSpan>systèmes de design de composants</HiglightedSpan>.</p>
        <p className="mt-1">• Le jeu inclut des fonctionnalités complexes comme des minuteurs de paris, des animations de distribution de cartes, et la gestion d&apos;état pour plusieurs joueurs, tout en maintenant une expérience utilisateur fluide.</p>
      </>
    },
    type: "open-source",
    duration: {
      start: dayJS("12-18-2024")
    },
    stacks: [
      Typescript,
      NextJS,
      TailwindCSS,
      Vercel,
      PostgreSQL,
      Railway,
      SocketIO,
      Fastify,
      uiShadcn
    ],
    url: "https://blackjack.steellgold.fr",
    urls: [
      { title: "Website", url: "https://blackjack.steellgold.fr/", icon: <CardStackIcon className="w-4 h-4" /> },
      { title: "GitHub Repository", url: "https://github.com/Steellgold/blackjack", icon: <Github className="w-4 h-4" /> }
    ]
  }
];
