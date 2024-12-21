import { Metadata, Viewport } from "next";
import { Quizz } from "./content";
import { Buttons } from "@/lib/components/buttons";

export const metadata: Metadata = {
  title: "Quizz",
  applicationName: "Gaëtan - Portfolio",
  description: "Quizz game made for fun and to test your knowledge.",
  keywords: ["quizz", "game", "fun", "knowledge"],
  openGraph: {
    title: "Quizz",
    description: "Quizz game made for fun and to test your knowledge.",
    type: "website",
    url: "https://steellgold.fr/quizz",
    siteName: "Gaëtan - Portfolio",
    images: [
      {
        url: "https://steellgold.fr/quizz-og.png",
        width: 1200,
        height: 630,
        alt: "Quizz Open Graph Image",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://steellgold.fr/quizz-og.png",
        width: 1200,
        height: 630,
        alt: "Quizz Open Graph Image",
      },
    ],
    title: "Quizz",
    description: "Quizz game made for fun and to test your knowledge.",
  }
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a"
};

const Page = () => {
  return (
    <>
      <Buttons/>

      <Quizz />
    </>
  );
}

export default Page;