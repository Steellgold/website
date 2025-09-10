import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const RESERVED_SHORT_LINKS = [
  "new",
  "not-found",
  "blog",
  "registry",
  "ui",
  "links",
  "api",
  "md",
  "about",
  "privacy",
  "terms"
]

export const cn = (...inputs: ClassValue[]) => {
  const merged = twMerge(clsx(inputs));
  
  const customClasses = [
    "border-inside",
    "border-inside-default",
    "border-inside-preferred",
    "border-inside-working",
    "border-inside-linkedin",
    "border-inside-github",
    "border-inside-x",
    "border-inside-instagram"
  ];
  
  const allClasses = clsx(inputs).split(" ").filter(Boolean);
  
  const preservedCustomClasses = allClasses.filter(cls => 
    customClasses.includes(cls)
  );
  
  const result = [merged, ...preservedCustomClasses].filter(Boolean).join(" ");
  
  return result;
};

export const getIp = (headersList: Headers) => {
  const forwardedFor = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  if (realIp) return realIp.trim();

  return "0.0.0.0";
};

export const isBotOrCrawler = (userAgent: string): boolean => {
  if (!userAgent) return true;
  
  const botPatterns = [
    // Discord
    /discord/i,
    /discordbot/i,
    // Slack
    /slack/i,
    /slackbot/i,
    // Telegram
    /telegram/i,
    /telegrambot/i,
    // WhatsApp
    /whatsapp/i,
    // Facebook
    /facebook/i,
    /facebookexternalhit/i,
    // Twitter/X
    /twitter/i,
    /twitterbot/i,
    /x-bot/i,
    // LinkedIn
    /linkedin/i,
    /linkedinbot/i,
    // Bots generic
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i,
    /preview/i,
    /embed/i,
    // Headless browsers
    /headless/i,
    /phantomjs/i,
    /selenium/i,
    /puppeteer/i,
    // Preview services
    /preview/i,
    /embed/i,
    /iframe/i,
    // Other platforms
    /skype/i,
    /teams/i,
    /zoom/i,
    /discordapp/i,
    /t\.me/i,
    /wa\.me/i,
    /fb\.me/i,
    /t\.co/i,
    /lnkd\.in/i,
  ];

  return botPatterns.some(pattern => pattern.test(userAgent));
}