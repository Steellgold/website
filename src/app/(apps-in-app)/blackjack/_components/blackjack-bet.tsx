"use client";

import { Component } from "@/lib/components/utils/component";
import { cn } from "@/lib/utils";
import { useBlackjack } from "../_lib/hook/use-blackjack";
import { useLang } from "@/lib/stores/lang.store";
import { Undo } from "lucide-react";
import { ChipValue } from "../_lib/blackjack.types";
import { BlackjackCard } from "./ui/blackjack-card";
import { BlackjackButton } from "./ui/blackjack-button";

export const BlackjackBet = () => {
  const { lang } = useLang();
  const { gameStatus, bets, removeBet } = useBlackjack();

  if (gameStatus !== "BETTING") return <p className="p-4 bg-red-500">Throw error: gameStatus must be BETTING to render BlackjackBet component</p>;

  return (
    <div>
      <BlackjackCard className="flex flex-col items-center gap-2">
        <span className="text-lg">
          {lang === "fr" ? "Choix des mises" : "Betting"}
        </span>

        <div className="flex items-center gap-1.5">
          <BlackjackButton
            className="w-10 h-10 rounded-full"
            onClick={() => removeBet()}
            disabled={bets.length === 0}
          >
            <Undo size={16} />
          </BlackjackButton>

          {[1, 2, 5, 10, 25, 100].map((value) => (
            <div style={{ transform: "rotate(-10deg)" }} key={value}>
              <BlackjackChip value={value as ChipValue} key={value} mini />
            </div>
          ))}
        </div>
      </BlackjackCard>
    </div>
  );
};

type BlackjackChipProps = {
  value: ChipValue;

  mini?: boolean;

  empiled?: boolean;
  empiledTotal?: number;
};

export const BlackjackChip: Component<BlackjackChipProps> = ({ value, empiled, empiledTotal, mini }) => {
  const { balance, addBet } = useBlackjack();
  const { lang } = useLang();

  return (
    <div
      className={cn(
        "rounded-full shadow-md flex items-center justify-center select-none",
        "border-dashed border-opacity-90",
        "transition-colors duration-300 ease-in-out cursor-pointer",
        {
          // Colors
          "bg-gray-500 text-white border-gray-300": value === 1,
          "bg-pink-500 text-white border-pink-300": value === 2,
          "bg-red-500 text-white border-red-300": value === 5,
          "bg-blue-500 text-white border-blue-300": value === 10,
          "bg-green-500 text-white border-green-300": value === 25,
          "bg-black text-white border-gray-300": value === 100,

          // Sizes & Opacity
          "opacity-50": balance < value && !empiled,
          "w-10 h-10 border-4": mini,
          "w-14 h-14 border-[6px]": !mini,
        }
      )}
      onClick={() => {
        if (empiled) return;
        if (value > balance) return;
        addBet(value);
      }}
    >
      {!empiled && (
        <span className={cn("font-semibold", {
          "text-base": value > 5,
          "text-lg": value <= 5,
          "text-xs": value === 100
        })}>{value}</span>
      )}

      {empiled && empiledTotal && (
        <span className="text-xs">
          {empiledTotal}
          {lang === "fr" ? "€" : "$"}
        </span>
      )}
    </div>
  );
};

export const BlackjackBets = () => {
  const { bets } = useBlackjack();

  return (
    <div className="relative w-14 h-14">
      {bets && bets.length >= 1 ? bets.map((value, index) => (
        <div
          key={value}
          className="absolute"
          style={{
            transform: `translateY(${index * -5}px)`,
            zIndex: index,
          }}
        >
          <BlackjackChip
            value={value as ChipValue}
            empiled
            mini={false}
            empiledTotal={bets.reduce((acc, curr) => acc + curr, 0)}
          />
        </div>
      )) : (
        <div>
          <div className="w-14 h-14 rounded-full border-4 border-dashed border-gray-300 flex items-center justify-center">
            <span className="text-xs">0</span>
          </div>
        </div>
      )}
    </div>
  );
};