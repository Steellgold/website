"use client"

import { useDiscordPresence } from "@/components/discord-presence-provider"
import { DISCORD_PRESENCE_APPS } from "@/config/discord-presence"
import { cn } from "@/lib/utils"
import type { DiscordActivity } from "@/type/discord"
import { FC, useEffect, useState } from "react"

const formatElapsed = (startTimestamp: number | null, now: number): string | undefined => {
  if (!startTimestamp) return undefined

  const totalSeconds = Math.max(0, Math.floor((now - startTimestamp) / 1000))
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const pad = (value: number): string => value.toString().padStart(2, "0")

  return `since ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

export const DiscordPresenceWidget: FC = () => {
  const presence = useDiscordPresence()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const tickInterval = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(tickInterval)
  }, [])

  const activities = (presence?.activities ?? []).filter(
    (activity: DiscordActivity): boolean =>
      activity.applicationId !== null && activity.applicationId in DISCORD_PRESENCE_APPS
  )

  if (activities.length === 0) return null

  return (
    <div className="flex flex-row flex-wrap gap-2">
      {activities.map((activity) => {
        const entry = DISCORD_PRESENCE_APPS[activity.applicationId as string]
        const Icon = entry.icon
        const elapsed = formatElapsed(activity.timestamps?.start ?? null, now)

        return (
          <span
            key={activity.applicationId}
            title={elapsed}
            className={cn(
              "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md",
              "border bg-card text-sm"
            )}
            style={{ borderColor: `${entry.color}40` }}
          >
            <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: entry.color }} />
            <span>{entry.name}</span>
            {activity.details && (
              <span className="text-muted-foreground truncate max-w-[10rem]">
                {activity.details}
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}
