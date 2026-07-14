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

export const VSCODE_APP_ID = "383226320970055681"
export const FIGMA_APP_ID = "1510223984392671302"

export const DISCORD_PRESENCE_APPS: Record<string, DiscordPresenceAppEntry> = {
  [VSCODE_APP_ID]: {
    name: "VS Code",
    color: "#007ACC",
    icon: Icon_VSCode,
    extractMatchKey: (activity) => activity.state?.replace(/^Workspace:\s*/i, "").trim() || null,
  },
  [FIGMA_APP_ID]: {
    name: "Figma",
    color: "#a357ff",
    icon: Icon_Figma,
    extractMatchKey: (activity) => activity.state?.trim() || null,
  },
}
