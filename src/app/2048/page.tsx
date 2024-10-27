"use client"

import { ThemeSwitcher } from "@/lib/components/theme-switcher";
import { cn } from "@/lib/utils";
import { ReactElement, useState } from "react";

type Settings = {
  gridSize: number;
};

const Page = (): ReactElement => {
  const [board, setBoard] = useState<number[]>([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

  const [settings, setSettings] = useState<Settings>({
    gridSize: 4,
  });

  return (
    <div className="flex min-h-screen bg-[#faf8f0] dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <ThemeSwitcher />

      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="relative">
          <div className={`p-3 rounded-2xl bg-[#e4e0d1] dark:bg-gray-800 shadow-lg select-none`}>
            <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${settings.gridSize}, minmax(0, 1fr))` }}>
              {board.map((tile, index) => (
                <div
                  key={index}
                  className={cn("w-24 h-24 flex items-center justify-center text-2xl font-bold rounded-xl transition-all duration-100 cursor-zoom")}
                >
                  <span className={cn("text-3xl font-bold", { "hidden": tile === 0 })}>{tile}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;