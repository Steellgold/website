import { Metadata, Viewport } from "next";
import { Quizz } from "./content";
import { Buttons } from "@/lib/components/buttons";

export const metadata: Metadata = {
  title: "Quizz | Gaëtan's Portfolio",
  applicationName: "Gaëtan's Portfolio",
  description: "Quizz game made for fun and to test your knowledge.",
  keywords: ["quizz", "game", "fun", "knowledge"],
  openGraph: {
    title: "Quizz | Gaëtan's Portfolio",
    description: "Quizz game made for fun and to test your knowledge.",
    type: "website",
    url: "https://steellgold.fr/quizz",
    siteName: "Quizz | Gaëtan's Portfolio",
    images: [
      {
        url: "https://steellgold.fr/quizz-og.png",
        width: 1200,
        height: 630,
        alt: "Gaëtan's Portfolio",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://steellgold.fr/quizz-og.png",
        width: 1200,
        height: 630,
        alt: "Gaëtan's Portfolio",
      },
    ],
    title: "Quizz | Gaëtan's Portfolio",
    description: "Quizz game made for fun and to test your knowledge.",
  }
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a"
};

const Page = () => {
  return (
    <>
      <Buttons showTopButton={false} />
      <Quizz />
    </>
  );
}

export default Page;