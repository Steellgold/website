import { Activity } from "react-use-lanyard";

export const VS_CODE = "782685898163617802";
export const FIGMA = "768942376403075073";
export const NETFLIX = "926541425682829352";
export const YOUTUBE = "463097721130188830";
export const STACK_OVERFLOW = "610123745033584651";
export const GITHUB = "607587875122446359";
export const AMAZON_PRIME_VIDEO = "705139844883677224";
export const TWITCH = "802958789555781663";
export const DISNEY_PLUS = "630236276829716483";
export const CANAL_PLUS = "844106861711196179";

type ActivityName = typeof VS_CODE | typeof FIGMA | typeof NETFLIX | typeof YOUTUBE | typeof STACK_OVERFLOW | typeof GITHUB | typeof AMAZON_PRIME_VIDEO | typeof TWITCH | typeof DISNEY_PLUS | typeof CANAL_PLUS;

export const ALLOWED_ACTIVITIES = [
  VS_CODE,
  FIGMA,
  NETFLIX,
  YOUTUBE,
  STACK_OVERFLOW,
  GITHUB,

  // Not configured yet
  // TWITCH,
  // AMAZON_PRIME_VIDEO,
  // DISNEY_PLUS,
  // CANAL_PLUS
];

export const COLORS: Record<ActivityName, string> = {
  [VS_CODE]: "#2bb0f0",
  [FIGMA]: "#a357ff",
  [NETFLIX]: "#e8040e",
  [YOUTUBE]: "#ff0000",
  [STACK_OVERFLOW]: "#f48024",
  [GITHUB]: "#1a1e21",
  [TWITCH]: "#000000",
  [AMAZON_PRIME_VIDEO]: "#146eb4",
  [DISNEY_PLUS]: "#000000",
  [CANAL_PLUS]: "#000000",
};

export const getActivityId = (activity: Activity | ActivityName): string => {
  return typeof activity === "string" ? activity : activity.application_id ?? "";
}

export const isAllowedActivity = (activity: Activity): boolean => {
  return ALLOWED_ACTIVITIES.includes(getActivityId(activity));
}

export const getActivityCardColor = (activity: Activity): string => {
  const activityId = getActivityId(activity);
  const color = COLORS?.[activityId as ActivityName];
  return `border-[${color}] bg-[${color}]/10`;
}

export const isActivityBigImage = (activity: Activity): boolean => {
  const activityId = getActivityId(activity);

  if (activityId === VS_CODE) return false;
  if (activityId === FIGMA) return true;
  if (activityId === NETFLIX) return true;
  if (activityId === YOUTUBE) return true;
  if (activityId === STACK_OVERFLOW) return true;
  if (activityId === GITHUB) return true;
  if (activityId === TWITCH) return true;

  return true;
}

export const fixActivityGitHubImageLink = (activity: Activity): string => {
  if (activity.application_id === getActivityId(GITHUB)) {
    console.log(activity.assets?.large_image);

    const link = activity.assets?.large_image.replace('mp:external/', '').split('/');
    console.log(link);
    if (link?.[2] == "avatars.githubusercontent.com")
      return `https://avatars.githubusercontent.com/u/${link?.[4]}`;
    if (link?.[2] == "cdn.rcd.gg")
      return "https://cdn.rcd.gg/PreMiD/websites/G/GitHub/assets/logo.png";
    return `https://${link?.[3]}/${link?.[4]}/${link?.[5]}?v=4`;
  }

  return activity.assets?.large_image ?? "";
}