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
  chromeWebStoreUrl?: string;
  images?: string[];
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
    images: [
      "https://cdn.gaetanhus.fr/assets/projects_images/simplist.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/simplist-2.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/simplist-3.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/simplist-4.png",
    ],
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
    chromeWebStoreUrl: "https://chromewebstore.google.com/detail/nowly/kmnlnfldimgneaopdihplkebobckcjpf",
    images: [
      "https://cdn.gaetanhus.fr/assets/projects_images/nowly.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/nowly-2.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/nowly-3.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/nowly-4.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/nowly-5.png",
    ],
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
    images: [
      "https://cdn.gaetanhus.fr/assets/projects_images/imagine.png",
    ],
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
    images: [
      "https://cdn.gaetanhus.fr/assets/projects_images/tweeets.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/tweeets-2.webp",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/tweeets-3.webp",
    ],
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
    images: [
      "https://cdn.gaetanhus.fr/assets/projects_images/supaclicker.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/supaclicker-2.png",
    ],
    url: "https://supaclicker.vercel.app",
    awards: ["https://supabase.com/blog/lw15-hackathon-winners#winner-2"],
  },
  {
    name: "Douceurs du Palais",
    description: {
      en: "E-commerce platform for a bakery, with Stripe checkout and a loyalty program. University project.",
      fr: "Plateforme e-commerce pour une boulangerie, avec paiement Stripe et programme de fidélité. Projet universitaire.",
    },
    technologies: ["Tailwind CSS", "PHP", "Symfony", "Twig", "Webpack", "Stripe", "Docker"],
    status: "Miscellaneous",
    category: "finished",
    timelineDate: "2023",
    githubUrl: "https://github.com/Steellgold/douceurs-palais",
    images: [
      "https://cdn.gaetanhus.fr/assets/projects_images/palais.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-0.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-1.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-5.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-10.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-16.png",
      "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-17.png",
    ],
    url: "https://github.com/Steellgold/douceurs-palais",
  },
];