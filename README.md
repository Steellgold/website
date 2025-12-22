<img width="1797" height="266" alt="OG GitHub" src="https://github.com/user-attachments/assets/f4823143-2daa-48f8-8022-1f430d11fcfa" />

This repository contains the source code for my personal portfolio website, developed with Next.js 15 and TypeScript. This site showcases my development skills through interactive components, responsive design, and modern web technologies.

## 📚 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router and Turbopack
- **Language**: [TypeScript](https://www.typescriptlang.org/) - for static typing and better maintainability
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - utility CSS framework with custom configurations
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - accessible and customizable interface elements
- **Icons**: [Lucide React](https://lucide.dev/) - beautiful & consistent icon toolkit
- **Markdown**: [React Markdown](https://github.com/remarkjs/react-markdown) - for blog content rendering
- **State Management**: React Context API for lightweight state management
- **Blogging**: [Simplist SDK](https://simplist.blog/) - for fetching and displaying blog articles

## 🔧 API Integrations and Environment Variables

The project integrates multiple services requiring environment variables:

```plaintext
# Blog Content (Required)
SIMPLIST_API_KEY=<Your Simplist API Key>

# URL Shortener (Required for shortener functionality)
UPSTASH_REDIS_REST_URL=<Your Upstash Redis URL>
UPSTASH_REDIS_REST_TOKEN=<Your Upstash Redis Token>

# Spotify Integration (Optional - for music player)
SPOTIFY_CLIENT_ID=<Your Spotify Client ID>
SPOTIFY_CLIENT_SECRET=<Your Spotify Client Secret>
SPOTIFY_REFRESH_TOKEN=<Your Spotify Refresh Token>
```

### Integration Description

- **Simplist**: A blogging service with an SDK to retrieve blog articles. The website fetches blog posts from Simplist and displays them with proper markdown rendering. For more information, visit [Simplist](https://simplist.blog/).
- **Upstash Redis**: Used for the integrated URL shortener functionality, storing short links with password protection and expiration features.
- **Spotify**: Powers the real-time music player showing currently playing tracks (optional feature).

## 🚀 Running Locally

1. Clone the repository:

```bash
git clone https://github.com/Steellgold/website.git
cd website
```

2. Install dependencies:

```bash
pnpm install
```

3. Configure the environment variables in `.env.local`:

```bash
# Required for blog functionality
SIMPLIST_API_KEY=your_simplist_api_key_here

# Required for URL shortener (optional)
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token

# Optional Spotify integration
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
```

4. Start the development server:

```bash
pnpm dev
```

5. Access the site locally at `http://localhost:3000`.

## 🏗️ Build and Deploy

To build the project for production:

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```

## 📁 Project Structure

```
website/
├── app/                    # Next.js App Router pages
│   ├── (ui)/              # UI components showcase
│   ├── (apps)/            # Integrated applications
│   │   └── (shortener)/   # URL shortener functionality
│   ├── blog/[slug]/       # Dynamic blog post pages
│   ├── api/auth/spotify/  # Spotify OAuth integration
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── sections/          # Page sections (header, skills, etc.)
│   ├── markdown/          # Markdown rendering components
│   └── ui/                # shadcn/ui components
├── config/               # Configuration files
│   ├── projects.ts       # Projects data
│   └── blog.ts           # Blog posts metadata
├── contexts/             # React context providers
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
│   ├── actions/          # Server actions
│   ├── blog.ts           # Simplist API integration
│   ├── shortener.ts      # URL shortener logic
│   └── spotify.ts        # Spotify API integration
├── public/               # Static assets
├── registry/             # shadcn/ui component registry
└── type/                 # TypeScript type definitions
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **Blog Integration**: Dynamic blog posts with markdown support via Simplist SDK
- **URL Shortener**: Integrated link shortening service with password protection and expiration
- **Real-time Music Player**: Spotify integration showing currently playing tracks
- **Component Registry**: Custom shadcn/ui component system
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Performance**: Optimized with Turbopack, Next.js 15, and image optimization
- **Accessibility**: Semantic HTML and ARIA attributes
- **Dark Theme**: Beautiful dark theme with custom CSS variables

## 📝 License

This project is open-source and available under the MIT License. Feel free to use this code as inspiration for your own projects!