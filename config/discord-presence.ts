import { Icon_Figma, Icon_VSCode } from "@/components/tech-icons"
import type { DiscordActivity } from "@/type/discord"
import { FC, SVGProps } from "react"

export type DiscordPresenceAppEntry = {
  name: string
  color: string
  icon: FC<SVGProps<SVGSVGElement>>
  /** Extracts the project/workspace name to match against `Project.workspaceNames`, or null if not determinable. */
  extractMatchKey: (activity: DiscordActivity) => string | null
}

/** Keyed by `activity.name` (lowercased), not `applicationId` — the presence bridge reuses the same applicationId across unrelated activities. */
export const DISCORD_PRESENCE_APPS: Record<string, DiscordPresenceAppEntry> = {
  "visual studio code": {
    name: "VS Code",
    color: "#007ACC",
    icon: Icon_VSCode,
    extractMatchKey: (activity) => activity.state?.replace(/^Workspace:\s*/i, "").trim() || null,
  },
  figma: {
    name: "Figma",
    color: "#a357ff",
    icon: Icon_Figma,
    extractMatchKey: (activity) => activity.state?.trim() || null,
  },
}

export const getPresenceAppEntry = (activity: Pick<DiscordActivity, "name">): DiscordPresenceAppEntry | undefined =>
  DISCORD_PRESENCE_APPS[activity.name.toLowerCase()]
