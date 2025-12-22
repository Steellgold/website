import { SkillName } from "@/components/icons";

type ProjectStatus = "Open-Source" | "Freelance" | "Private" | "In Progress" | "Refactoring" | "Miscellaneous";

type Project = {
  name: string;
  description: string;
  technologies: SkillName[];
  status: ProjectStatus;
  url: string;
  githubUrl?: string;
  awards?: string[];
  images?: string[];
}

const PROJECTS: Project[] = [
  {
    name: "Imagine",
    description: "An AI-powered interactive storytelling platform where players shape their adventure through choices, visuals, and dynamic outcomes.",
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
    description: "A blog platform with content management, allowing users to publish articles and access them via API.",
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
    description: "A tweet generator with AI, emotions, tones and other features.",
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
    description: "An addictive incremental clicker game with prestige system, achievements, and real-time leaderboard.",
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
    description: "University project in my degree course - A bakery website built with Symfony and Twig.",
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
  }
]

export { PROJECTS };
export type { Project, ProjectStatus };

