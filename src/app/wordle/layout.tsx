import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { Component } from "@/lib/components/utils/component";
import { PropsWithChildren } from "react";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wordle - Guess the word",
  applicationName: "Wordle",
  description: "Wordle is a word puzzle game that tests your vocabulary and word-guessing skills. The objective of the game is to guess a five-letter word by trying different words and receiving feedback on how close you are to the correct word.",

  icons: {
    icon: [
      {
        url: "/_static/wordle-favicon.png",
        href: "/_static/wordle-favicon.png"
      }
    ]
  }
};

export const viewport: Viewport = {
  themeColor: "#e8e8e8",
};

const Layout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <body className="bg-[#1A1A1A]">
      {children}
    </body>
  );
}

export default Layout;