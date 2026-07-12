import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { SKILLS, type SkillName } from "@/config/skills";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

type SkillBadgeProps = {
  name: string;
  minimized?: boolean;
  className?: string;
};

export const SkillBadge: FC<SkillBadgeProps> = ({ name, minimized = false, className }) => {
  const entry = SKILLS[name as SkillName];
  const badgeClass = cn(
    "inline-flex items-center gap-1.5 rounded-md border border-border bg-card",
    "hover:bg-accent transition-colors",
    minimized ? "text-xs px-1.5 py-1" : "text-sm px-[9.5px] py-[5.5px]",
    className
  );

  if (!entry) {
    if (minimized) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <span className={badgeClass}>{name.slice(0, 2)}</span>
          </TooltipTrigger>
          <TooltipContent>{name}</TooltipContent>
        </Tooltip>
      );
    }

    return <span className={badgeClass}>{name}</span>;
  }

  const { icon: Icon, url } = entry;

  const link = (
    <Link href={url} target="_blank" rel="noopener noreferrer" className={badgeClass}>
      <Icon className="w-3.5 h-3.5 shrink-0" />
      {!minimized && <span>{name}</span>}
    </Link>
  );

  if (!minimized) return link;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{link}</TooltipTrigger>
      <TooltipContent>{name}</TooltipContent>
    </Tooltip>
  );
};