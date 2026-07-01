"use client";

import { ConditionalPadding } from "@/components/conditional-padding";
import { SpotifyPlayer } from "@/components/spotify-player";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

const isFullScreenPage = (pathname: string | null) => pathname === "/cd" || pathname?.endsWith("/cd") === true;

export const PageChrome = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const fullScreenPage = isFullScreenPage(pathname);

  return (
    <>
      {!fullScreenPage ? (
        <div className="absolute top-0 left-0 right-0 pointer-events-none z-0">
          <div className="w-full h-54 sm:h-100">
            <Image
              src="/BWR.webp"
              alt="BWR"
              width={1000}
              height={256}
              className="w-full h-full"
            />
          </div>
        </div>
      ) : null}

      {fullScreenPage ? children : <ConditionalPadding>{children}</ConditionalPadding>}

      {!fullScreenPage ? <SpotifyPlayer /> : null}
    </>
  );
};