"use client"

import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import PlayingAnimation from "@/lib/utils/spotify/playing-icon";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { SpotifyTrack } from "@/lib/utils/spotify/spotify.schema";
import { FaSpotify } from "react-icons/fa";

export const SpotifyCard = (): ReactElement => {
  const [track, setTrack] = useState<z.infer<typeof SpotifyTrack> | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const track = await fetch("/api/now-playing");

      const res = await track.json();
      if (res.error) return setTrack(null);
      setTrack(res);
    };

    fetchNowPlaying();

    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!track) return <></>;

  return (
    <Link href={track.item.external_urls.spotify}>
      <Card className={cn(
        "h-full border-[2px] mb-3 group",
        "border-[#1ed760] transition-colors duration-300 bg-[#1ed760]/10 hover:shadow-lg",
      )}>
        <CardContent className="flex flex-row items-center mt-3 -mb-5 px-3">
          <div className="relative">
            <Image
              src={track.item.album.images[0].url}
              alt="Album cover"
              width={64}
              height={64}
              className="rounded-lg object-cover"
            />

            <div className="absolute -bottom-2 -right-2 p-1 bg-[#03160a] rounded-full transition-colors duration-300">
              <FaSpotify className="text-green-500" />
            </div>
          </div>
            
          <div className="flex flex-col justify-center ml-5">
            <h1 className="text-white text-lg font-bold flex flex-row items-center">
              <PlayingAnimation />
              <div className="ml-1">&nbsp;{track.item.name}</div>
            </h1>
            
            <p className="text-white text-xs md:text-md">
              {track.item.artists.map((artist) => artist.name).join(", ")}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}