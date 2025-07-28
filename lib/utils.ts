import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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