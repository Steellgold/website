"use client";

import { Social_Spotify } from "@/components/icons";
import { getSpotifyNowPlaying } from "@/lib/actions/spotify-actions";
import { formatTime, getProgressPercentage } from "@/lib/spotify";
import { cn } from "@/lib/utils";
import type { SpotifyNowPlaying } from "@/type/spotify";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const SpotifyPlayer = () => {
  const [nowPlaying, setNowPlaying] = useState<SpotifyNowPlaying>({
    track: null,
    isPlaying: false,
    progress: 0,
    duration: 0,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [localProgress, setLocalProgress] = useState(0);
  const lastFetch = useRef(Date.now());
  const rafRef = useRef<number | null>(null);

  const [pollInterval, setPollInterval] = useState(5000); // ms
  const [, setNoMusicCount] = useState(0);
  const [, setNoMusicHourCount] = useState(0);
  const [, setNoMusicFiveHourCount] = useState(0);

  const fetchNowPlaying = async () => {
    try {
      const data = await getSpotifyNowPlaying();
      setNowPlaying(data);
      setLocalProgress(data.progress);
      lastFetch.current = Date.now();
    } catch (error) {
      if (process.env.NODE_ENV === "development") console.log("Error fetching now playing:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let cancelled = false;

    const poll = async () => {
      await fetchNowPlaying();
      if (cancelled) return;
      // Music = reset

      if (nowPlaying.track) {
        setPollInterval(5000);
        setNoMusicCount(0);
        setNoMusicHourCount(0);
        setNoMusicFiveHourCount(0);
      } else {
        // No music
        if (pollInterval === 5000) {
          setPollInterval(60000); // 1 minute
          setNoMusicCount(1);
        } else if (pollInterval === 60000) {
          setNoMusicCount(c => {
            if (c + 1 >= 5) {
              setPollInterval(3600000); // 1 hour
              return 0;
            }
            return c + 1;
          });
        } else if (pollInterval === 3600000) {
          setNoMusicHourCount(c => {
            if (c + 1 >= 5) {
              setPollInterval(18000000); // 5 hours
              return 0;
            }
            return c + 1;
          });
        } else if (pollInterval === 18000000) {
          setNoMusicFiveHourCount(c => {
            if (c + 1 >= 5) {
              setPollInterval(18000000); // 5 hours
              return 5; // stay at 5
            }
            return c + 1;
          });
        }
      }

      timeout = setTimeout(poll, pollInterval);
    };

    timeout = setTimeout(poll, pollInterval);
    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [nowPlaying.track, pollInterval]);

  // Music change = reset
  useEffect(() => {
    setLocalProgress(nowPlaying.progress);
    lastFetch.current = Date.now();
  }, [nowPlaying.progress, nowPlaying.track?.id]);

  // Progress Timer
  useEffect(() => {
    if (!nowPlaying.isPlaying) return;
    let running = true;
    const step = () => {
      if (!running) return;
      setLocalProgress(() => {
        const elapsed = (Date.now() - lastFetch.current);
        const next = nowPlaying.progress + elapsed;
        if (next >= nowPlaying.duration) return nowPlaying.duration;
        return next;
      });
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [nowPlaying.isPlaying, nowPlaying.progress, nowPlaying.duration, nowPlaying.track?.id]);

  if (isLoading || !nowPlaying.track) {
    return null;
  }

  const { track, duration } = nowPlaying;
  const progress = Math.min(localProgress, duration);
  const progressPercentage = getProgressPercentage(progress, duration);

  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50",
          "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "w-full flex items-center justify-between absolute",
            "top-[-40px] left-0 right-0 h-10 pointer-events-auto"
          )}
        >
          <div className={cn("flex items-center min-w-0")}>
            <div
              className={cn(
                "flex items-center",
                "mb-4 ml-3 min-w-0",
                "bg-[#1ED760] py-1 px-2 gap-1"
              )}
            >
              <Social_Spotify className="w-3.5 h-3.5 fill-[#121212]" />
              <Link
                className={cn(
                  "text-sm font-medium truncate block",
                  "max-w-[320px] text-[#121212]"
                )}
                href={track.external_urls.spotify}
              >
                {track.name} • {track.artists.map(artist => artist.name).join(", ")}
              </Link>
            </div>
          </div>

          <div className="bg-[#1ED760] py-1 px-3 mb-4 mr-3">
            <span className="text-sm font-medium text-[#121212] pointer-events-auto">
              {formatTime(progress)}/{formatTime(duration)}
            </span>
          </div>
        </div>

        <div
          className={cn(
            "w-full rounded-none h-1 absolute left-0 right-0 bottom-0 m-0 pointer-events-auto",
            "bg-[#003613]"
          )}
        >
          <div
            className="h-1 rounded-none transition-all duration-200 ease-linear"
            style={{ width: `${progressPercentage}%`, background: "#1ED760" }}
          />
        </div>
      </div>
    </>
  );
};