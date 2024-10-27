"use client";

import { useEffect, useState } from "react";
import { Component } from "../utils/component";
import { Dayjs, dayJS } from "@/lib/utils/dayjs/day-js";
import { cn } from "@/lib/utils";

type StatCardProps = {
  score: number;
  bestScore: number;

  startedTime: Dayjs;
};

const ScoreCaseStyle = cn(
  "bg-[#e4e0d1]/50 dark:bg-gray-800/50 p-1",
  "border-[3px] border-[#e4e0d1] dark:border-gray-800 rounded-2xl",
  "flex flex-col items-center",
  "w-28 h-14 rounded-2xl"
);

export const E2048_StatsCard: Component<StatCardProps> = ({ score, bestScore, startedTime }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const duration = dayJS.duration(dayJS().diff(dayJS(startedTime)));

      setSeconds(duration.seconds());
      setMinutes(duration.minutes());
      setHours(duration.hours());
      setDays(duration.days());
    }, 1000);

    return () => clearInterval(interval);
  }, [startedTime]);

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 flex justify-center items-center p-4 flex flex-col gap-2 transition-opacity duration-100", {
        // "opacity-5": gameHovered
      }
    )}>
      <div className="flex flex-row gap-2">
        <div className={ScoreCaseStyle}>
          <span className="text-sm font-extrabold opacity-65">SCORE</span>
          <span className="text-xl font-bold -mt-1">{score}</span>
        </div>

        <div className={ScoreCaseStyle}>
          <span className="text-sm font-extrabold opacity-65">BEST</span>
          <span className="text-xl font-bold -mt-1">{score}</span>
        </div>
      </div>

      <div className="text-xs opacity-50">
        Game started for {days > 0 ? `${days}d ` : ""}{hours > 0 ? `${hours}h ` : ""}{minutes > 0 ? `${minutes}m ` : ""}{seconds}s
      </div>
    </div>
  );
};