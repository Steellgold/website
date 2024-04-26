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
export const INSTAGRAM = "547436289960574977";
export const X = "802958757909889054";

type ActivityName = typeof VS_CODE | typeof FIGMA | typeof NETFLIX | typeof YOUTUBE | typeof STACK_OVERFLOW | typeof GITHUB | typeof AMAZON_PRIME_VIDEO | typeof TWITCH | typeof DISNEY_PLUS | typeof CANAL_PLUS | typeof INSTAGRAM | typeof X;

export const ALLOWED_ACTIVITIES = [
  VS_CODE,
  FIGMA,
  NETFLIX,
  YOUTUBE,
  STACK_OVERFLOW,
  GITHUB,
  TWITCH,
  AMAZON_PRIME_VIDEO,
  DISNEY_PLUS,
  CANAL_PLUS,
  INSTAGRAM,
  X, // formely known as "Twitter" LOL
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
  if (activityId === GITHUB) return "border-[#1a1e21] bg-[#1a1e21]/10";
  if (activityId === TWITCH) return "border-[#6441a5] bg-[#6441a5]/10";
  if (activityId === AMAZON_PRIME_VIDEO) return "border-[#00a8e1] bg-[#00a8e1]/10";
  if (activityId === DISNEY_PLUS) return "border-[#2ab6bb] bg-[#2ab6bb]/10";
  if (activityId === CANAL_PLUS) return "border-[#1a1a1a] bg-[#1a1a1a]/10";
  if (activityId === INSTAGRAM) return "border-[#c13584] bg-[#c13584]/10";
  if (activityId === X) return "border-[#f7f9f9] bg-[#f7f9f9]/5";
  return "border-[#000000] bg-[#000000]/10";
}

export const isActivityBigImage = (activity: Activity): boolean => {
  const activityId = getActivityId(activity);
  if (activityId === VS_CODE) return false;

  return true;
}

export const fixActivityGitHubImageLink = (activity: Activity): string => {
  if (activity.application_id === getActivityId(GITHUB)) {
    const link = activity.assets?.large_image.replace('mp:external/', '').split('/');
    
    if (link?.[2] == "avatars.githubusercontent.com") {
      return `https://avatars.githubusercontent.com/u/${link?.[4]}`;
    }
    
    if (link?.[2] == "cdn.rcd.gg") {
      return "https://cdn.rcd.gg/PreMiD/websites/G/GitHub/assets/logo.png";
    }
      
    return `https://${link?.[3]}/${link?.[4]}/${link?.[5]}?v=4`;
  }

  return activity.assets?.large_image ?? "";
}