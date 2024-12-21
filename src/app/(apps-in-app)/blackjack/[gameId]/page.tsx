"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BlackjackChat } from "./_components/blackjack-chat";
import { RealtimeChannel } from "@supabase/supabase-js";
import { supabase } from "@/lib/utils/db/supabase";
import { useIdentity } from "../_lib/hook/use-identity";

const Page = () => {
  const { gameId } = useParams();
  const { isHost, name } = useIdentity();
  const [players, setPlayers] = useState<string[]>([]);
  
  if (typeof gameId !== "string") throw new Error("Invalid gameId");

  const [channel, setChannel] = useState<RealtimeChannel | null>(null);

  useEffect(() => {
    const chann = supabase.channel(gameId, {
      config: {
        broadcast: {
          self: true,
        }
      }
    });

    setPlayers([name]);

    chann.on("broadcast", { event: 'blackjack-session' }, (payload: any) => {
      const { type } = payload.payload;

      if (type === "join") {
        const { name } = payload.payload;
        setPlayers((prev) => [...prev, name]);
      }

      if (type === "get-players" && isHost) {
        chann.send({ 
          type: "broadcast", 
          event: "blackjack-session", 
          payload: { type: "players", players } 
        });
      }

      if (type === "players" && !isHost) {
        const { players } = payload.payload;
        console.log("Reception des joueurs :", payload.players);

        setPlayers(players);
      }
    }).subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        console.log("Abonné au canal :", chann);
      } else {
        console.log("Statut de l'abonnement :", status);
      }
    });

    console.log("Canal initialisé :", chann);
    setChannel(chann);
    
    // Fonction de nettoyage pour se désabonner du canal
    return () => {
      chann.unsubscribe();
      setChannel(null);
    };
  }, [gameId, isHost]);

  useEffect(() => {
    if (!channel) return;
    console.log("Envoi des messages 'join' et 'get-players'");
    
    channel.send({ 
      type: "broadcast", 
      event: "blackjack-session", 
      payload: { type: "join", name } 
    });
    
    channel.send({ 
      type: "broadcast", 
      event: "blackjack-session", 
      payload: { type: "get-players" } 
    });
  }, [channel]);

  return (
    <>
      <link rel="icon" href="/_static/blackjack-icon.png" type="image/png" sizes="32x32" />

      <div className="flex items-center justify-center h-screen w-screen bg-green-900 dark:bg-green-950 relative text-white">
        <BlackjackChat gameId={gameId} />

        {channel && (
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={() => {
                console.log("Bouton 'Get Players' cliqué");
                channel.send({ 
                  type: "broadcast", 
                  event: "blackjack-session", 
                  payload: { type: "get-players" } 
                });
              }}
            >
              Get Players
            </button>
          </div>
        )}

        {isHost && (
          <div className="absolute bottom-0 right-0 p-4">
            Host - {name}
          </div>
        )}

        <div className="absolute top-0 left-0 p-4">
          {players.map((player) => (
            <div key={player}>
              {player}
              <span className="font-bold">{player === name && " (You)"}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;