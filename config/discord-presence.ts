import { Icon_Figma, Icon_VSCode } from "@/components/tech-icons"
import { FC, SVGProps } from "react"

export type DiscordPresenceAppEntry = {
  name: string
  color: string
  icon: FC<SVGProps<SVGSVGElement>>
}

export const VSCODE_APP_ID = "383226320970055681"
const FIGMA_APP_ID = "768942376403075073"

export const DISCORD_PRESENCE_APPS: Record<string, DiscordPresenceAppEntry> = {
  [VSCODE_APP_ID]: { name: "VS Code", color: "#007ACC", icon: Icon_VSCode },
  [FIGMA_APP_ID]: { name: "Figma", color: "#a357ff", icon: Icon_Figma },
}
