export const formatAge = (
  birth: Date,
  at: Date,
  locale: "fr" | "en"
): string => {
  let years = at.getFullYear() - birth.getFullYear();
  let months = at.getMonth() - birth.getMonth();
  const days = at.getDate() - birth.getDate();

  if (days < 0) months--;
  if (months < 0) {
    years--;
    months += 12;
  }

  if (locale === "fr") {
    return months > 0 ? `${years} ans et ${months} mois` : `${years} ans`;
  }

  return months > 0 ? `${years} years and ${months} months` : `${years} years`;
};

export const formatLifespan = (
  birth: Date,
  death: Date, // 🌹
  locale: "fr" | "en"
): string => {
  const formatter = new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return `${formatter.format(birth)} – ${formatter.format(death)}`;
};