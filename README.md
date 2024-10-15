# Portfolio Website

This repository contains the source code for my personal portfolio website, developed with Next.js and TypeScript. This site showcases my development skills through interactive components, responsive design, and integrations with multiple APIs and libraries.

## 📚 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - for building React applications.
- **Language**: [TypeScript](https://www.typescriptlang.org/) - for static typing and better maintainability.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - utility CSS framework with custom configurations.
- **State Management**: [Zustand](https://zustand.surge.sh/) - for lightweight and scalable state management.
- **UI Components**: Radix UI for accessible and customizable interface elements.
- **APIs**: Integration with external services like Spotify, Simplist, OpenAI, and Upstash for various features.

## 🔧 API Integrations and Environment Keys

The project uses several APIs to enrich the site with dynamic content and custom features. Here are the required environment variables, which you need to configure in an environment variable file:

```plaintext
SPOTIFY_CLIENT_ID=<Your Spotify Client ID>
SPOTIFY_CLIENT_SECRET=<Your Spotify Client Secret>
SPOTIFY_REFRESH_TOKEN=<Your Spotify Refresh Token>
SIMPLIST_API_KEY=<Your Simplist API Key>
OPENAI_API_KEY=<Your OpenAI API Key>
UPSTASH_REDIS_REST_TOKEN=<Your Upstash Redis Token>
```

### Integration Descriptions

- **Spotify API**: Allows displaying the currently playing music for a personal and dynamic touch.
- **Simplist**: A blogging service that lets me post and retrieve blog articles via their API. For more information, visit [Simplist](https://simplist.blog/).
- **OpenAI**: Integrated for an interactive chatbot, using OpenAI to generate automated responses.
- **Upstash**: Used for rate limiting and server-side Redis data management, ensuring optimal performance.

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

3. Configure the environment variables in `.env` as indicated above.

4. Start the development server:

```bash
pnpm dev
```

5. Access the site locally at `http://localhost:3000`.