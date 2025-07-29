import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const RESERVED_SHORT_LINKS = [
  "new",
  "not-found",
  "blog"
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