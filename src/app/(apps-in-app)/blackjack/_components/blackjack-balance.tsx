"use client";

import { useLang } from "@/lib/stores/lang.store";
import { ReactElement, useEffect, useState } from "react";
import { useBlackjack } from "../_lib/hook/use-blackjack";
import { BlackjackCard } from "./ui/blackjack-card";
import { BlackjackButton } from "./ui/blackjack-button";
import { createDeck } from "../_lib/blackjack.utils";
import { BlackjackInput } from "./ui/blackjack-input";
import { BlackjackButtons } from "./blackjack-menu";
import { supabase } from "@/lib/utils/db/supabase";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { generateName } from "just-random-names";
import { useIdentity } from "../_lib/hook/use-identity";
import { Separator } from "@/lib/components/ui/separator";

export const BlackjackStarting = (): ReactElement => {
  const { setBalance, setGameStatus, reset, setDeck, startGameTimer } = useBlackjack();
  const { lang } = useLang();
  const { name, setIsHost, setName, hydrated } = useIdentity();

  const [newName, setNewName] = useState(name);

  useEffect(() => {
    console.log("useEffect exécuté, hydrated:", hydrated, "name actuel:", name);
    if (hydrated && name === "") {
      const newName = generateName();
      console.log("Nom généré:", newName);
      setName(newName);
    }
  }, [hydrated, name]); // Dépendances mises à jour

  const [gameCode, setGameCode] = useState("");

  const joinGame = () => {
    supabase.from("blackjack").select().eq("code", gameCode).then(({ data }) => {
      if (!data || data.length === 0) {
        toast.error(lang === "fr" ? "Aucune partie trouvée avec ce code." : "No game found with this code.");
        return;
      }

      toast.success(lang === "fr" ? "Partie trouvée, connexion en cours..." : "Game found, connecting...");
      setIsHost(false);

      setTimeout(() => {
        window.location.href = `/blackjack/${gameCode}`;
      }, 1400);
    });
  }

  const createGame = () => {
    const code = Math.random().toString(36).substring(2, 6);
    setTimeout(() => {}, 140);

    supabase.from("blackjack").insert({ code }).then(({ data, error }) => {
      if (error) {
        toast.error(lang === "fr" ? "Une erreur s'est produite lors de la création de la partie." : "An error occurred while creating the game.");
        return;
      }

      toast.loading(lang === "fr" ? "Partie créée, redirection en cours..." : "Game created, redirecting...");
      setIsHost(true);
      setName("Gaëtan");

      setTimeout(() => {
        window.location.href = `/blackjack/${code}`;
      }, 1400);
    });
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-green-900 relative p-3 sm:p-0">
      <BlackjackButtons />

      <div className="flex flex-col items-center gap-3">
        <BlackjackCard className="flex flex-col items-center gap-1 p-3 w-full">
          <h1 className="text-xl font-extrabold">Blackjack</h1>
          <p className="text-sm sm:w-[40vh] text-center">
            {lang === "fr"
              ? "Jouer contre l'ordinateur ou rejoindre une partie en ligne avec vos amis pour jouer ensemble sur la même table mais chaqu'un avec sa propre main."
              : "Play against the computer or join an online game with your friends to play together on the same table but each with their own hand."
            }
          </p>

          <hr />

          <div className="flex items-center gap-3">
            <BlackjackButton
              className="bg-white bg-opacity-10 text-white rounded-md px-3 py-1 text-sm"
              size="small"
              onClick={() => {
                reset();
                setDeck(createDeck())
                startGameTimer();
                setBalance(100);
                setGameStatus("BETTING");
              }}
            >
              {lang === "fr" ? "Jouer contre l'ordinateur" : "Play against the computer"}
            </BlackjackButton>
          </div>
        </BlackjackCard>

        <BlackjackCard className="flex flex-col sm:flex-row justify-between items-left gap-3 sm:gap-1 p-3 w-full">
          <div className="flex flex-col gap-0.5">
            <h1 className="text-lg">{lang === "fr" ? "Rejoindre une table" : "Join a table"}</h1>
            <span className="text-xs sm:w-[25vh]">
              {lang === "fr"
                ? "Demandez le code de la partie à un ami pour le rejoindre sur la même table."
                : "Ask your friend for the game code to join them on the same table."}
              </span>
          </div>

          <div className="flex items-center justify-end gap-1">
            <BlackjackInput placeholder="Code de table" className="sm:w-32" inputSize="small" value={gameCode} onChange={(e) => setGameCode(e.target.value)} />
            <BlackjackButton className="text-sm" size="small" onClick={joinGame}>
              {lang === "fr" ? "Rejoindre" : "Join"}
            </BlackjackButton>
          </div>
        </BlackjackCard>

        <BlackjackCard className="flex flex-row justify-between items-left gap-1 p-3 w-full">
          <div className="flex flex-col gap-0.5">
            <h1 className="text-lg">{lang === "fr" ? "Créer une table" : "Create a table"}</h1>
            <span className="text-xs w-[25vh]">
              {lang === "fr"
                ? "Créez une table pour que vos amis puissent vous rejoindre en utilisant le code de la partie."
                : "Create a table for your friends to join you using the game code."}
              </span>
          </div>

          <div className="flex items-center gap-1">
            <BlackjackButton className="text-sm" size="small" onClick={createGame}>
              {lang === "fr" ? "Nouvelle partie" : "New game"}
            </BlackjackButton>
          </div>
        </BlackjackCard>

        <BlackjackCard className="flex flex-row justify-between items-left gap-1 p-3 w-full">
          <div className="flex flex-col gap-0.5">
            <h1 className="text-lg">{lang === "fr" ? "Changer de nom" : "Change name"}</h1>
            <span className="text-xs w-[25vh]">
              {lang === "fr"
                ? "Vous pouvez changer votre nom avant de rejoindre une partie."
                : "You can change your name before joining a game."}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <BlackjackInput
              placeholder="Nom"
              className="sm:w-36"
              inputSize="small"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />

            <BlackjackButton className="text-sm" size="small" onClick={() => {
              setName(newName);
              toast.success(lang === "fr" ? "Nom changé avec succès." : "Name changed successfully.");
            }}>
              {lang === "fr" ? "Changer" : "Change"}
            </BlackjackButton>
          </div>
        </BlackjackCard>
      </div>

      <p className={cn(
        "absolute bottom-5 left-5 text-xs text-white",
        "transition-opacity duration-300 ease-in-out",
        "opacity-50 hover:opacity-100"
      )}>
        * Balance fictive, aucune mise ou gain réel n'est effectué.
      </p>
    </div>
  )
}