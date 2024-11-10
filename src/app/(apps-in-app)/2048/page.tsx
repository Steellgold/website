import { Metadata, Viewport } from "next";
import { Content2048Page } from "./content";

export const metadata: Metadata = {
  title: "2048 | Gaëtan's Portfolio",
  applicationName: "Gaëtan's Portfolio",
  description: "2048 game made for Melvynx's challenge.",
  keywords: ["2048", "game", "challenge", "melvynx", "Melvyn", "Malherbe", "melvyn"],
  openGraph: {
    title: "2048 | Gaëtan's Portfolio",
    description: "2048 game made for Melvynx's challenge.",
    type: "website",
    url: "https://steellgold.fr/2048",
    siteName: "2048 | Gaëtan's Portfolio",
    images: [
      {
        url: "https://steellgold.fr/2048-og.png",
        width: 1200,
        height: 630,
        alt: "Gaëtan's Portfolio",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://steellgold.fr/2048-og.png",
        width: 1200,
        height: 630,
        alt: "Gaëtan's Portfolio",
      },
    ],
    title: "2048 | Gaëtan's Portfolio",
    description: "2048 game made for Melvynx's challenge."
  }
};

export const viewport: Viewport = {
  themeColor: "#111827"
};

const Page = () => {
  return <Content2048Page />
}

export default Page;