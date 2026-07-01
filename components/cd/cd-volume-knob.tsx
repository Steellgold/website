type CdVolumeKnobProps = {
  volume: number;
  onCycleVolume: () => void;
};

export const CdVolumeKnob = ({ volume, onCycleVolume }: CdVolumeKnobProps) => {
  const volumeRotation = -140 + (volume / 100) * 280;

  return (
    <button
      type="button"
      onClick={onCycleVolume}
      aria-label={`Volume ${volume}%`}
      className="relative flex flex-col items-center rounded-full border border-white/10 bg-black/28 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
    >
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-[radial-gradient(circle_at_35%_30%,#fafafa_0%,#d4d4d4_18%,#6b7280_58%,#111827_100%)] shadow-[0_14px_28px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-12px_20px_rgba(0,0,0,0.45)] sm:h-[88px] sm:w-[88px]">
        <div
          className="absolute z-0 left-1/2 top-1/2 h-[50%] w-1 rounded-full bg-zinc-400"
          style={{
            transform: `translate(-50%, -100%) rotate(${volumeRotation}deg)`,
            transformOrigin: "center bottom",
          }}
        />
        <div className="relative z-10 h-14 w-14 rounded-full border border-black/30 bg-[radial-gradient(circle_at_35%_30%,#1f2937_0%,#09090b_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] sm:h-16 sm:w-16" />
        <div className="pointer-events-none absolute z-20 inset-0 flex items-center justify-center text-[12px] font-semibold tracking-[0.18em] text-white/80">
          {volume}%
        </div>
      </div>
    </button>
  );
};