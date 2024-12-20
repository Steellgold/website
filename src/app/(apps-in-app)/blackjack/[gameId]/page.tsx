"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

const MultiplayerBlackjackPage = () => {
  const { gameId } = useParams();

  useEffect(() => {
    // TODO
  }, []);

  return (
    <div>
      <h1>Multiplayer Blackjack</h1>
      <p>Game ID: {gameId}</p>
    </div>
  );
};

export default MultiplayerBlackjackPage;