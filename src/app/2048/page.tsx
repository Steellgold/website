import { E2048_Board } from "@/lib/components/2048/board";
import { E2048_StartButton } from "@/lib/components/2048/start-button";
import { E2048_StatsCard } from "@/lib/components/2048/stat-card";
import { ThemeSwitcher } from "@/lib/components/theme-switcher";
import { Button } from "@/lib/components/ui/button";
import { Separator } from "@/lib/components/ui/separator";
import { cn } from "@/lib/utils";
import { History, Undo } from "lucide-react";

const Page = () => {
  return (
    <div className="flex min-h-screen bg-[#faf8f0] dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <ThemeSwitcher />
      <E2048_StatsCard />

      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="relative">
          <div className={cn(
            "p-3 rounded-2xl bg-[#e4e0d1] dark:bg-gray-800 shadow-lg select-none transition-colors duration-100", {
              // "border-2 border-[#000001]/30 dark:border-gray-600": gameHovered,
            }
          )}>
            <E2048_Board />
          </div>
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

          <Button size={"icon"} className="p-2">
            <History />
          </Button>

          <Button size={"icon"} className="p-2">
            <Undo />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;