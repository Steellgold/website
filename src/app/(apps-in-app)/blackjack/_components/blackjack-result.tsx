"use client";

import { confettiBasic } from "@/lib/components/confetti";
import { useLang } from "@/lib/stores/lang.store";
import { useBlackjack } from "../_lib/hook/use-blackjack";
import { ReactElement } from "react";
import { BlackjackCard, BlackjackCardVariant } from "./ui/blackjack-card";

export const BlackjackResult = (): ReactElement => {
  const { gameStatus, bet, croupierCards, playerCards } = useBlackjack();
  const { lang } = useLang();

  if (gameStatus === "PLAYER_WIN") confettiBasic();

  if (
    gameStatus === "DEALER_WIN" ||
    gameStatus === "PLAYER_WIN" ||
    gameStatus === "DEALER_BUST" ||
    gameStatus === "PLAYER_BUST" ||
    gameStatus === "DOUBLE_BUST" ||
    gameStatus === "DRAW"
  ) {
    let variant: BlackjackCardVariant = "default";
    let title = "";
    let message = "";

    switch (gameStatus) {
      case "DEALER_WIN":
        variant = "destructive";
        title = lang === "fr" ? "Le croupier gagne" : "Dealer wins";
        message = `${lang === "fr" ? "Vous perdez votre mise de" : "You lose your bet of"} ${bet}${lang === "fr" ? "€" : "$"}`;
        break;
      case "PLAYER_WIN":
        variant = "success";
        title = lang === "fr" ? "Le joueur gagne" : "Player wins";
        message = `${lang === "fr" ? "Vous gagnez" : "You win"} ${bet * 2}${lang === "fr" ? "€" : "$"}`;
        break;
      case "DEALER_BUST":
        variant = "success";
        title = lang === "fr" ? "Le croupier dépasse 21" : "Dealer busts";
        message = `${lang === "fr" ? "Vous gagnez" : "You win"} ${bet * 2}${lang === "fr" ? "€" : "$"}`;
        break;
      case "PLAYER_BUST":
        variant = "destructive";
        title = lang === "fr" ? "Vous dépassez 21" : "You bust";
        message = `${lang === "fr" ? "Vous perdez votre mise de" : "You lose your bet of"} ${bet}${lang === "fr" ? "€" : "$"}`;
        break;
      case "DOUBLE_BUST":
        variant = "warning";
        title = "ALL BUSTED";
        message = "No winner";
        break;
      case "DRAW":
        variant = "warning";
        title = lang === "fr" ? "Égalité" : "Draw";
        message = `${lang === "fr" ? "Vous récupérez votre mise de" : "You get back your bet of"} ${bet}${lang === "fr" ? "€" : "$"}`;
        break;
      default:
        break;
    }

    return (
      <BlackjackCard
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        variant={variant ?? "default"}
      >
        <div className="flex flex-col items-center gap-1.5">
          <h1 className={`text-2xl ${variant === "success" ? "text-green-500" : variant === "destructive" ? "text-red-500" : "text-yellow-500"}`}>
            {title}
          </h1>
          <p>{message}</p>
        </div>
      </BlackjackCard>
    );
  }

  return <></>;
};