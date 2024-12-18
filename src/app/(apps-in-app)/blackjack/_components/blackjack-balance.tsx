"use client";

import { ReactElement, useState } from "react";
import { useBlackjack } from "../_lib/hook/use-blackjack";
import { useLang } from "@/lib/stores/lang.store";
import { Separator } from "@/lib/components/ui/separator";
import { Moon, RefreshCcw, Sun } from "lucide-react";
import { ThemeSwitcher } from "@/lib/components/theme-switcher";
import { useTheme } from "next-themes";
import { BlackjackCard } from "./ui/blackjack-card";
import { BlackjackButton } from "./ui/blackjack-button";
import { createDeck } from "../_lib/blackjack.utils";

export const BlackjackBalance = (): ReactElement => {
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLang();

  const { balance, setGameStatus } = useBlackjack();
  
  return (
    <div className="flex flex-row gap-1">
      <BlackjackCard className="flex items-center gap-2">
        <h1 className="text-lg">
          {lang === "fr" ? "Solde" : "Balance"}: {balance}{lang === "fr" ? "€" : "$"}
        </h1>

        <BlackjackButton onClick={() => setGameStatus("BALANCE_START")}>
          <RefreshCcw size={16} className="group-hover:rotate-6 transition-transform duration-300 ease-in-out" />
        </BlackjackButton>
      </BlackjackCard>

      <BlackjackButton className="bg-white bg-opacity-10 text-white rounded-md px-3 py-1 flex items-center" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <Sun size={16} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon size={16} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </BlackjackButton>

      <BlackjackButton className="bg-white bg-opacity-10 text-white rounded-md px-3 py-1" onClick={() => setLang(lang === "fr" ? "en" : "fr")}>
        {lang === "fr" ? "🇺🇸" : "🇫🇷"}
      </BlackjackButton>
    </div>
  )
}

export const BlackjackStarting = (): ReactElement => {
  const { setBalance, setGameStatus, reset, setDeck } = useBlackjack();
  const { lang } = useLang();

  const [inputValue, setInputValue] = useState<number>(0);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-green-900 relative">
      <div className="flex flex-col items-center gap-5 p-3">
        <BlackjackCard className="flex flex-col">
          <h1 className="text-lg">Blackjack</h1>
          <p className="text-sm">
            {
              lang == "fr"
                ? "Choissisez combien d'argent vous voulez ajouter sur le solde de votre compte, puis appuyez sur 'Jouer'."
                : "Choose how much money you want to add to your account balance, then press 'Play'."
            }
          </p>
          <hr className="my-2 border-white border-opacity-15" />
          <p className="text-xs">
            {
              lang == "fr"
                ? "Aucun argent réel n'est utilisé dans ce jeu, le solde est fictif et c'est vous qui le définissez."
                : "No real money is used in this game, the balance is fictional and you define it."
            }
          </p>
        </BlackjackCard>

        <div className="flex items-center gap-3">
          <input
            type="number"
            className="w-20 h-8 bg-white bg-opacity-10 text-white text-center rounded-md focus:outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(parseInt(e.target.value))}
          />

          <BlackjackButton
            className="bg-white bg-opacity-10 text-white rounded-md px-3 py-1"
            onClick={() => {
              reset();
              setDeck(createDeck())
              setBalance(inputValue);
              setGameStatus("BETTING");
            }}
          >
            {lang === "fr" ? "Jouer" : "Play"}
          </BlackjackButton>
        </div>
      </div>
    </div>
  )
}