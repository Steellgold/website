"use client";

import { useLang } from "@/lib/stores/lang.store";
import { useBlackjack } from "../_lib/hook/use-blackjack";
import { BlackjackCard } from "./blackjack-card";
import { BlackjackCard as UIBlackjackCard } from "./ui/blackjack-card";

export const BlackjackDeck = () => {
  const { deck } = useBlackjack();
  const { lang } = useLang();

  return (
    <UIBlackjackCard className="absolute top-1/2 transform -translate-y-1/2 right-5">
      <div className="relative w-24 h-36 rounded-md">
        {deck.length >= 1 ? deck.map((card, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              transform: `translateY(${index * - 3.5}px)`,
              zIndex: index,
            }}
          >
            <BlackjackCard rank={card.rank} suit={card.suit} isHidden />    
          </div>
        )) : (
          <div className="select-none">
            <span>
              {lang === "fr" ? "Talon vide" : "Empty deck"}
            </span>
          </div>
        )}
      </div>
    </UIBlackjackCard>
  );
}