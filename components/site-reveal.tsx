"use client";

import { useMounted } from "@/hooks/use-mounted";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

const COOKIE_NAME = "site_reveal_seen";
const REVEAL_DURATION_MS = 1400;
const REVEAL_DELAY_MS = 400;

type SiteRevealProps = {
  src: string;
};

export const SiteReveal: FC<SiteRevealProps> = ({ src }) => {
  const mounted = useMounted();
  const [revealed, setRevealed] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const reducedMotion = mounted && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const visible = !dismissed && !reducedMotion;

  useEffect(() => {
    document.cookie = `${COOKIE_NAME}=1; path=/; max-age=${60 * 60 * 24 * 60}`;
  }, []);

  useEffect(() => {
    if (!mounted || reducedMotion) return;

    const revealTimer = setTimeout(() => setRevealed(true), REVEAL_DELAY_MS);
    const hideTimer = setTimeout(() => setDismissed(true), REVEAL_DELAY_MS + REVEAL_DURATION_MS);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(hideTimer);
    };
  }, [mounted, reducedMotion]);

  if (!visible) return null;

  return (
    <div
      onClick={() => setDismissed(true)}
      role="button"
      tabIndex={0}
      aria-label="Skip"
      className="fixed inset-0 z-100 cursor-pointer overflow-hidden bg-black transition-[clip-path] ease-in-out"
      style={{
        clipPath: revealed ? "inset(0 0 0 100%)" : "inset(0 0 0 0)",
        transitionDuration: `${REVEAL_DURATION_MS}ms`,
      }}
    >
      <Image src={src} alt="" fill priority className="object-cover object-top" sizes="100vw" />
    </div>
  );
};
