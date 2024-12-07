"use client";

import Link from "next/link";
import { useLang } from "../stores/lang.store";
import { useViewMode } from "../stores/mode.store";
import { Button, buttonVariants } from "./ui/button";
import { FaSpotify } from "react-icons/fa";
import { ArrowRight, ArrowUpRight, Crown, Grid3X3 } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import { Separator } from "./ui/separator";

export const Buttons = () => {
  const { viewMode, setViewMode } = useViewMode();
  const { lang, setLang } = useLang();

  return <div className="flex flex-row items-center gap-1" id="buttons">
    <Link className={buttonVariants({ variant: "outline", size: "sm", className: "flex items-center gap-1.5" })} href="/spotiview">
      <FaSpotify className="text-green-500" size={16} />
      <span className="hidden sm:block">Spotiview</span>
    </Link>

    <Link className={buttonVariants({ variant: "outline", size: "sm", className: "flex items-center gap-1.5" })} href="/clashroyal">
      <Crown className="text-blue-500" size={16} />
      <span className="hidden sm:block">Clash Royal</span>
    </Link>

    <Link className={buttonVariants({ variant: "outline", size: "sm", className: "flex items-center gap-1.5" })} href="/2048">
      <Grid3X3 className="text-yellow-500" size={16} />
      <span className="hidden sm:block">2048</span>
    </Link>

    <Separator orientation="vertical" className="h-5" />

    <Button onClick={() => setLang(lang == "en" ? "fr" : "en")} variant={"outline"} size={"sm"}>
      {lang == "en" ? "🇫🇷" : "🇺🇸"}
    </Button>
    
    <ThemeSwitcher roundedFull={false} size="sm" isHome />

    <Button onClick={() => setViewMode("cv")} variant={"outline"} size={"sm"}>
      CV <ArrowRight className="w-4 h-4 ml-1" />
    </Button>
  </div>;
};