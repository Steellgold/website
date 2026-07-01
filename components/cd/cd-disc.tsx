"use client";

import { useTranslations } from "next-intl";

type CdDiscProps = {
  coverUrl: string;
  isPlaying: boolean;
  onTogglePlayback: () => void;
};

export const CdDisc = ({ coverUrl, isPlaying, onTogglePlayback }: CdDiscProps) => {
  const t = useTranslations("cd");

  return (
    <button
      type="button"
      onClick={onTogglePlayback}
      aria-label={isPlaying ? t("pauseDisc") : t("playDisc")}
      aria-pressed={isPlaying}
      className="group relative z-20 aspect-square w-[min(72vw,31rem)] max-w-124 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      style={{
        animation: "cd-spin 12s linear infinite",
        animationPlayState: isPlaying ? "running" : "paused",
      }}
    >
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,#f8fafc_0%,#d4d4d8_16%,#a1a1aa_31%,#71717a_52%,#3f3f46_76%,#111827_100%)] shadow-[0_32px_90px_rgba(0,0,0,0.66),inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-24px_48px_rgba(0,0,0,0.42)]" />

      <span className="absolute inset-[2.8%] rounded-full bg-[repeating-radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0_1px,rgba(255,255,255,0)_1px_7px)] opacity-60 mix-blend-soft-light" />

      <span className="absolute inset-[11%] overflow-hidden rounded-full border border-white/25 bg-[#0c0d11] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-22px_36px_rgba(0,0,0,0.35)]">
        <span
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${coverUrl})` }}
        />

        <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.28),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.12),transparent_48%,rgba(0,0,0,0.2))]" />
      </span>

      <span className="absolute left-1/2 top-1/2 h-[17%] w-[17%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f8fafc_0%,#e5e7eb_34%,#64748b_100%)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28),0_0_0_7px_rgba(0,0,0,0.18)]" />

      <span className="absolute left-1/2 top-1/2 h-[5.5%] w-[5.5%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#050608] shadow-[0_0_0_1px_rgba(255,255,255,0.3)]" />

      <span className="absolute inset-[6%] rounded-full border border-white/10 opacity-75" />
    </button>
  );
};