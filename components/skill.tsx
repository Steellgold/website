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
  const paddingClass = !minimized
    ? "text-xs sm:text-lg px-1.5 py-0.5"
    : "text-xs px-1 py-0.5";

  const borderClass = favorite
    ? "border-inside-preferred bg-white"
    : "border-inside-default bg-[#1d1d1d]";

  const Icon = favorite ? iconsByName[name].light : iconsByName[name].normal;

  return (
    <Link
      href={iconsByName[name].url}
      className={[
        "flex flex-row items-center gap-2 bg-clip-padding border-inside",
        paddingClass,
        borderClass,
      ].join(" ")}
      style={{ "--border-inside-size": "1px" } as React.CSSProperties}
      title={minimized ? name : undefined}
    >
      <Icon />
      {name}
    </Link>
  );
};