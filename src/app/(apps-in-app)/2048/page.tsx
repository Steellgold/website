"use client";

import { E2048_Board } from "@/lib/components/2048/board";
import { E2048_GameInfo } from "@/lib/components/2048/game-info";
import { E2048_History } from "@/lib/components/2048/history";
import { E2048_StartButton } from "@/lib/components/2048/start-button";
import { E2048_StatsCard } from "@/lib/components/2048/stat-card";
import { E2048_TopButtons } from "@/lib/components/2048/top-buttons";
import { Button } from "@/lib/components/ui/button";
import { Separator } from "@/lib/components/ui/separator";
import { cn } from "@/lib/utils";
import { Book, BookX, Undo } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [showGameInfo, setShowGameInfo] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#faf8f0] dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <E2048_TopButtons />
      <E2048_StatsCard />

      <div className="flex-grow flex flex-col items-center justify-center -mt-12 sm:-mt-24 md:-mt-36">
        <div className="relative flex flex-row gap-2">
          <div className={cn(
            "p-3 rounded-lg bg-[#e4e0d1] dark:bg-gray-800 shadow-lg select-none transition-colors duration-100", {
              // "border-2 border-[#000001]/30 dark:border-gray-600": gameHovered,
            }
          )}>
            <E2048_Board />
          </div>

          {showGameInfo && <E2048_GameInfo />}
        </div>
      </div>

      <div className={cn(
        "fixed bottom-0 left-0 right-0 flex justify-center items-center p-4 transition-opacity duration-100", {
          // "opacity-5": gameHovered
        }
      )}>
        <div className="flex flex-row items-center justify-center gap-2 bg-[#e4e0d1] dark:bg-gray-800 p-2 rounded-xl shadow-lg">
          <E2048_StartButton />

          <Separator orientation="vertical" className="bg-white/10 h-8" />
            
          <E2048_History />
          
          <Button size={"icon"} className="p-2" onClick={() => setShowGameInfo(!showGameInfo)}>
            {showGameInfo ? <BookX size={24} /> : <Book size={24} />}
          </Button>

          <Button size={"icon"} className="p-2" disabled>
            <Undo />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;