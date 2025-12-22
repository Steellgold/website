"use server"

import type { DiscordPresence } from "@/type/discord"
import { headers } from "next/headers"

export const getDiscordPresence = async (): Promise<DiscordPresence | null> => {
  const headersList = await headers()
  const host = headersList.get("host")

  const allowedDomain = /(^|\.)steellgold\.fr$|^localhost(:\d+)?$/

  if (!host || !allowedDomain.test(host)) {
    if (process.env.NODE_ENV === "development") {
      console.log(`Discord access denied for host: ${host}`)
    }
    return null
  }

  try {
    const response = await fetch("https://presence.steellgold.fr/", {
      cache: "no-store"
    })

    if (!response.ok) {
      if (process.env.NODE_ENV === "development") {
        console.error("Error fetching Discord presence:", response.statusText)
      }
      return null
    }

    const data = await response.json()
    return data as DiscordPresence
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error in getDiscordPresence action:", error)
    }
    return null
  }
}

