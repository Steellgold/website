import { iconsByName, SkillName } from "@/components/icons";
import { Component } from "@/type/component";
import Link from "next/link";

type Skill = {
  name: SkillName;
  favorite?: boolean;
  minimized?: boolean;
};

export const Skill: Component<Skill> = ({
  name,
  favorite = false,
  minimized = false,
}) => {
  const paddingClass = !minimized ? "px-1.5 py-0.5" : "";
  const borderClass = favorite
    ? "border-inside-preferred"
    : "border-inside-default";

  const Icon = favorite ? iconsByName[name].light : iconsByName[name].normal;

  return (
    <Link
      href={iconsByName[name].url}
      className={[
        "flex flex-row items-center gap-2 text-xs sm:text-lg bg-clip-padding border-inside",
        paddingClass,
        borderClass,
      ].join(" ")}
      style={{ "--border-inside-size": "1px" } as React.CSSProperties}
    >
      <Icon />
      {name}
    </Link>
  );
};