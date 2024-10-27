"use client";

import { ReactElement } from "react";
import { ThemeSwitcher } from "../theme-switcher";
import { useLang } from "@/lib/stores/lang.store";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const E2048_TopButtons = (): ReactElement => {
  const { lang } = useLang();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 items-center">
      <Button
        asChild
        size={"sm"}
        variant={"outline"}
        className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all"
      >
        <Link href={"/"} className="flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          <span>
            {lang === "en" ? "Back to portfolio" : "Retour au portfolio"}
          </span>
        </Link>
      </Button>

      <ThemeSwitcher />
    </div>
  );
};
