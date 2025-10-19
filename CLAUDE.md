# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development**
- `pnpm dev` - Start development server with Turbopack and experimental HTTPS
- `pnpm build` - Build the production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint checks

**Component Registry**
- `pnpm registry:build` - Build shadcn/ui component registry

**Spotify Integration**
- `pnpm spotify-token` - Generate Spotify API token
- `pnpm spotify-process` - Process Spotify authentication code

## Architecture Overview

This is a Next.js 15 personal portfolio website with integrated blogging and URL shortener functionality.

### Core Technologies
- **Framework**: Next.js 15 with App Router and Turbopack
- **Styling**: Tailwind CSS v4 with custom configurations
- **UI**: shadcn/ui components (New York style)
- **Database**: Upstash Redis for URL shortener
- **Blog**: Simplist API integration
- **Music**: Spotify Web API integration

### Project Structure

```
app/
├── (ui)/                    # UI components showcase/testing
├── (apps)/                  # Integrated applications
│   └── (shortener)/         # URL shortener app
├── blog/[slug]/             # Dynamic blog posts
├── api/auth/spotify/        # Spotify OAuth callback
└── layout.tsx               # Root layout with metadata
```

### Key Features Architecture

**URL Shortener** (`/lib/shortener.ts`)
- Redis-based storage with Upstash
- Rate limiting (10 requests per 30 minutes)
- Password protection and expiration support
- Both link and article types
- IP-based link management

**Blog System** (`/lib/blog.ts`)
- Simplist SDK integration
- Server-side rendering with revalidation (300s)
- Markdown rendering with syntax highlighting

**Spotify Integration** (`/lib/spotify.ts`)
- Real-time currently playing track
- OAuth flow for user authentication
- Player component with live updates

### Component Organization

**Sections** (`components/sections/`)
- Modular page sections (header, skills, projects, blog, contact)
- Each section is self-contained with its own data

**UI Components** (`components/ui/`)
- shadcn/ui components with Tailwind CSS
- Consistent design system using stone color palette

**Custom Components**
- `conditional-padding.tsx` - Context-aware padding management
- `spotify-player.tsx` - Real-time music player
- `markdown/` - Blog content rendering components

### Environment Variables

Required for full functionality:
```
SIMPLIST_API_KEY=                    # Blog content (public)
UPSTASH_REDIS_REST_URL=             # URL shortener storage
UPSTASH_REDIS_REST_TOKEN=           # URL shortener auth
SPOTIFY_CLIENT_ID=                  # Music integration
SPOTIFY_CLIENT_SECRET=              # Music integration
SPOTIFY_REFRESH_TOKEN=              # Music integration
```

### Routing Patterns

- **App Router**: All routes use the new App Router pattern
- **Route Groups**: `(ui)` and `(apps)` for logical organization
- **Dynamic Routes**: `[slug]` for blog posts, `[short]` for shortened URLs
- **API Routes**: Server actions in `lib/actions/` directory

### Data Management

**Blog Posts**: Server-side fetched from Simplist SDK with 5-minute cache
**URL Shortener**: Redis with automatic cleanup of expired links
**Spotify**: Real-time API calls with refresh token rotation

### Development Notes

- Uses `@/*` path aliases configured in tsconfig.json
- Component registry system for shadcn/ui management
- Turbopack enabled for faster development builds
- HTTPS in development for OAuth testing
- TypeScript strict mode enabled throughout

### Testing & Deployment

The application is optimized for production with:
- Image optimization for multiple CDN sources
- Static asset optimization
- Bundle analysis and splitting
- SEO optimization with comprehensive metadata