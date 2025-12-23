# AGENTS.md

Quick reference for AI coding agents working in this repository.

## Commands
- `pnpm dev` - Start dev server with Turbopack + HTTPS
- `pnpm build` - Production build
- `pnpm lint` - Run ESLint

## Code Style
- **Package Manager**: Always use PNPM, never npm or yarn
- **TypeScript**: Strict mode enabled - always type everything explicitly
- **Imports**: Use `@/*` path aliases (e.g., `@/components/ui/button`)
- **Components**: Follow Next.js 15+ App Router patterns with Server Components by default
- **UI Components**: Use shadcn/ui (New York style) from `components/ui/`
- **Formatting**: Follow Next.js conventions - no trailing semicolons in JSX
- **Naming**: kebab-case for files, PascalCase for components, camelCase for functions/variables

## Architecture
- Next.js 16 + React 19 + Tailwind CSS v4 + TypeScript
- Server actions in `lib/actions/`, utilities in `lib/`
- Route groups: `(ui)` for UI showcase, `(apps)` for integrated apps
- Upstash Redis for URL shortener, Simplist SDK for blog

## Versioning
- Version format: `DESIGN.MAJOR.MINOR` (e.g., `5.6.18`)
  - **DESIGN** (first digit): Major design/DA version (currently 5)
  - **MAJOR** (second digit): Significant features, breaking changes, new integrations
  - **MINOR** (third digit): Bug fixes, small improvements, refactors