import { useState, useEffect } from "react";

type Lang = "fr" | "en";

export const useLang: () => Lang = () => {
  const [language, setLanguage] = useState<Lang>("en");

  useEffect(() => {
    const detectLanguage = (): Lang => {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("fr")) {
        return "fr";
      } else if (browserLang.startsWith("en")) {
        return "en";
      }
      return "en";
    };

    setLanguage(detectLanguage());
  }, []);

  return language;
}