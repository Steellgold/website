import { getActivities } from "../presence";
import type { ActivityList, IActivity, PlayingList, WatchingList } from "./activity.types";

const NETFLIX_ID = "926541425682829352";
const TWITCH_ID = "802958789555781663";
const PRIME_VIDEO_ID = "705139844883677224";
const YOUTUBE_ID = "463097721130188830";
const FIGMA_ID = "768942376403075073";
const VSCODE_ID = "383226320970055681";
const STACKOVERFLOW_ID = "610123745033584651";
const GITHUB_ID = "607587875122446359";
const COINBASE_ID = "796810487177674822";
const TWITTER_ID = "802958757909889054";
const INSTAGRAM_ID = "547436289960574977";

const notInclude = [
  "Browsing...",
  "Viewing series:",
  "Viewing movie:",
  "Visualisation de la page d'accueil",
  "Visualisation du canal:",
  "Navigue à travers",
  "Regarde ses vidéos",
  "Regarde les tendances"
]; // oof youtube..

const getID = (name: ActivityList) : string => {
  switch (name) {
    case "Netflix":
      return NETFLIX_ID;
    case "Twitch":
      return TWITCH_ID;
    case "Prime Video":
      return PRIME_VIDEO_ID;
    case "YouTube":
      return YOUTUBE_ID;
    case "Figma":
      return FIGMA_ID;
    case "Visual Studio Code":
      return VSCODE_ID;
    case "Stack Overflow":
      return STACKOVERFLOW_ID;
    case "GitHub":
      return GITHUB_ID;
    case "Coinbase":
      return COINBASE_ID;
    case "Twitter":
      return TWITTER_ID;
    case "Instagram":
      return INSTAGRAM_ID;
  }
};

export const getWatching = async(name: WatchingList) : Promise<IActivity | null> => {
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
  };
};

export const getPlaying = async(name: PlayingList) : Promise<IActivity | null> => {
  const presence = await getActivities();
  if (!presence.data.activities) return null;

  const activity = presence.data.activities.find((activity) => activity.name === name);
  if (!activity) return null;

  return {
    details: activity.details,
    name: activity.name,
    state: activity.state,
    created_at: null,
    end_at: null,

    isPaused: false
  };
};