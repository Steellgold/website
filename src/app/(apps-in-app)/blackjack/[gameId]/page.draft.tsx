"use client";

import { supabase } from "@/lib/utils/db/supabase";
import { RealtimeChannel } from "@supabase/supabase-js";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const MultiplayerBlackjackPage = () => {
  const { gameId } = useParams();

  const [messages, setMessages] = useState([]);

  const [message, setMessage] = useState("");

  const [channel, setChannel] = useState<RealtimeChannel | null>(null);

  useEffect(() => {
    const chann = supabase.channel(`room-1`, {
      config: {
        broadcast: { self: true }
      }
    });

    chann.on("broadcast", { event: 'test' }, (payload) => console.log("received", payload)).subscribe();

    console.log("Channel:", chann);
    setChannel(chann);
  }, []);

  return (
    <div>
      <h1>Multiplayer Blackjack</h1>
      <p>Game ID: {gameId}</p>

      <hr />

      <input type="text" placeholder="Enter message" value={message} onChange={(e) => setMessage(e.target.value)} />

      <button onClick={() => {
        channel?.send({ event: "test", payload: message, type: "broadcast" });
      }}>Send Hello World</button>

      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};

export default MultiplayerBlackjackPage;