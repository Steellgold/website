"use client"

import { getDiscordPresence } from "@/lib/actions/discord-actions"
import type { DiscordPresence } from "@/type/discord"
import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react"

const DiscordPresenceContext = createContext<DiscordPresence | null>(null)

export const DiscordPresenceProvider: FC<PropsWithChildren> = ({ children }) => {
  const [presence, setPresence] = useState<DiscordPresence | null>(null)

  useEffect(() => {
    let cancelled = false

    const fetchPresence = async (): Promise<void> => {
      const data = await getDiscordPresence()
      if (!cancelled) setPresence(data)
    }

    fetchPresence()
    const fetchInterval = setInterval(fetchPresence, 60000)

    return () => {
      cancelled = true
      clearInterval(fetchInterval)
    }
  }, [])

  return (
    <DiscordPresenceContext.Provider value={presence}>
      {children}
    </DiscordPresenceContext.Provider>
  )
}

export const useDiscordPresence = (): DiscordPresence | null => useContext(DiscordPresenceContext)
