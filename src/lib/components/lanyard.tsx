"use client";

import { ReactElement } from "react";
import { Activity, useLanyard } from "react-use-lanyard";
import { Component } from "./utils/component";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { cn } from "../utils";

const ALLOWED_ACTIVITIES = [
  "782685898163617802", // Visual Studio Code
  "768942376403075073", // Figma
  "926541425682829352", // Netflix
  "610123745033584651", // Stack Overflow
  "607587875122446359", // GitHub
  "705139844883677224", // Amazon Prime Video
  "802958789555781663", // Twitch
  "463097721130188830", // YouTube
  "630236276829716483", // Disney+
  "844106861711196179", // Canal+

  // TODO: Change this to enums/consts for call the IDs more easily
];

const CARD_COLORS_MAP: Record<string, string> = {
  "782685898163617802": "border-[#2bb0f0] bg-[#2bb0f0]/10", // Visual Studio Code,
  "768942376403075073": "border-[#a357ff] bg-[#a357ff]/10", // Figma
  "926541425682829352": "border-[#e8040e] bg-[#e8040e]/10", // Netflix
};

const IMAGES_CONFIG: Record<string, boolean> = {
  "782685898163617802": false, // Visual Studio Code
  "768942376403075073": true, // Figma,
  "926541425682829352": true, // Netflix
};

export const DiscordPresence = (): ReactElement | ReactElement[] => {
  const { loading, status } = useLanyard({ userId: "504392983244832780", socket: true })
  if (loading){
    return (
      <p className="text-white">Loading...</p>
    )
  }

  const activities = status?.activities;
  const filteredActivities = activities?.filter(activity => activity.name !== "Spotify");

  if (!filteredActivities || filteredActivities.length === 0) return <></>;

  const presences = filteredActivities.map(activity => {
    if (!ALLOWED_ACTIVITIES.includes(activity.application_id!)) return <></>;
    if (activity.application_id === "782685898163617802" && activity.details === "Idling") return <></>;

    return (
      <PresenceCard key={activity.application_id} activity={activity} />
    )
  });

  return presences;
}

const PresenceCard: Component<{ activity: Activity }> = ({ activity }) => {
  return  (
    <Card className={cn(
      "h-full border-[2px] mb-3 group",
      "transition-colors duration-300 hover:shadow-lg",
      CARD_COLORS_MAP[activity.application_id!] ?? "",
    )}>
      <CardContent className="flex flex-row items-center mt-3 -mb-5 px-3">
        <div className="relative">
          <Image
            src={getImage(activity, IMAGES_CONFIG[activity.application_id!] ?? true)}
            alt="Album cover"
            width={64}
            height={64}
            className="rounded-lg object-cover"
          />
        </div>
          
        <div className="flex flex-col justify-center ml-5">
          <h1 className="text-white text-lg font-bold flex flex-row items-center">
            <h1>{activity.name}</h1>
          </h1>
          
          {activity.state && <p className="text-white text-xs md:text-md">{activity.details}</p>}
          {activity.state && <p className="text-white text-xs md:text-md">{activity.state}</p>}
        </div>
      </CardContent>
    </Card>
  )
}

const getImage = (activity: Activity, large = true) => {
  let image = large ? activity.assets?.large_image : activity.assets?.small_image;

  if (activity.application_id === "926541425682829352") {
    return `https://cdn.rcd.gg/PreMiD/websites/N/Netflix/assets/1.png`;
  }
  
  if (image?.startsWith("mp:external")) {
    return image?.replace(/mp:external\/([^\/]*)\/(http[s])/g, "$2:/");
  }
  
  return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${image}`;
}