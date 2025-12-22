import { cn } from "@/lib/utils";
import { Component } from "@/type/component";
import { Tag as TagType } from "@simplist.blog/sdk";

type TagProps = {
  tag: TagType;
  className?: string;
};

export const Tag: Component<TagProps> = ({ tag, className }) => {
  return (
    <span
      style={{ backgroundColor: `${tag.color}30` }}
      className={cn(
        "text-white font-sans text-xs px-1.5 py-0.5 rounded-sm",
        className
      )}
    >
      {tag.name}
    </span>
  );
};
