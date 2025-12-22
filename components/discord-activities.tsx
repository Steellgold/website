"use client";

import { getDiscordPresence } from "@/lib/actions/discord-actions";
import { cn } from "@/lib/utils";
import type { DiscordActivity, DiscordPresence } from "@/type/discord";
import Image from "next/image";
import { useEffect, useState } from "react";

const getImageUrl = (imageId: string | null, applicationId: string | null): string | null => {
  if (!imageId) return null;
  
  if (imageId.startsWith("mp:external/")) {
    const parts = imageId.split("/");
    const httpsIndex = parts.findIndex(part => part === "https");

    if (httpsIndex !== -1 && httpsIndex < parts.length - 1) return `https://${parts.slice(httpsIndex + 1).join("/")}`;
    return imageId.replace("mp:external/", "https://");
  }
  
  if (applicationId) {
    return `https://cdn.discordapp.com/app-assets/${applicationId}/${imageId}.png`;
  }
  
  return null;
};

const formatTime = (timestamp: number | null, currentTime: number): string => {
  if (!timestamp) return "";
  
  const diff = currentTime - timestamp;
  const totalSeconds = Math.floor(diff / 1000);
  
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  const hoursStr = hours.toString().padStart(2, '0');
  const minutesStr = minutes.toString().padStart(2, '0');
  const secondsStr = seconds.toString().padStart(2, '0');
  
  return `since ${hoursStr}:${minutesStr}:${secondsStr}`;
};

export const DiscordActivities = () => {
  const [presence, setPresence] = useState<DiscordPresence | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(Date.now());

  const fetchPresence = async () => {
    try {
      const data = await getDiscordPresence();
      setPresence(data);
    } catch (error) {
      if (process.env.NODE_ENV === "development") console.log("Error fetching Discord presence:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPresence();
    
    const fetchInterval = setInterval(fetchPresence, 30000);
    const timeUpdateInterval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    
    return () => {
      clearInterval(fetchInterval);
      clearInterval(timeUpdateInterval);
    };
  }, []);

  if (isLoading || !presence || presence.activities.length === 0) {
    return null;
  }

  return (
    <div className="-mt-8 -mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pointer-events-auto">
        {presence.activities.map((activity: DiscordActivity, index: number) => {
          const largeImageUrl = getImageUrl(activity.assets.largeImage, activity.applicationId);
          const smallImageUrl = getImageUrl(activity.assets.smallImage, activity.applicationId);
          const timeText = formatTime(activity.timestamps.start, currentTime);

          return (
            <div
              key={index}
              className={cn(
                "flex items-center gap-2",
                "bg-[#1d1d1d] py-2 px-3",
                "border-inside border-inside-default"
              )}
            >
              {largeImageUrl && (
                <div className="relative w-15 h-15 shrink-0">
                  <Image
                    src={largeImageUrl}
                    alt={activity.name}
                    width={52}
                    height={52}
                    className="w-full h-full object-cover"
                    unoptimized
                  />

                  {smallImageUrl && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full overflow-hidden border-2 border-[#1d1d1d]">
                      <Image
                        src={smallImageUrl}
                        alt={activity.assets.smallText || ""}
                        width={20}
                        height={20}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                  )}
                </div>
              )}
              
              <div className="flex flex-col min-w-0 flex-1">
                <div className="text-xs font-medium text-white/80">
                  {activity._type} {activity.name}
                </div>

                {activity.details && (
                  <div className="text-sm font-medium text-white truncate">
                    {activity.details}
                  </div>
                )}

                {activity.state && (
                  <div className="text-xs text-white/70 truncate">
                    {activity.state}
                  </div>
                )}

                {timeText && <div className="text-xs text-white/60">{timeText}</div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

