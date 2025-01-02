"use client";

import { ReactElement, useState } from "react";
import { useLang } from "@/lib/hooks/use-lang";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { BlackjackButton } from "./ui/blackjack-button";
import { useBlackjack } from "../_lib/hook/use-blackjack";
import { cn } from "@/lib/utils";

export const BlackjackButtons = (): ReactElement => {
  const { theme, setTheme } = useTheme();
  const lang = useLang();

  const { setGameStatus, gameStatus } = useBlackjack();

  return (
    <>
      <BlackjackButton
        className={cn("absolute top-5 left-5", {
          "hidden": gameStatus === "BALANCE_START"
        })}
        onClick={() => setGameStatus("BALANCE_START")}
      >
        <ArrowLeft size={16} className="mr-1" />
        {lang === "fr" ? "Retour au menu" : "Back to menu"}
      </BlackjackButton>

      <div className="flex flex-col sm:flex-row gap-1 absolute top-5 right-5">
        <BlackjackButton className="justify-center bg-white bg-opacity-10 text-white rounded-md px-3 py-2 flex items-center" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Sun size={16} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon size={16} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </BlackjackButton>
      </div>
    </>
  )
}