<!-- Banner: 1797x266, replace with the provided image -->
<img width="1797" height="266" alt="Gaëtan Huszovits" src="./.github/assets/readme-banner.png" />

This repository contains the source code for my personal portfolio website (2026 edition), developed with Next.js 16 and TypeScript. This site showcases my development skills through interactive components, responsive design, and modern web technologies.

## 📚 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework with App Router and Turbopack
- **Language**: [TypeScript](https://www.typescriptlang.org/) - for static typing and better maintainability
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - utility CSS framework with custom configurations
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - accessible and customizable interface elements
- **Icons**: [Remix Icon](https://remixicon.com/) - open-source icon library
- **i18n**: [next-intl](https://next-intl.dev/) - FR/EN internationalization
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) - light/dark mode (press `d` to toggle)
- **Markdown**: [React Markdown](https://github.com/remarkjs/react-markdown) - for blog content rendering
- **Blogging**: [Simplist SDK](https://simplist.blog/) - for fetching and displaying blog articles

## 🔧 Environment Variables

```plaintext
# Optional - blog section is hidden if not set
SIMPLIST_API_KEY=<Your Simplist API Key>
```

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

3. Configure the environment variables in `.env.local` (see `.env.example`).

4. Start the development server:

```bash
pnpm dev
```

5. Access the site locally at `http://localhost:3000`.

## 🏗️ Build and Deploy

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
new-website/
├── app/                    # Next.js App Router pages
│   ├── posts/[slug]/      # Blog article pages
│   ├── projects/          # Full projects list
│   ├── gallery/           # Photo gallery
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/             # Reusable React components
│   ├── sections/          # Page sections (header, technologies, etc.)
│   └── ui/                # shadcn/ui components
├── config/                # Configuration files (projects, skills, gallery)
├── lib/                   # Utility functions and integrations
│   ├── blog.ts            # Simplist API integration
│   ├── env.ts             # Environment variable validation
│   └── pet-age.ts         # Gallery age/lifespan helpers
├── messages/              # FR/EN translation strings
└── public/                # Static assets
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **Light & Dark Theme**: Toggle with the `d` keyboard shortcut
- **Blog Integration**: Dynamic blog posts with markdown rendering via Simplist SDK
- **Freelance Section**: Services offered, availability, and direct contact
- **Photo Gallery**: Lightbox with keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 📝 License

This project is open-source and available under the [MIT License](./LICENSE). Feel free to use this code as inspiration for your own projects!
