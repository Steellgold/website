import { cn } from "@/lib/utils";
import { Club, Diamond, Heart, Spade } from "lucide-react";
import { ReactElement } from "react";

type Suit = "Hearts" | "Diamonds" | "Clubs" | "Spades";
type Rank = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";
// https://www.brugo.be/wp-content/uploads/2023/10/valeur-des-cartes.png


type Card = {
  suit: Suit;
  rank: Rank;
  isHidden: boolean;
}

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

export const BlackjackCard = ({ suit, rank, isHidden }: Card): ReactElement => {

  return (
    <div className={cn("relative bg-[#f5f7f6] w-24 h-36 rounded-md shadow-md", {
      "bg-blue-50 border-blue-100 border-2": isHidden
    })}>
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
      {isHidden
        ?
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="text-4xl text-blue-200">?</span>
          </div>
        : <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {suitToIcon(suit)}
          </div>
      }
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