"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";
import { useLang } from "../stores/lang.store";
import { useViewMode } from "../stores/mode.store";
import { Button } from "./ui/button";
import { FaSpotify } from "react-icons/fa";
import { ArrowRight, Binary, Club, Ellipsis, Files, Grid3X3, Shapes } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import React, { ReactElement } from "react";

export const Buttons = (): ReactElement => {
    const { setViewMode } = useViewMode();
    const { lang, setLang } = useLang();

  return (
    <div className="fixed top-0 right-0 z-50 p-6 no-print flex flex-row gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Ellipsis size={16} />
            <span className="hidden sm:block">Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="sm:mr-3">
          <DropdownMenuItem asChild>
            <Link href="/blog" className="cursor-pointer">
              <Files size={16} />
              <span className="ml-2">Blog</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link href="/blackjack" className="cursor-pointer">
              <Club size={16} />
              <span className="ml-2">Blackjack (solo / in-app)</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="https://blackjack.steellgold.fr/" className="cursor-pointer">
              <Club size={16} />
              <span className="ml-2">Blackjack (multi-player / external)</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/quizz" className="cursor-pointer">
              <Shapes size={16} />
              <span className="ml-2">Quizz</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link href="/2048" className="cursor-pointer">
              <Grid3X3 size={16} />
              <span className="ml-2">2048</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/guess" className="cursor-pointer">
              <Binary size={16} />
              <span className="ml-2">Guess</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/spotiview" className="cursor-pointer">
              <FaSpotify size={16} />
              <span className="ml-2">Spotiview</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <>
            <div className="flex items-center gap-2">
              <ThemeSwitcher roundedFull={false} size="sm" isHome />

              <Button onClick={() => setLang(lang == "en" ? "fr" : "en")} variant={"outline"} size={"sm"}>
                {lang == "en" ? "🇫🇷" : "🇺🇸"}
              </Button>

              <Button onClick={() => setViewMode("cv")} variant={"outline"} size={"sm"}>
                CV <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}