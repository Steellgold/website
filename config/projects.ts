import { SkillName } from "@/components/icons";

type ProjectStatus = "Open-Source" | "Freelance" | "Private" | "In Progress" | "Refactoring" | "Miscellaneous";

type Project = {
  name: string;
  description: { en: string; fr: string };
  technologies: SkillName[];
  status: ProjectStatus;
  url: string;
  githubUrl?: string;
  awards?: string[];
  contributors?: { name: string; url: string }[];
  images?: string[];
}

const PROJECTS: Project[] = [
  {
    name: "Imagine",
    description: {
      en: "An AI-powered interactive storytelling platform where players shape their adventure through choices, visuals, and dynamic outcomes.",
      fr: "Une plateforme de narration interactive alimentée par l'IA où les joueurs façonnent leur aventure à travers des choix, des visuels et des résultats dynamiques."
    },
    technologies: [
      "TypeScript", "Next", "Tailwind", "Vercel", "shadcn/ui", "Supabase", "Prisma", "OpenAI"
    ],
    status: "Open-Source",
    url: "https://imagine.place",
    githubUrl: "https://github.com/Steellgold/imagine.place",
    awards: [
      "https://x.com/supabase/status/1909552551206560004"
    ],
    images: [
      "https://cdn.gaetanhus.fr/portfolio-preview-images/imagine-1.png",
    ]
  },
  {
    name: "Simplist",
    description: {
      en: "A blog platform with content management, allowing users to publish articles and access them via API.",
      fr: "Une plateforme de blog avec gestion de contenu, permettant aux utilisateurs de publier des articles et d'y accéder via une API."
    },
    technologies: [
      "React", "Next", "Turborepo", "Tailwind", "shadcn/ui", "AWS", "Vercel", "TypeScript", "Upstash", "Stripe", "BetterAuth"
    ],
    status: "Open-Source",
    githubUrl: "https://github.com/Steellgold/simplist.blog",
    url: "https://simplist.blog",
    images: [
      "https://cdn.gaetanhus.fr/portfolio-preview-images/simplist-1.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/simplist-2.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/simplist-3.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/simplist-4.png"
    ]
  },
  {
    name: "Tweeets",
    description: {
      en: "A tweet generator with AI, emotions, tones and other features.",
      fr: "Un générateur de tweets avec IA, émotions, tons et autres fonctionnalités."
    },
    technologies: [
      "TypeScript", "Next", "OpenAI", "Tailwind", "Vercel", "Prisma", "PostgreSQL", "Supabase", "Stripe", "shadcn/ui"
    ],
    status: "Open-Source",
    url: "https://github.com/Steellgold/tweeets",
    githubUrl: "https://github.com/Steellgold/tweeets",
    awards: [
      "https://supabase.com/blog/launch-week-8-hackathon-winners#best-use-of-ai"
    ],
    images: [
      "https://cdn.gaetanhus.fr/portfolio-preview-images/tweeets-1.webp",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/tweeets-2.webp",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/tweeets-3.webp"
    ]
  },
  {
    name: "Supa Clicker",
    description: {
      en: "An addictive incremental clicker game with prestige system, achievements, and real-time leaderboard.",
      fr: "Un jeu de clicker incrémental addictif avec système de prestige, succès et classement en temps réel."
    },
    technologies: [
      "TypeScript", "Next", "React", "Tailwind", "Supabase", "Vercel", "shadcn/ui"
    ],
    status: "Open-Source",
    url: "https://supaclicker.vercel.app",
    githubUrl: "https://github.com/Steellgold/supaclicker",
    images: [
      "https://cdn.gaetanhus.fr/portfolio-preview-images/supaclicker-1.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/supaclicker-2.png",
    ],
    awards: [
      "https://supabase.com/blog/lw15-hackathon-winners#winner-2"
    ]
  },
  {
    name: "Douceurs du Palais",
    description: {
      en: "University project in my degree course - A bakery website built with Symfony and Twig.",
      fr: "Projet universitaire dans le cadre de ma formation - Un site de boulangerie construit avec Symfony et Twig."
    },
    technologies: [
      "Tailwind", "PHP", "Symfony", "Twig", "Webpack", "Docker"
    ],
    status: "Miscellaneous",
    url: "https://github.com/Steellgold/douceurs-palais",
    githubUrl: "https://github.com/Steellgold/douceurs-palais",
    images: [
      "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-0.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-1.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-10.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-16.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-17.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-5.png",
    ],
  },
  {
    name: "Nowly",
    description: {
      en: "Nowly is a system that automatically displays what you're watching online in your Discord Rich Presence status. Using a browser extension, it detects the content you're viewing and shares it in real-time with your Discord friends: title, channel, progress, and clickable buttons.",
      fr: "La façon la plus simple d'afficher automatiquement ce que vous regardez. Séries, films ou streams, votre statut Discord reste toujours à jour."
    },
    technologies: [
      "TypeScript", "React", "Next", "Tailwind", "Fastify", "PostgreSQL", "Zod", "Cloudflare", "Go", "Chrome"
    ],
    status: "Open-Source",
    url: "https://nowly.me/",
    githubUrl: "https://github.com/nowly-presence/nowly",
    contributors: [
      { name: "q-kimi", url: "https://github.com/q-kimi" }
    ],
    images: [
      "https://cdn.gaetanhus.fr/portfolio-preview-images/nowly-1.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/nowly-2.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/nowly-3.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/nowly-4.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/nowly-5.png",
    ],
  }
]

export { PROJECTS };
export type { Project, ProjectStatus };

