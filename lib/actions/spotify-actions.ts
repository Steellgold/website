"use server"

import { getNowPlaying } from "@/lib/spotify"
import type { SpotifyNowPlaying } from "@/type/spotify"
import { headers } from "next/headers"

export const getSpotifyNowPlaying = async (): Promise<SpotifyNowPlaying> => {
  const headersList = await headers()
  const host = headersList.get("host")

  const allowedDomain = /(^|\.)steellgold\.fr$|^localhost(:\d+)?$/

  if (!host || !allowedDomain.test(host)) {
    if (process.env.NODE_ENV === "development") {
      console.log(`Spotify access denied for host: ${host}`)
    }
    return {
      track: null,
      isPlaying: false,
      progress: 0,
      duration: 0,
    }
  }

  try {
    return await getNowPlaying()
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error in getSpotifyNowPlaying action:", error)
    }
    return {
      track: null,
      isPlaying: false,
      progress: 0,
      duration: 0,
    }
  }
}