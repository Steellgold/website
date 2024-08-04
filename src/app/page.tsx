import { ReactElement } from "react";
import { Header } from "./lib/header";
import { Projects } from "./lib/projects";
import { Birthday } from "@/lib/components/birthday";
import { Blog } from "./lib/blog";
import { SpotifyCard } from "@/lib/components/spotify";
import { DiscordPresence } from "@/lib/components/lanyard";
import { cn } from "@/lib/utils";
import { CVButton } from "@/lib/components/cvButton";
import { MadeWith } from "@/lib/components/maded";

const Home = (): ReactElement => {
  return (
    <>
      <Header />
      <Birthday />

      <div className="justify-center mx-auto w-5/6 lg:w-2/4 mt-3">
        <div className={cn("grid gap-3 md:grid-cols-2 mb-3")}>
          <SpotifyCard />
          <DiscordPresence />
        </div>

        <Projects />

        <Blog />

        <div className="absolute right-0 top-0 p-5">
          <CVButton />
        </div>

        <MadeWith />
      </div>
    </>
  );
}

export default Home;