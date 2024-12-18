import { cn } from "@/lib/utils";
import { Club, Diamond, Heart, Spade } from "lucide-react";
import { ReactElement } from "react";
import { Card, Suit } from "../_lib/blackjack.types";

const suitToIcon = (suit: Suit): ReactElement => {
  switch (suit) {
    case "Hearts":
      return <Heart size={16} stroke="#e04f4f" fill="#e04f4f" />;
    case "Diamonds":
      return <Diamond size={16} stroke="#e04f4f" fill="#e04f4f" />;
    case "Clubs":
      return <Club size={16} stroke="#000" fill="#000" />;
    case "Spades":
      return <Spade size={16} stroke="#000" fill="#000" />;
  }
}

export const BlackjackCard = ({ suit, rank, isHidden, isStackedLast, owner = "PLAYER" }: Card): ReactElement => {

  return (
    <div className={
      cn(
        "relative bg-[#f5f7f6] w-24 h-36 rounded-md", {
          "shadow-md": !isHidden,
          "bg-blue-50 border-blue-100 border-2 transition-transform duration-300 ease-in-out": isHidden,
          "transition-transform duration-300 ease-in-out": !isStackedLast && !isHidden,
          
          "hover:translate-y-[-5rem] hover:-rotate-12": !isStackedLast && !isHidden && owner === "PLAYER",
          "hover:translate-y-[5rem] hover:rotate-12": !isStackedLast && !isHidden && owner === "DEALER",
        }
    )}>
      {rank && !isHidden &&
        <div className={cn({
          "text-[#e04f4f]": ["Hearts", "Diamonds"].includes(suit),
          "text-black": ["Clubs", "Spades"].includes(suit)          
        })}>
          {/* TOP LEFT */}
          <span className="absolute top-0 left-0 p-1.5 font-bold">{rank}</span>
          {/* BOTTOM RIGHT */}
          <span className="absolute bottom-0 right-0 p-1.5 font-bold">{rank}</span>
        </div>
      }

      {/* CENTERED */}
      {isHidden ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1.5">
          <div className="flex flex-row gap-1.5">
            <Heart size={16} stroke="#bfdbfe" fill="#bfdbfe" />
            <Spade size={16} stroke="#a2bcdb" fill="#a2bcdb" />
          </div>

          <div className="flex flex-row gap-1.5">
            <Club size={16} stroke="#a2bcdb" fill="#a2bcdb" />
            <Diamond size={16} stroke="#bfdbfe" fill="#bfdbfe" />
          </div>
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {suitToIcon(suit)}
        </div>
      )}
    </div>
  )
}

export const BlackjackCardsStack = ({ cards }: { cards: Card[] }): ReactElement => {
  if (cards.length === 0) {
    return <EmptyBlackjackCard />
  }

  return (
    <div className="w-24 h-36 group">
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            zIndex: index,
            marginLeft: `${index * (3 * 0.80)}rem`,
          }}
          className="absolute"
        >
          <BlackjackCard {...card} isStacked={true} isStackedLast={index === cards.length - 1 ? index : undefined} />
        </div>
      ))}
    </div>
  )
}

export const EmptyBlackjackCard = (): ReactElement => {
  return (
    <div className={cn("relative border-2 border-dashed border-[#f5f7f6] w-24 h-36 rounded-md shadow-md")}>
      <div className="select-none">&nbsp;</div>
    </div>
  )
}