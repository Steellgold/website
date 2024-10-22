"use client";

import { ReactElement } from "react";
import { Header } from "./lib/header";
import { Projects } from "./lib/projects";
import { Birthday } from "@/lib/components/birthday";
import { Blog } from "./lib/blog";
import { SpotifyCard } from "@/lib/components/spotify";
import { DiscordPresence } from "@/lib/components/lanyard";
import { cn } from "@/lib/utils";
import { MadeWith } from "@/lib/components/maded";
import { Buttons } from "@/lib/components/buttons";
import { useViewMode } from "@/lib/stores/mode.store";
import { AIChatBubble } from "@/lib/components/chat-buble";
import { Cats } from "./lib/cats";
import { Button } from "@/lib/components/ui/button";
import { useLang } from "@/lib/stores/lang.store";

const Home = (): ReactElement => {
  const { viewMode } = useViewMode();
  const { lang, setLang } = useLang();

  const triggerPrint = () => {
    window.print();
  };  

  return (
    <>
      <Header />
      <Birthday />

      <div className={cn("justify-center mx-auto w-[90%] lg:w-[52%] mt-5 mb-5", {
        "w-5/6 lg:w-2/4" : viewMode == "cv",
      })}>
        {viewMode == "normal" &&  (
          <div className={cn("grid gap-3 md:grid-cols-2 mb-3")}>
            <SpotifyCard />
            <DiscordPresence />
          </div>
        )}

        <Projects />
        
        {viewMode === "normal" && <Blog />}
        {viewMode === "normal" && <Cats />}

        {viewMode == "normal" && (
          <div className="absolute right-0 top-0 p-5">
            <Buttons />
          </div>
        )}

        {viewMode == "cv" && (
          <div className="absolute right-0 top-0 p-5 flex gap-2 no-print">
            <Button onClick={() => setLang(lang == "en" ? "fr" : "en")} variant={"outline"} size={"sm"}>
              {lang == "en" ? "🇫🇷" : "🇺🇸"}
            </Button>

            <Button onClick={triggerPrint} variant="outline" size="sm">
              Download as PDF
            </Button>
          </div>
        )}

        <AIChatBubble />
        <MadeWith />
      </div>

      <style jsx global>{`
        @media print {
          body {
            zoom: ${lang === "fr" ? "0.68" : "0.7"};
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
    </>
  );
}

export default Home;