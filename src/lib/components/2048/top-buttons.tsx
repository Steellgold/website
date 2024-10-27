"use client";

import { ReactElement } from "react";
import { ThemeSwitcher } from "../theme-switcher";
import { useLang } from "@/lib/stores/lang.store";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export const E2048_TopButtons = (): ReactElement => {
  const { lang, setLang } = useLang();

  return (
    <div className={cn(
      "right-1 flex-col gap-1",
      "sm:right-4 sm:flex-row sm:gap-1.5",
      "fixed top-4 z-50 flex items-center"
    )}>
      <Button
        asChild
        size={"sm"}
        variant={"outline"}
        className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all"
      >
        <Link href={"/"} className="flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:block">
            {lang === "en" ? "Back to portfolio" : "Retour au portfolio"}
          </span>
        </Link>
      </Button>

      
      <Button
        onClick={() => setLang(lang == "en" ? "fr" : "en")}
        variant={"outline"}
        size={"icon"}
        className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all"
      >
        {lang == "en" ? "🇫🇷" : "🇺🇸"}
      </Button>

      <ThemeSwitcher />
    </div>
  );
};
