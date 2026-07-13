import {
  Icon_AWS,
  Icon_BetterAuth,
  Icon_Docker,
  Icon_DrizzleORM,
  Icon_Fastify,
  Icon_Nextjs,
  Icon_Nodejs,
  Icon_OpenAI,
  Icon_PHP,
  Icon_PostgreSQL,
  Icon_Prisma,
  Icon_Railway,
  Icon_React,
  Icon_Redis,
  Icon_shadcnui,
  Icon_Stripe,
  Icon_Supabase,
  Icon_Symfony,
  Icon_Tailwind,
  Icon_Turborepo,
  Icon_Twig,
  Icon_TypeScript,
  Icon_Upstash,
  Icon_Vercel,
  Icon_Webpack,
  Icon_Zod,
} from "@/components/tech-icons";
import { FC, SVGProps } from "react";

export type SkillName =
  | "TypeScript"
  | "Next.js"
  | "React"
  | "Tailwind CSS"
  | "shadcn/ui"
  | "Node.js"
  | "Fastify"
  | "PostgreSQL"
  | "Prisma"
  | "Drizzle ORM"
  | "Docker"
  | "Better Auth"
  | "Supabase"
  | "OpenAI"
  | "Stripe"
  | "Vercel"
  | "AWS"
  | "Upstash"
  | "Turborepo"
  | "Zod"
  | "Redis"
  | "PHP"
  | "Symfony"
  | "Twig"
  | "Webpack"
  | "Railway";

type SkillEntry = {
  icon: FC<SVGProps<SVGSVGElement>>;
  url: string;
};

export const SKILLS: Record<SkillName, SkillEntry> = {
  TypeScript: { icon: Icon_TypeScript, url: "https://www.typescriptlang.org" },
  "Next.js": { icon: Icon_Nextjs, url: "https://nextjs.org" },
  React: { icon: Icon_React, url: "https://react.dev" },
  "Tailwind CSS": { icon: Icon_Tailwind, url: "https://tailwindcss.com" },
  "shadcn/ui": { icon: Icon_shadcnui, url: "https://ui.shadcn.com" },
  "Node.js": { icon: Icon_Nodejs, url: "https://nodejs.org" },
  Fastify: { icon: Icon_Fastify, url: "https://fastify.dev" },
  PostgreSQL: { icon: Icon_PostgreSQL, url: "https://www.postgresql.org" },
  Prisma: { icon: Icon_Prisma, url: "https://www.prisma.io" },
  "Drizzle ORM": { icon: Icon_DrizzleORM, url: "https://orm.drizzle.team" },
  Docker: { icon: Icon_Docker, url: "https://www.docker.com" },
  "Better Auth": { icon: Icon_BetterAuth, url: "https://www.better-auth.com" },
  Supabase: { icon: Icon_Supabase, url: "https://supabase.com" },
  OpenAI: { icon: Icon_OpenAI, url: "https://openai.com" },
  Stripe: { icon: Icon_Stripe, url: "https://stripe.com" },
  Vercel: { icon: Icon_Vercel, url: "https://vercel.com" },
  AWS: { icon: Icon_AWS, url: "https://aws.amazon.com" },
  Upstash: { icon: Icon_Upstash, url: "https://upstash.com" },
  Turborepo: { icon: Icon_Turborepo, url: "https://turbo.build" },
  Zod: { icon: Icon_Zod, url: "https://zod.dev" },
  Redis: { icon: Icon_Redis, url: "https://redis.io" },
  PHP: { icon: Icon_PHP, url: "https://www.php.net" },
  Symfony: { icon: Icon_Symfony, url: "https://symfony.com" },
  Twig: { icon: Icon_Twig, url: "https://twig.symfony.com" },
  Webpack: { icon: Icon_Webpack, url: "https://webpack.js.org" },
  Railway: { icon: Icon_Railway, url: "https://railway.app" },
};

export const TECHNOLOGIES_GRID: SkillName[] = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "shadcn/ui",
  "TypeScript",
  "Better Auth",
  "Prisma",
  "Drizzle ORM",
  "Supabase",
  "PostgreSQL",
  "Node.js",
  "Fastify",
  "Docker",
  "Vercel",
  "AWS",
  "Upstash",
  "Redis",
  "Turborepo",
  "Zod",
  "OpenAI",
  "Stripe",
];