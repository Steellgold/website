"use client";

import { CdDeck } from "@/components/cd/cd-deck";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const VERSIONS = {
  short: {
    audio: "https://cdn.gaetanhus.fr/cd/short.mp3",
    cover: "https://cdn.gaetanhus.fr/cd/short.png",
  },
  long: {
    audio: "https://cdn.gaetanhus.fr/cd/long.mp3",
    cover: "https://cdn.gaetanhus.fr/cd/long.png",
  },
} as const;

type Version = keyof typeof VERSIONS;

export const CdPlayer = () => {
  const t = useTranslations("cd");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [version, setVersion] = useState<Version>("short");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(80);

  const audioUrl = VERSIONS[version].audio;
  const coverUrl = VERSIONS[version].cover;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const startPolling = () => {
      if (intervalId !== null) return;
      intervalId = setInterval(() => {
        setCurrentTime(audio.currentTime || 0);
      }, 100);
    };

    const stopPolling = () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    const handlePlay = () => { setIsPlaying(true); startPolling(); };
    const handlePause = () => { setIsPlaying(false); stopPolling(); };
    const handleEnded = () => { setIsPlaying(false); setCurrentTime(0); stopPolling(); };
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime || 0);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("seeked", handleTimeUpdate);

    if (!audio.paused) {
      startPolling();
    }

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("seeked", handleTimeUpdate);
      stopPolling();
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = audioUrl;
    audio.load();
  }, [audioUrl]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume / 100;
  }, [volume]);

  const handleVersionChange = (newVersion: Version) => {
    if (newVersion === version) return;

    const audio = audioRef.current;
    if (!audio) return;

    const wasPlaying = !audio.paused;
    audio.pause();
    setCurrentTime(0);
    setVersion(newVersion);

    if (wasPlaying) {
      audio.addEventListener("canplay", () => { audio.play(); }, { once: true });
    }
  };

  const handleTogglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch {
      setIsPlaying(false);
    }
  };

  const handleCycleVolume = () => {
    setVolume((currentVolume) => {
      const steps = [20, 40, 60, 80, 100];
      const currentIndex = steps.indexOf(currentVolume);

      if (currentIndex === -1 || currentIndex === steps.length - 1) {
        return steps[0];
      }

      return steps[currentIndex + 1];
    });
  };

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#050608] text-white">
      <div
        className="absolute inset-0 scale-110 bg-center bg-cover blur-3xl saturate-75 brightness-50"
        style={{ backgroundImage: `url(${coverUrl})` }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_32%,transparent_68%,rgba(0,0,0,0.42))]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex w-full flex-col items-center gap-5">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md">
            <button
              type="button"
              onClick={() => handleVersionChange("short")}
              className={`rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors ${
                version === "short" ? "bg-white/20 text-white" : "text-white/60 hover:text-white/80"
              }`}
            >
              {t("versionShort")}
            </button>
            <button
              type="button"
              onClick={() => handleVersionChange("long")}
              className={`rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors ${
                version === "long" ? "bg-white/20 text-white" : "text-white/60 hover:text-white/80"
              }`}
            >
              {t("versionLong")}
            </button>
          </div>

          <CdDeck
            coverUrl={coverUrl}
            isPlaying={isPlaying}
            currentTime={currentTime}
            duration={duration}
            volume={volume}
            onTogglePlayback={handleTogglePlayback}
            onCycleVolume={handleCycleVolume}
          />
        </div>
      </div>

      <audio ref={audioRef} preload="metadata" />

      <style>{`
        @keyframes cd-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
