"use client";

import { useLang } from "../hooks/lang.store";
import { useViewMode } from "../hooks/mode.store";
import { Button } from "./ui/button";

export const Buttons = () => {
  const { viewMode, setViewMode } = useViewMode();
  const { lang, setLang } = useLang();

  return <div className="flex flex-row items-center gap-2" id="buttons">
    <Button onClick={() => setViewMode(viewMode == "normal" ? "cv" : "normal")} variant={"outline"} size={"sm"}>
      {viewMode == "normal" ? "View the CV" : "View the Portfolio"}
    </Button>

    <Button onClick={() => setLang(lang == "en" ? "fr" : "en")} variant={"outline"} size={"sm"}>
      {lang == "en" ? "🇫🇷" : "🇺🇸"}
    </Button>
  </div>;
};