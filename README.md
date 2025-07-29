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
- **APIs**: Integration with Simplist for blog content management

## 🔧 API Integrations and Environment Variables

The project uses the Simplist API to fetch and display blog posts. Here's the required environment variable:

```plaintext
NEXT_PUBLIC_SIMPLIST_API_KEY=<Your Simplist API Key>
```

### Integration Description

- **Simplist**: A blogging service that provides an API to retrieve blog articles. The website fetches blog posts from Simplist and displays them with proper markdown rendering. For more information, visit [Simplist](https://simplist.blog/).

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
NEXT_PUBLIC_SIMPLIST_API_KEY=your_simplist_api_key_here
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
│   ├── blog/[slug]/       # Dynamic blog post pages
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── sections/          # Page sections (header, skills, etc.)
│   └── markdown/          # Markdown rendering components
├── config/               # Configuration files
│   ├── projects.ts       # Projects data
│   └── blog.ts           # Blog posts metadata
├── contexts/             # React context providers
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
└── type/                 # TypeScript type definitions
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Blog Integration**: Dynamic blog posts with markdown support
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Performance**: Optimized images, fonts, and bundle size
- **Accessibility**: Semantic HTML and ARIA attributes
- **Dark Theme**: Beautiful dark theme with custom CSS variables

## 📝 License

This project is private and proprietary. All rights reserved.
