import { SkillName } from "@/components/icons";

type ProjectStatus = "Open-Source" | "Freelance" | "Private" | "In Progress" | "Refactoring";

type Project = {
  name: string;
  description: string;
  technologies: SkillName[];
  status: ProjectStatus;
  url: string;
  awards?: string[];
}

const PROJECTS: Project[] = [
  {
    name: "Imagine.place",
    description: "An AI-powered interactive storytelling platform where players shape their adventure through choices, visuals, and dynamic outcomes.",
    technologies: [
      "TypeScript", "Next", "Tailwind", "Vercel", "shadcn/ui", "Supabase", "Prisma", "OpenAI"
    ],
    status: "Open-Source",
    url: "https://imagine.place",
    awards: [
      "https://x.com/supabase/status/1909552551206560004"
    ]
  },
  {
    name: "Simplist",
    description: "A blog platform with content management, allowing users to publish articles and access them via API.",
    technologies: [
      "React", "Next", "Turborepo", "Tailwind", "shadcn/ui", "AWS", "Vercel", "TypeScript", "Upstash", "Stripe", "BetterAuth"
    ],
    status: "Refactoring",
    url: "https://simplist.blog"
  },
  {
    name: "Tweeets",
    description: "A tweet generator with AI, emotions, tones and other features.",
    technologies: [
      "TypeScript", "Next", "OpenAI", "Tailwind", "Vercel", "Prisma", "PostgreSQL", "Supabase", "Stripe", "shadcn/ui"
    ],
    status: "Open-Source",
    url: "https://github.com/Steellgold/tweeets",
    awards: [
      "https://supabase.com/blog/launch-week-8-hackathon-winners#best-use-of-ai"
    ]
  }
]

export { PROJECTS };
export type { Project, ProjectStatus };

