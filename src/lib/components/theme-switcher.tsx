"use client";

import { ReactElement } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Component } from "./utils/component";
import { cn } from "../utils";

type ThemeSwitcherProps = {
  roundedFull?: boolean;
  size?: "default" | "sm" | "realSm" | "lg" | "icon" | "iconSm";
  isHome?: boolean;
};

export const ThemeSwitcher: Component<ThemeSwitcherProps> = ({ roundedFull = true, size = "icon", isHome = false }) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size={size}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        "p-2 shadow-lg transition-all", {
          "rounded-full": roundedFull,
          "bg-white dark:bg-gray-800": !isHome,
          "": isHome,
        }
      )}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}