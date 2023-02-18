import dayjs from "dayjs";
import { getActivities } from "../presence";
import type { IActivity } from "./activity.types";

const NETFLIX_ID = "926541425682829352";
const TWITCH_ID = "802958789555781663";
const PRIME_VIDEO_ID = "705139844883677224";
const YOUTUBE_ID = "463097721130188830";

let notInclude = ["Browsing...", "Viewing series:", "Viewing movie:", "Visualisation de la page d'accueil", "Visualisation du canal:", "Navigue à travers", "Regarde ses vidéos", "Regarde les tendances"]; // oof youtube..

const getID = (name: "Netflix" | "Twitch" | "Prime Video" | "YouTube") : string => {
  switch (name) {
    case "Netflix":
      return NETFLIX_ID;
    case "Twitch":
      return TWITCH_ID;
    case "Prime Video":
      return PRIME_VIDEO_ID;
    case "YouTube":
      return YOUTUBE_ID;
  }
}

export const getWatching = async (name: "Netflix" | "Twitch" | "Prime Video" | "YouTube") : Promise<IActivity | null> => {
  const presence = await getActivities();
  if (!presence.data.activities) return null;

  const activity = presence.data.activities.find((activity) => activity.application_id === getID(name));
  if (!activity) return null;

  if (notInclude.includes(activity?.details)) return null;

  return {
    details: activity.details,
    name: activity.name,
    state: activity.state,
    created_at: activity.created_at,
    end_at: activity.timestamps?.end ?? null,

    isPaused: ["Paused", "En pause"].includes(activity.assets.small_text)
  }
}