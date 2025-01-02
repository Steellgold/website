"use client";

import { useLang } from "@/lib/hooks/use-lang";
import { useBlackjack } from "../_lib/hook/use-blackjack";
import { BlackjackCard } from "./blackjack-card";
import { BlackjackCard as UIBlackjackCard } from "./ui/blackjack-card";
import { useState } from "react";

export const BlackjackDeck = () => {
  const { deck } = useBlackjack();
  const lang = useLang();

  const [isHover, setIsHover] = useState(false);

  return (
    <UIBlackjackCard className="hidden sm:block absolute top-1/2 transform -translate-y-1/2 right-5">
      <div
        className="relative w-24 h-36 rounded-md"
        onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        {deck.length >= 1 ? deck.map((card, index) => (
          <div
            key={index}
            className="absolute transition-transform duration-300 ease-in-out"
            style={{
              transform: isHover ? `translateY(${index * - 3.5}px)` : `translateY(${index * - 1}px)`,
              zIndex: index,
            }}
          >
            <BlackjackCard rank={card.rank} suit={card.suit} isHidden isReloadCard={card.isReloadCard} />
          </div>
        )) : (
          <div className="select-none">
            <span>
              {lang === "fr" ? "Talon vide" : "Empty deck"}
            </span>
          </div>
        )}
      </div>

      {/* <p className="absolute bottom-0 right-0 text-xs text-gray-400">
        {deck.length} {lang === "fr" ? "cartes" : "cards"}
      </p> */}
    </UIBlackjackCard>
  );
}