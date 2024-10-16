"use client";

import Link from "next/link";
import { useLang } from "../stores/lang.store";
import { useViewMode } from "../stores/mode.store";
import { Button, buttonVariants } from "./ui/button";
import { FaSpotify } from "react-icons/fa";

export const Buttons = () => {
  const { viewMode, setViewMode } = useViewMode();
  const { lang, setLang } = useLang();

  return <div className="flex flex-row items-center gap-1" id="buttons">
    <Link className={buttonVariants({ variant: "outline", size: "sm", className: "flex items-center gap-1.5" })} href="/spotiview">
      <FaSpotify className="text-green-500" size={16} />
      <span className="hidden sm:block">Spotiview</span>
    </Link>

    <Button onClick={() => setViewMode(viewMode == "normal" ? "cv" : "normal")} variant={"outline"} size={"sm"}>
      {viewMode == "normal" ? "View the CV" : "View the Portfolio"}
    </Button>

    <Button onClick={() => setLang(lang == "en" ? "fr" : "en")} variant={"outline"} size={"sm"}>
      {lang == "en" ? "🇫🇷" : "🇺🇸"}
    </Button>
  </div>;
};