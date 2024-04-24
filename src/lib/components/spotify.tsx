import { ReactElement } from "react";
import { Card, CardContent } from "./ui/card";
import PlayingAnimation from "../utils/spotify/playing-icon";
import Image from "next/image";
import { getNowPlaying } from "../utils/spotify/spotify";
import { cn } from "../utils";
import Link from "next/link";
import { Separator } from "./ui/separator";

export const SpotifyCard = async(): Promise<ReactElement> => {
  const track = await getNowPlaying();
  
  if (!track || !track.is_playing) return <></>

  return (
    <>
      <Link href={track.item.external_urls.spotify}>
        <Card className={cn(
          "h-full bg-[#161616] border-[2px] border-[#1a1a1a]",
          "hover:border-[#1ed760] transition-colors duration-300 hover:bg-[#1ed760]/10 hover:shadow-lg",
          "mb-3"
        )}>
          <CardContent className="flex flex-row mt-3 -mb-2.5 px-3">
              <Image
                src={track.item.album.images[0].url}
                alt="Album cover"
                width={64}
                height={64}
                className="rounded-lg object-cover"
              />
            <div className="flex flex-col justify-center ml-3">
                <h1 className="text-white text-lg font-bold flex flex-row items-center">
                  <PlayingAnimation />
                  &nbsp;
                  {track.item.name}
                </h1>
                <p className="text-white text-xs md:text-md">
                  {track.item.artists.map((artist) => artist.name).join(", ")}
                </p>
            </div>
          </CardContent>
        </Card>
      </Link>

      <Separator className="my-7 bg-[#1a1a1a] w-[90%] mx-auto" />
    </>
  );
}