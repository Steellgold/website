import { ReactElement } from "react";
import { BlackjackBoard } from "./_components/blackjack-board";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Blackjack",
  applicationName: "Gaëtan - Portfolio",
  description: "A card game (Blackjack) made for fun that can be played solo or multiplayer (multiple players with their own deck).",
  keywords: ["card", "game", "blackjack", "multiplayer", "solo", "fun", "Gaëtan", "Portfolio"],
  openGraph: {
    title: "Blackjack",
    description: "A card game (Blackjack) made for fun that can be played solo or multiplayer (multiple players with their own deck).",
    type: "website",
    url: "https://preview.steellgold.fr/blackjack",
    siteName: "Gaëtan - Portfolio",
    images: [
      {
        url: "https://preview.steellgold.fr/blackjack-og.png",
        width: 1200,
        height: 630,
        alt: "Blackjack Open Graph Image",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://preview.steellgold.fr/blackjack-og.png",
        width: 1200,
        height: 630,
        alt: "Blackjack Open Graph Image",
      },
    ],
    title: "Blackjack",
    description: "A card game (Blackjack) made for fun that can be played solo or multiplayer (multiple players with their own deck).",
  }
};

export const viewport: Viewport = {
  themeColor: "#17552f"
};

const Page = (): ReactElement => {
  return (
    <>
      <link rel="icon" href="/_static/blackjack-icon.png" type="image/png" sizes="32x32" />

      <div className="text-white">
        <BlackjackBoard />
      </div>
    </>
  )
}

export default Page;