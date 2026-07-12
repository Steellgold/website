export type ProjectStatus = "Open-Source" | "Freelance" | "Private" | "In Progress" | "Refactoring" | "Miscellaneous";
export type ProjectCategory = "active" | "finished";

export type Project = {
  name: string;
  description: { en: string; fr: string };
  technologies: string[];
  status: ProjectStatus;
  category: ProjectCategory;
  featured?: boolean;
  timelineDate: string;
  url: string;
  githubUrl?: string;
  awards?: string[];
  contributors?: { name: string; url: string }[];
};

export const PROJECTS: Project[] = [
  {
    name: "Simplist",
    description: {
      en: "A blog platform with content management, allowing users to publish articles and access them via API.",
      fr: "Une plateforme de blog avec gestion de contenu, permettant aux utilisateurs de publier des articles et d'y accéder via une API.",
    },
    technologies: ["React", "Next.js", "Turborepo", "Tailwind CSS", "shadcn/ui", "AWS", "Vercel", "TypeScript", "Upstash", "Stripe", "Better Auth"],
    status: "Open-Source",
    category: "active",
    featured: true,
    timelineDate: "2024",
    githubUrl: "https://github.com/Steellgold/simplist.blog",
    url: "https://simplist.blog",
  },
  {
    name: "Nowly",
    description: {
      en: "Nowly automatically displays what you're watching online in your Discord Rich Presence status via a browser extension: title, channel, progress, and clickable buttons.",
      fr: "La façon la plus simple d'afficher automatiquement ce que vous regardez. Séries, films ou streams, votre statut Discord reste toujours à jour.",
    },
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Fastify", "PostgreSQL", "Zod"],
    status: "Open-Source",
    category: "active",
    timelineDate: "2025",
    githubUrl: "https://github.com/nowly-presence/nowly",
    url: "https://nowly.me/",
    contributors: [{ name: "q-kimi", url: "https://github.com/q-kimi" }],
  },
  {
    name: "Imagine",
    description: {
      en: "An AI-powered interactive storytelling platform where players shape their adventure through choices, visuals, and dynamic outcomes.",
      fr: "Une plateforme de narration interactive alimentée par l'IA où les joueurs façonnent leur aventure à travers des choix, des visuels et des résultats dynamiques.",
    },
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel", "shadcn/ui", "Supabase", "Prisma", "OpenAI"],
    status: "Open-Source",
    category: "finished",
    timelineDate: "2024",
    githubUrl: "https://github.com/Steellgold/imagine.place",
    url: "https://imagine.place",
    awards: ["https://x.com/supabase/status/1909552551206560004"],
  },
  {
    name: "Tweeets",
    description: {
      en: "A tweet generator with AI, emotions, tones and other features.",
      fr: "Un générateur de tweets avec IA, émotions, tons et autres fonctionnalités.",
    },
    technologies: ["TypeScript", "Next.js", "OpenAI", "Tailwind CSS", "Vercel", "Prisma", "PostgreSQL", "Supabase", "Stripe", "shadcn/ui"],
    status: "Open-Source",
    category: "finished",
    timelineDate: "2023",
    githubUrl: "https://github.com/Steellgold/tweeets",
    url: "https://github.com/Steellgold/tweeets",
    awards: ["https://supabase.com/blog/launch-week-8-hackathon-winners#best-use-of-ai"],
  },
  {
    name: "Supa Clicker",
    description: {
      en: "An addictive incremental clicker game with prestige system, achievements, and real-time leaderboard.",
      fr: "Un jeu de clicker incrémental addictif avec système de prestige, succès et classement en temps réel.",
    },
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Supabase", "Vercel", "shadcn/ui"],
    status: "Open-Source",
    category: "finished",
    timelineDate: "2025",
    githubUrl: "https://github.com/Steellgold/supaclicker",
    url: "https://supaclicker.vercel.app",
    awards: ["https://supabase.com/blog/lw15-hackathon-winners#winner-2"],
  },
  {
    name: "Douceurs du Palais",
    description: {
      en: "A complete e-commerce platform for a bakery: product catalog, cart, Stripe checkout, loyalty program and admin back-office. University project built as part of my degree course.",
      fr: "Une plateforme e-commerce complète pour une boulangerie : catalogue de produits, panier, paiement Stripe, programme de fidélité et back-office admin. Projet universitaire réalisé dans le cadre de ma formation.",
    },
    technologies: ["Tailwind CSS", "PHP", "Symfony", "Twig", "Webpack", "Stripe", "Docker"],
    status: "Miscellaneous",
    category: "finished",
    timelineDate: "2023",
    githubUrl: "https://github.com/Steellgold/douceurs-palais",
    url: "https://github.com/Steellgold/douceurs-palais",
  },
];