"use client"

import { Button } from "@/lib/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ReactElement, useState } from "react";

type Settings = {
  gridSize: number;
};

const Page = (): ReactElement => {
  const { theme, setTheme } = useTheme();

  const [board, setBoard] = useState<number[]>([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

  const [settings, setSettings] = useState<Settings>({
    gridSize: 4,
  });

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="relative">
          <div className={`p-3 rounded-2xl bg-white dark:bg-gray-800 shadow-lg select-none`}>
            <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${settings.gridSize}, minmax(0, 1fr))` }}>
              {board.map((tile, index) => (
                <div
                  key={index}
                  className={cn("w-24 h-24 flex items-center justify-center text-2xl font-bold rounded-xl transition-all duration-100 cursor-zoom")}
                >
                  <span className={cn("text-3xl font-bold", { "hidden": tile === 0 })}>
                    {tile}
                  </span>
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