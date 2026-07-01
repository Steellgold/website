"use client";

import { CdVolumeKnob } from "@/components/cd/cd-volume-knob";
import { useTranslations } from "next-intl";

type CdConsoleProps = {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  onTogglePlayback: () => void;
  onCycleVolume: () => void;
};

const formatTime = (value: number) => {
  if (!Number.isFinite(value) || value < 0) {
    return "0:00";
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");

  return `${minutes}:${seconds}`;
};

export const CdConsole = ({
  isPlaying,
  currentTime,
  duration,
  volume,
  onTogglePlayback,
  onCycleVolume,
}: CdConsoleProps) => {
  const t = useTranslations("cd");
  const progressRatio = duration > 0 ? Math.min(currentTime / duration, 1) : 0;

  return (
    <div className="relative mx-auto w-full max-w-3xl rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03)_18%,rgba(0,0,0,0.58)_100%)] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm sm:p-4">
      <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 sm:gap-3">
        <div className="min-w-0 rounded-2xl border border-white/10 bg-black/35 px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:px-4 sm:py-3">
          <div className="text-[10px] uppercase tracking-[0.35em] text-white/45">{t("time")}</div>
          <div className="mt-1 truncate font-mono text-xl text-white sm:text-2xl">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        <div className="rounded-full border border-white/10 bg-black/28 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
          <button
            type="button"
            onClick={onTogglePlayback}
            aria-label={isPlaying ? t("pauseRadio") : t("playRadio")}
            className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-[radial-gradient(circle_at_35%_30%,#fafafa_0%,#d4d4d4_24%,#71717a_68%,#18181b_100%)] text-[10px] font-semibold uppercase tracking-[0.28em] text-white shadow-[0_16px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-10px_18px_rgba(0,0,0,0.38)] transition-transform duration-150 active:scale-95 sm:h-[88px] sm:w-[88px] sm:text-[11px] sm:tracking-[0.32em]"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-black/35 bg-[radial-gradient(circle_at_35%_30%,#1f2937_0%,#09090b_100%)] text-center leading-none shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] sm:h-16 sm:w-16">
              {isPlaying ? t("pause") : t("play")}
            </span>
          </button>
        </div>

        <CdVolumeKnob volume={volume} onCycleVolume={onCycleVolume} />
      </div>

      <div className="mb-4 h-2.5 overflow-hidden rounded-full border border-white/10 bg-black/45 shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)] sm:h-3">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#cbd5e1,#94a3b8,#e2e8f0)] transition-[width] duration-150"
          style={{ width: `${progressRatio * 100}%` }}
        />
      </div>
    </div>
  );
};