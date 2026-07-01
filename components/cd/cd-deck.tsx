import { CdConsole } from "@/components/cd/cd-console";
import { CdDisc } from "@/components/cd/cd-disc";

type CdDeckProps = {
  coverUrl: string;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  onTogglePlayback: () => void;
  onCycleVolume: () => void;
};

export const CdDeck = ({
  coverUrl,
  isPlaying,
  currentTime,
  duration,
  volume,
  onTogglePlayback,
  onCycleVolume,
}: CdDeckProps) => {
  return (
    <div className="relative w-full max-w-6xl px-2 sm:px-6">
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-4 sm:gap-12">
        <div className="relative flex w-full justify-center pt-6 sm:pt-8">
          <CdDisc coverUrl={coverUrl} isPlaying={isPlaying} onTogglePlayback={onTogglePlayback} />
        </div>

        <CdConsole
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          volume={volume}
          onTogglePlayback={onTogglePlayback}
          onCycleVolume={onCycleVolume}
        />
      </div>
    </div>
  );
};