"use client";

import { ReactElement } from "react";
import { Activity, useLanyard } from "react-use-lanyard";
import { Component } from "./utils/component";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { cn } from "../utils";
import { AMAZON_PRIME_VIDEO, DISNEY_PLUS, GITHUB, NETFLIX, STACK_OVERFLOW, X, fixActivityGitHubImageLink, getActivityCardColor, getActivityId, isActivityBigImage, isAllowedActivity } from "./presences.consts";

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
    if (!isAllowedActivity(activity)) return <></>;
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
      getActivityCardColor(activity),
    )}>
      <CardContent className="flex flex-row items-center mt-3 -mb-5 px-3 relative">
        <div className="relative">
          <Image
            src={
              getActivityId(activity) === GITHUB ? 
                fixActivityGitHubImageLink(activity) :
                getImage(activity, isActivityBigImage(activity))
            }
            alt="Activity cover"
            width={64}
            height={64}
            className="rounded-lg object-cover ml-1"
          />
        </div>
          
        <div className="flex flex-col justify-center ml-3">
          <h1 className="text-white text-lg font-bold flex flex-row items-center">
            <h1>{activity.name}</h1>
          </h1>
          
          {activity.details && <p className="text-white text-xs md:text-md">{activity.details}</p>}
          {activity.state && <p className="text-white text-xs md:text-md">{activity.state}</p>}
        </div>
      </CardContent>
    </Card>
  )
}

const getImage = (activity: Activity, large = true) => {
  let image = large ? activity.assets?.large_image : activity.assets?.small_image;

  if (activity.application_id === getActivityId(NETFLIX))
      return `https://cdn.rcd.gg/PreMiD/websites/N/Netflix/assets/1.png`;
  if (activity.application_id === getActivityId(AMAZON_PRIME_VIDEO))
      return `https://cdn.rcd.gg/PreMiD/websites/P/Prime%20Video/assets/logo.png`;
  if (activity.application_id === getActivityId(STACK_OVERFLOW))
      return "https://cdn.rcd.gg/PreMiD/websites/S/Stack%20Overflow/assets/logo.png";
  if (activity.application_id === getActivityId(X))
      return "https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" // Because on the cdn.rcd.gg the logo is black (This not racism, just is black on black background...)
  if (activity.application_id === getActivityId(DISNEY_PLUS))
      return `https://pbs.twimg.com/profile_images/1772881174630912000/zyJT1Mw6_400x400.jpg`; // Twitter because the now logo is not available in the cdn.rcd.gg yet
  
  if (image?.startsWith("mp:external")) {
    return image?.replace(/mp:external\/([^\/]*)\/(http[s])/g, "$2:/");
  }
  
  return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${image}`;
}