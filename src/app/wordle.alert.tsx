"use client";

import { useWordleStore } from "@/lib/store/wordle.store";
import Link from "next/link";

export const WhiteBannerWordle = () => {
  const { hasVisitedWordle } = useWordleStore();
  if (hasVisitedWordle) return <></>;

  return (
    <div className="bg-white text-black flex items-center justify-center h-8">
      <p>I&apos;ve added a Wordle game to my website, <Link href={"/wordle"} className="underline">click here</Link> to discover it 👀 </p>
    </div>
  )
}