import { ReactElement } from "react";
import { Header } from "./lib/header";
import { Projects } from "./lib/projects";
import { Birthday } from "@/lib/components/birthday";
import { Blog } from "./lib/blog";
import { SpotifyCard } from "@/lib/components/spotify";
import { DiscordPresence } from "@/lib/components/lanyard";
import { cn } from "@/lib/utils";

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

        <div className="mt-7 mb-7">
          <p className="text-white text-center">Made with ❤️ by Gaëtan</p>
        </div>
      </div>
    </>
  );
}

export default Home;