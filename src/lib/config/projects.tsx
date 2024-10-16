import { AppWindow, Github } from "lucide-react";
import { Separator } from "../components/ui/separator";
import { dayJS } from "../utils/dayjs/day-js";
import { DiscordJS, Flowbite, NextJS, OpenAI, PHP, PocketMine, PostgreSQL, Prisma, Railway, Redis, Stripe, Supabase, SvelteKit, TailwindCSS, Typescript, uiShadcn, Vercel } from "./stacks";
import { Project } from "./types/project.type";

export const projects: Project[] = [
  {
    title: "Linkfy",
    description: {
      en: "Link shortener with analytics and custom links.",
      fr: "Raccourcisseur de liens avec des analyses et des liens personnalisés"
    },
    cvDescription: {
      en: <>
        <p>• Linkfy is a link shortener that allows users to shorten links and share them with others.</p>
        <p className="mt-1">• It was my serious first open-source project, I learned how to use TypeScript with SvelteKit and how to deploy applications on Vercel.</p>
        <p className="mt-1">• It was on this project that I discovered Supabase, I learned how to use TailwindCSS and how to make REST APIs or use Prisma with PostgreSQL.</p>
        <p className="mt-1">• During the activity period of Linkfy, the site had more than <span className="text-yellow-100">~500 shortened links</span>.</p>
        
        <Separator className="mt-3" />

        <p className="mt-3">• Thanks to this project, I learned a lot, especially the importance of securing my APIs to prevent any abusive use of the API routes to modify the shortened links.</p>
        <p className="mt-1">• And I recently (October 2024) took over the project under NextJS, I fixed the security flaws and added new features as well as a new design.</p>
      </>,
      fr: <>
        <p>• Linkfy est un raccourcisseur de liens qui permet aux utilisateurs de raccourcir des liens et de les partager avec d&apos;autres.</p>
        <p className="mt-1">• C&apos;était mon premier projet open-source sérieux, j&apos;ai appris à utiliser TypeScript avec SvelteKit et comment déployer des applications sur Vercel.</p>
        <p className="mt-1">• C&apos;est sur ce projet que j&apos;ai découvert Supabase, j&apos;ai appris à utiliser TailwindCSS et comment faire des APIs REST ou utiliser Prisma avec PostgreSQL.</p>
        <p className="mt-1">• Durant toute la periode d&apos;activité de Linkfy, le site à eu plus de <span className="text-yellow-100">~500 liens raccourcis</span>.</p>
        
        <Separator className="mt-3" />

        <p className="mt-3">• Grâce à ce projet, j&apos;ai appris énormément, notamment l&apos;importance de sécuriser mes APIs afin de prévenir toute utilisation abusive des routes API pour modifier les liens de raccourcissement.</p>
        <p className="mt-1">• Et j&apos;ai récemment (octobre 2024) repris le projet sous NextJS, j&apos;ai corrigé les failles de sécurité et j&apos;ai ajouté de nouvelles fonctionnalités ainsi qu&apos;un nouveau design.</p>
      </>
    },
    type: "open-source",
    duration: {
      start: dayJS("01-15-2023")
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
    title: "Tweeets", 
    description: {
      en: "Tweet generator with AI, powered by OpenAI.",
      fr: "Générateur de tweets avec IA, alimenté par OpenAI."
    },
    cvDescription: {
      en: <>
        <p>• Tweeets is a tweet generator powered by OpenAI, it allows users to generate tweets using the GPT-3 or GPT-4 model.</p>
        <p className="mt-1">• It was a project I made for the <span className="text-yellow-100">2023 Supabase Hackathon</span>, thanks to this project I was able to learn how to use OpenAI and integrate AI models into my projects.</p>
        <p className="mt-1">• This project was <span className="text-yellow-100">awarded</span> the first place in the <span className="text-yellow-100">Best use of AI</span> section of the hackathon 🎉</p>
      </>,
      fr: <>
        <p>• Tweeets est un générateur de tweets alimenté par OpenAI, il permet aux utilisateurs de générer des tweets en utilisant le modèle GPT-3 ou GPT-4.</p>
        <p className="mt-1">• C&apos;était un projet que j&apos;ai réalisé pour le <span className="text-yellow-100">Supabase Hackathon 2023</span>, grâce à ce projet j&apos;ai pu apprendre à utiliser OpenAI et intégrer des modèles d&apos;IA dans mes projets.</p>
        <p className="mt-1">• Ce projet a été <span className="text-yellow-100">récompensé</span> la première place dans la section <span className="text-yellow-100">Meilleure utilisation de l&apos;IA</span> du hackathon 🎉</p>
      </>
    },
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
      Stripe,
      uiShadcn
    ],
    url: "https://tweeets.app",
    isHighlighted: true,
    highlightUrl: "https://supabase.com/blog/launch-week-8-hackathon-winners#best-use-of-ai"
  },
  {
    title: "Simplist",
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
    title: "Bottly",
    description: {
      en: "An Discord bot allow users ask questions to ChatGPT",
      fr: "Un bot Discord permettant aux utilisateurs de poser des questions"
    },
    cvDescription: {
      en: <>
        <p>• Bottly is a Discord bot that allows users to ask questions, chat or generate text using the OpenAI GPT-3 or GPT-4 model.</p>
        <p className="mt-1">• During the development of Bottly, I learned how to use TypeScript with Discord.js, I also learned how to use the OpenAI API to integrate AI models into the bot.</p>
        <p>• During the activity period of Bottly, the bot had more than <span className="text-yellow-100">~5000 questions</span> asked by users.</p>
      </>,
      fr: <>
        <p>• Bottly est un bot Discord qui permet aux utilisateurs de poser des questions, discuter ou générer du texte en utilisant le modèle OpenAI GPT-3 ou GPT-4.</p>
        <p className="mt-1">• Durant le développement de Bottly, j&apos;ai appris à utiliser TypeScript avec Discord.js, j&apos;ai également appris à utiliser l&apos;API OpenAI pour intégrer des modèles d&apos;IA dans le bot.</p>
        <p>• Durant toute la periode d&apos;activité de Bottly, le bot à eu plus de <span className="text-yellow-100">~5000 questions</span> posées par les utilisateurs. </p>
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
  {
    title: "Wapy",
    description: {
      en: "A Minecraft Bedrock Edition, PvP Factions server.",
      fr: "Un serveur Minecraft Bedrock Edition, PvP Factions."
    },
    cvDescription: {
      fr: <>
        <p className="mt-1">• Le projet Wapy a été lancé en 2022 par une équipe de passionnés souhaitant offrir une alternative aux serveurs PVP Faction classiques. Dès le début, le but était de proposer un serveur original et immersif, tout en mettant en avant des mécaniques de jeu inédites.</p>
        <p className="mt-1">• En 2023, le projet a connu une pause, principalement due à un manque de motivation et de disponibilité de la part de l&apos;équipe. Après plusieurs mois de travail intensif, le projet est resté en veille pendant un moment. Bien que cette pause ait ralenti le développement, elle a permis à l&apos;équipe de se ressourcer et de réfléchir à de nouvelles idées.</p>
        <p className="mt-1">• En 2024, la motivation est revenue plus forte que jamais. Grâce à de nouvelles inspirations et à l&apos;envie de donner vie au projet, l&apos;équipe a repris le développement de Wapy avec détermination. Depuis, nous travaillons d&apos;arrache-pied chaque jour pour vous
          proposer une expérience de jeu toujours plus enrichissante, en ajoutant de nouvelles fonctionnalités et en perfectionnant chaque détail du serveur.</p>
        <p className="mt-1">• Nous sommes plus que jamais engagés à faire de Wapy un serveur de référence dans le monde des PVP Faction, et nous sommes impatients de partager cette aventure avec vous !</p>
      </>,
      en: <>
        <p className="mt-1">• The Wapy project was launched in 2022 by a team of enthusiasts wishing to offer an alternative to classic PVP Faction servers. From the beginning, the goal was to offer an original and immersive server, while highlighting new game mechanics.</p>
        <p className="mt-1">• In 2023, the project experienced a pause, mainly due to a lack of motivation and availability on the part of the team. After several months of intensive work, the project remained on hold for a while. Although this break slowed down development, it allowed the team to recharge and think about new ideas.</p>
        <p className="mt-1">• In 2024, motivation returned stronger than ever. Thanks to new inspirations and the desire to bring the project to life, the team resumed the development of Wapy with determination. Since then, we have been working hard every day to offer you an ever more enriching gaming experience, adding new features and perfecting every detail of the server.</p>
        <p className="mt-1">• We are more committed than ever to making Wapy a reference server in the world of PVP Faction, and we are looking forward to sharing this adventure with you!</p>
      </>
    },
    type: "team",
    duration: {
      start: dayJS("12-25-2020")
    },
    stacks: [
      PocketMine,
      PHP,
      Typescript,
      NextJS,
      TailwindCSS,
      Vercel,
      Railway,
      Redis,
      PostgreSQL,
      Prisma,
      Stripe,
    ],
    url: "https://github.com/WapyMC"
  }
];