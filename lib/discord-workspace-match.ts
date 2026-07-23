import { getPresenceAppEntry } from "@/config/discord-presence"
import type { Project } from "@/config/projects"
import type { DiscordActivity, DiscordPresence } from "@/type/discord"

export const getMatchingPresenceActivities = (
  presence: DiscordPresence | null,
  project: Project
): DiscordActivity[] => {
  if (!presence || !project.workspaceNames || project.workspaceNames.length === 0) return []

  const normalizedNames = project.workspaceNames.map((name) => name.toLowerCase())

  return presence.activities.filter((activity) => {
    const entry = getPresenceAppEntry(activity)
    if (!entry) return false

    const matchKey = entry.extractMatchKey(activity)
    return matchKey !== null && normalizedNames.includes(matchKey.toLowerCase())
  })
}
