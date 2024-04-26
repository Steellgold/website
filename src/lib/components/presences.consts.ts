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
  // AMAZON_PRIME_VIDEO,
  // TWITCH,
  // DISNEY_PLUS,
  // CANAL_PLUS
];

export const getActivityId = (activity: Activity | ActivityName): string => {
  return typeof activity === "string" ? activity : activity.application_id ?? "";
}

export const isAllowedActivity = (activity: Activity): boolean => {
  return ALLOWED_ACTIVITIES.includes(getActivityId(activity));
}

export const getActivityCardColor = (activity: Activity): string => {
  const activityId = getActivityId(activity);

  if (activityId === VS_CODE) return "border-[#2bb0f0] bg-[#2bb0f0]/10";
  if (activityId === FIGMA) return "border-[#a357ff] bg-[#a357ff]/10";
  if (activityId === NETFLIX) return "border-[#e8040e] bg-[#e8040e]/10";
  if (activityId === YOUTUBE) return "border-[#ff0000] bg-[#ff0000]/10";
  if (activityId === STACK_OVERFLOW) return "border-[#f48024] bg-[#f48024]/10";
  if (activityId === GITHUB) return "border-[#24292e] bg-[#24292e]/10";

  return "";
}

export const isActivityBigImage = (activity: Activity): boolean => {
  const activityId = getActivityId(activity);

  if (activityId === VS_CODE) return false;
  if (activityId === FIGMA) return true;
  if (activityId === NETFLIX) return true;
  if (activityId === YOUTUBE) return true;
  if (activityId === STACK_OVERFLOW) return true;
  if (activityId === GITHUB) return true;

  return true;
}