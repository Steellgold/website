import { VSCODE_APP_ID } from "@/config/discord-presence"
import type { Project } from "@/config/projects"
import type { DiscordPresence } from "@/type/discord"

export const getActiveVSCodeWorkspace = (presence: DiscordPresence | null): string | null => {
  const activity = presence?.activities.find((a) => a.applicationId === VSCODE_APP_ID)
  if (!activity?.state) return null

  return activity.state.replace(/^Workspace:\s*/i, "").trim()
}

export const projectMatchesWorkspace = (project: Project, workspace: string | null): boolean => {
  if (!workspace || !project.workspaceNames || project.workspaceNames.length === 0) return false

  const normalizedWorkspace = workspace.toLowerCase()
  return project.workspaceNames.some((name) => name.toLowerCase() === normalizedWorkspace)
}
