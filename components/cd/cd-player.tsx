"use client";

import { CdDeck } from "@/components/cd/cd-deck";
import { useEffect, useRef, useState } from "react";

const AUDIO_URL = "https://cdn.gaetanhus.fr/Consorcium%20Digital.mp3";
const FALLBACK_COVER_URL = "https://cdn.gaetanhus.fr/cd-cover.png";

export const CdPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [coverUrl] = useState(FALLBACK_COVER_URL);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(80);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = AUDIO_URL;
    audio.load();

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

    if (!audio) {
      return;
    }

    audio.volume = volume / 100;
  }, [volume]);

  const handleTogglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

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


      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex w-full flex-col items-center gap-5">
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

      <audio ref={audioRef} src={AUDIO_URL} preload="metadata" />

      <style>{`
        @keyframes cd-spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};