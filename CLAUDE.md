# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio/homepage for Gaëtan Huszovits (gaetanhus.fr), built with Next.js (App Router) and shadcn/ui. Single-page app with a projects list, gallery, and blog teaser, localized in French (default) and English.

## Commands

```bash
pnpm dev         # start dev server (Turbopack)
pnpm build       # production build
pnpm start       # run production build
pnpm lint        # eslint
pnpm typecheck   # tsc --noEmit, no output
pnpm format      # prettier --write on **/*.{ts,tsx}
```

There is no test runner configured in this repo.

To add a shadcn/ui component: `npx shadcn@latest add <name>` — it's placed in `components/ui`.

## Important: this is a pre-release Next.js version

`AGENTS.md` flags that the installed `next` version (16.2.6) has breaking changes vs. the Next.js you were trained on — APIs, conventions, and file structure may differ. Before writing Next.js-specific code, check `node_modules/next/dist/docs/` for the relevant guide and heed deprecation notices. If `node_modules` isn't installed yet, run `pnpm install` first.

## Architecture

**Rendering model**: everything is a single route (`app/page.tsx`) composed from section components in `components/sections/*`, plus two secondary pages (`app/projects/page.tsx`, `app/gallery/page.tsx`). Sections default to server components; only components needing interactivity (e.g. `components/language-switcher.tsx`) are `"use client"`.

**Content lives in `config/*.ts`, not in components or CMS**: `config/projects.ts` (portfolio projects), `config/skills.ts` (tech stack + icons, also used to build `TECHNOLOGIES_GRID`), `config/gallery.ts` (cat photo gallery, served from `cdn.gaetanhus.fr`). Components import and render these directly — adding a project/skill/photo means editing the config file, not touching JSX.

**i18n via next-intl, cookie-based (not URL-based)**:
- `i18n/routing.ts` defines `locales` (`fr`, `en`) and `defaultLocale` (`fr`).
- `i18n.ts` (`getRequestConfig`) reads the `NEXT_LOCALE` cookie server-side to pick the locale — there's no `/en`/`/fr` path prefix.
- `components/language-switcher.tsx` sets the cookie client-side and does a full `window.location.reload()` to apply it.
- Translated strings live in `messages/fr.json` / `messages/en.json`, consumed via `useTranslations`/`getTranslations`.
- Content that isn't a short UI string (project descriptions, photo captions) is instead stored inline in the `config/*.ts` files as `{ en, fr }` objects, not in the messages JSON.

**Optional external dependency**: the blog section (`lib/blog.ts`, `components/sections/blog-section.tsx`) calls the `@simplist.blog/sdk` client, gated on `env.SIMPLIST_API_KEY` (validated via `lib/env.ts` with zod). If the key isn't set, `getArticles` returns `[]` and the section is expected to render nothing — this degradation must keep working when touching that code path.

**Styling**: Tailwind CSS v4 (`app/globals.css`, no `tailwind.config`), shadcn/ui `radix-nova` style with `neutral` base color and no class prefix. Use the `cn()` helper from `lib/utils.ts` (clsx + tailwind-merge) when composing conditional class names. Two custom Google fonts are wired as CSS variables in `lib/font.tsx` (`piano` = Instrument Serif for headings, `handwritten` = Caveat) alongside Geist/Geist Mono set up in `app/layout.tsx`.

**Path alias**: `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/components/ui/button`, `@/lib/utils`, `@/config/projects`.

## Code style

- Prettier: no semicolons, double quotes, 80-char print width, trailing commas (ES5). `prettier-plugin-tailwindcss` auto-sorts class names — also applied inside `cn()` and `cva()` calls per `.prettierrc`'s `tailwindFunctions`.
- Components are typed as `FC` (from `"react"`) rather than implicit function declarations, e.g. `export const ProjectsSection: FC = () => { ... }`.
