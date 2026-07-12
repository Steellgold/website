export type ProjectStatus = "Open-Source" | "Freelance" | "Private" | "In Progress" | "Refactoring" | "Miscellaneous";
export type ProjectCategory = "active" | "finished";

export type ProjectImage = string | { src: string; alt?: { en: string; fr: string } };

export type Project = {
  name: string;
  description: { en: string; fr: string };
  technologies: string[];
  status: ProjectStatus;
  category: ProjectCategory;
  featured?: boolean;
  timelineDate: string;
  url: string;
  githubUrl?: string;
  chromeWebStoreUrl?: string;
  npmUrl?: string;
  images?: ProjectImage[];
  awards?: string[];
  contributors?: { name: string; url: string }[];
};

export const PROJECTS: Project[] = [
  {
    name: "Simplist",
    description: {
      en: "A blog platform with content management, allowing users to publish articles and access them via API.",
      fr: "Une plateforme de blog avec gestion de contenu, permettant aux utilisateurs de publier des articles et d'y accéder via une API.",
    },
    technologies: ["React", "Next.js", "Turborepo", "Tailwind CSS", "shadcn/ui", "AWS", "Vercel", "TypeScript", "Upstash", "Stripe", "Better Auth"],
    status: "Open-Source",
    category: "active",
    featured: true,
    timelineDate: "2024",
    githubUrl: "https://github.com/Steellgold/simplist.blog",
    npmUrl: "https://www.npmjs.com/package/@simplist.blog/sdk",
    images: [
      {
        src: "https://cdn.gaetanhus.fr/assets/projects_images/simplist.png",
        alt: {
          en: "Simplist landing page with the headless CMS pitch and a TypeScript SDK code example.",
          fr: "Page d'accueil de Simplist avec l'accroche du CMS headless et un exemple de code du SDK TypeScript.",
        },
      },
      {
        src: "https://cdn.gaetanhus.fr/portfolio-preview-images/simplist-2.png",
        alt: {
          en: "Simplist dashboard with quick actions to create an article, generate API keys or view analytics.",
          fr: "Tableau de bord Simplist avec les actions rapides pour créer un article, générer des clés API ou consulter les analytics.",
        },
      },
      {
        src: "https://cdn.gaetanhus.fr/portfolio-preview-images/simplist-3.png",
        alt: {
          en: "Articles list showing a published post with its status, language variant and analytics.",
          fr: "Liste des articles avec le statut, la variante de langue et les analytics d'un article publié.",
        },
      },
      {
        src: "https://cdn.gaetanhus.fr/portfolio-preview-images/simplist-4.png",
        alt: {
          en: "Analytics page tracking views, unique visitors, average time and engagement rate over time.",
          fr: "Page analytics suivant les vues, visiteurs uniques, temps moyen et taux d'engagement dans le temps.",
        },
      },
    ],
    url: "https://simplist.blog",
  },
  {
    name: "Nowly",
    description: {
      en: "Nowly automatically displays what you're watching online in your Discord Rich Presence status via a browser extension: title, channel, progress, and clickable buttons.",
      fr: "La façon la plus simple d'afficher automatiquement ce que vous regardez. Séries, films ou streams, votre statut Discord reste toujours à jour.",
    },
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Fastify", "PostgreSQL", "Zod"],
    status: "Open-Source",
    category: "active",
    timelineDate: "2025",
    githubUrl: "https://github.com/nowly-presence/nowly",
    chromeWebStoreUrl: "https://chromewebstore.google.com/detail/nowly/kmnlnfldimgneaopdihplkebobckcjpf",
    images: [
      {
        src: "https://cdn.gaetanhus.fr/assets/projects_images/nowly.png",
        alt: {
          en: "Nowly landing page: Discord Rich Presence synced automatically with what you're watching.",
          fr: "Page d'accueil de Nowly : statut Discord synchronisé automatiquement avec ce que vous regardez.",
        },
      },
      {
        src: "https://cdn.gaetanhus.fr/portfolio-preview-images/nowly-2.png",
        alt: {
          en: "Nowly's browser extension popup showing a real Discord activity while browsing GitHub.",
          fr: "Popup de l'extension navigateur Nowly affichant une activité Discord réelle en navigant sur GitHub.",
        },
      },
      {
        src: "https://cdn.gaetanhus.fr/portfolio-preview-images/nowly-3.png",
        alt: {
          en: "Compatible platforms section listing supported streaming services and tool integrations.",
          fr: "Section des plateformes compatibles listant les services de streaming et outils pris en charge.",
        },
      },
      {
        src: "https://cdn.gaetanhus.fr/portfolio-preview-images/nowly-4.png",
        alt: {
          en: "Full library of compatible platforms, searchable and filterable by category.",
          fr: "Bibliothèque complète des plateformes compatibles, filtrable par catégorie.",
        },
      },
      {
        src: "https://cdn.gaetanhus.fr/portfolio-preview-images/nowly-5.png",
        alt: {
          en: "Platform detail page for Paramount+, listing features, contributors and compatible URLs.",
          fr: "Page détail de la plateforme Paramount+, avec fonctionnalités, contributeurs et URLs compatibles.",
        },
      },
    ],
    url: "https://nowly.me/",
    contributors: [{ name: "q-kimi", url: "https://github.com/q-kimi" }],
  },
  {
    name: "Imagine",
    description: {
      en: "An AI-powered interactive storytelling platform where players shape their adventure through choices, visuals, and dynamic outcomes.",
      fr: "Une plateforme de narration interactive alimentée par l'IA où les joueurs façonnent leur aventure à travers des choix, des visuels et des résultats dynamiques.",
    },
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel", "shadcn/ui", "Supabase", "Prisma", "OpenAI"],
    status: "Open-Source",
    category: "finished",
    timelineDate: "2024",
    githubUrl: "https://github.com/Steellgold/imagine.place",
    images: [
      {
        src: "https://cdn.gaetanhus.fr/assets/projects_images/imagine.png",
        alt: {
          en: "Imagine's story prompt screen, where players describe the adventure they want to shape.",
          fr: "Écran de saisie d'Imagine, où les joueurs décrivent l'aventure qu'ils veulent façonner.",
        },
      },
    ],
    url: "https://github.com/Steellgold/imagine.place",
    awards: ["https://x.com/supabase/status/1909552551206560004"],
  },
  {
    name: "Tweeets",
    description: {
      en: "A tweet generator with AI, emotions, tones and other features.",
      fr: "Un générateur de tweets avec IA, émotions, tons et autres fonctionnalités.",
    },
    technologies: ["TypeScript", "Next.js", "OpenAI", "Tailwind CSS", "Vercel", "Prisma", "PostgreSQL", "Supabase", "Stripe", "shadcn/ui"],
    status: "Open-Source",
    category: "finished",
    timelineDate: "2023",
    githubUrl: "https://github.com/Steellgold/tweeets",
    images: [
      {
        src: "https://cdn.gaetanhus.fr/assets/projects_images/tweeets.png",
        alt: {
          en: "Tweeets tweet generator form with sentiment, tone and audience settings.",
          fr: "Formulaire du générateur de tweets Tweeets avec réglages de sentiment, ton et audience.",
        },
      },
      {
        src: "https://cdn.gaetanhus.fr/portfolio-preview-images/tweeets-2.webp",
        alt: {
          en: "A generated tweet, translated into another language and ready to copy or share.",
          fr: "Un tweet généré, traduit dans une autre langue et prêt à copier ou partager.",
        },
      },
      {
        src: "https://cdn.gaetanhus.fr/portfolio-preview-images/tweeets-3.webp",
        alt: {
          en: "Tweeets hero title: tweet like a pro.",
          fr: "Titre d'accueil de Tweeets : tweetez comme un pro.",
        },
      },
    ],
    url: "https://github.com/Steellgold/tweeets",
    awards: ["https://supabase.com/blog/launch-week-8-hackathon-winners#best-use-of-ai"],
  },
  {
    name: "Supa Clicker",
    description: {
      en: "An addictive incremental clicker game with prestige system, achievements, and real-time leaderboard.",
      fr: "Un jeu de clicker incrémental addictif avec système de prestige, succès et classement en temps réel.",
    },
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Supabase", "Vercel", "shadcn/ui"],
    status: "Open-Source",
    category: "finished",
    timelineDate: "2025",
    githubUrl: "https://github.com/Steellgold/supaclicker",
    images: [
      {
        src: "https://cdn.gaetanhus.fr/assets/projects_images/supaclicker.png",
        alt: {
          en: "Supa Clicker's main screen with the click counter, upgrades shop and click stats.",
          fr: "Écran principal de Supa Clicker avec le compteur de clics, la boutique d'améliorations et les statistiques.",
        },
      },
      {
        src: "https://cdn.gaetanhus.fr/portfolio-preview-images/supaclicker-2.png",
        alt: {
          en: "Achievements modal tracking unlocked and locked progress.",
          fr: "Fenêtre des succès suivant la progression débloquée et verrouillée.",
        },
      },
    ],
    url: "https://supaclicker.vercel.app",
    awards: ["https://supabase.com/blog/lw15-hackathon-winners#winner-2"],
  },
  {
    name: "Douceurs du Palais",
    description: {
      en: "E-commerce platform for a bakery, with Stripe checkout and a loyalty program. University project.",
      fr: "Plateforme e-commerce pour une boulangerie, avec paiement Stripe et programme de fidélité. Projet universitaire.",
    },
    technologies: ["Tailwind CSS", "PHP", "Symfony", "Twig", "Webpack", "Stripe", "Docker"],
    status: "Miscellaneous",
    category: "finished",
    timelineDate: "2023",
    githubUrl: "https://github.com/Steellgold/douceurs-palais",
    images: [
      {
        src: "https://cdn.gaetanhus.fr/assets/projects_images/palais.png",
        alt: {
          en: "Douceurs du Palais homepage with the hero banner and popular products.",
          fr: "Page d'accueil de Douceurs du Palais avec la bannière d'accueil et les produits populaires.",
        },
      },
      {
        src: "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-0.png",
        alt: {
          en: "A little side project perk: an 'Aux Douceurs du Palais' branded cap.",
          fr: "Un petit bonus du projet : une casquette à l'effigie d'Aux Douceurs du Palais.",
        },
      },
      {
        src: "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-5.png",
        alt: {
          en: "Product categories: breads, pastries, sandwiches, snacks, viennoiseries and drinks.",
          fr: "Catégories de produits : pains, pâtisseries, sandwiches, snacks, viennoiseries et boissons.",
        },
      },
      {
        src: "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-10.png",
        alt: {
          en: "Product detail page for a Schneckekueche, with photos, ingredients and an add-to-cart button.",
          fr: "Page détail d'un Schneckekueche, avec photos, ingrédients et ajout au panier.",
        },
      },
      {
        src: "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-16.png",
        alt: {
          en: "Loyalty program page where points earned on orders can be exchanged for products.",
          fr: "Page du programme de fidélité où les points gagnés sur les commandes s'échangent contre des produits.",
        },
      },
      {
        src: "https://cdn.gaetanhus.fr/portfolio-preview-images/palais-17.png",
        alt: {
          en: "Cart page showing a product redeemed for free with loyalty points.",
          fr: "Page panier montrant un produit obtenu gratuitement avec des points de fidélité.",
        },
      },
    ],
    url: "https://github.com/Steellgold/douceurs-palais",
  },
];