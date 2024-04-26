import { PropsWithChildren } from "react";
import { Component } from "./utils/component";
import { Card } from "./ui/card";
import { cn } from "../utils";

export const CustomCard: Component<PropsWithChildren & {
  className?: string,
  active?: boolean,
  noHover?: boolean,
}> = ({ children, className, active = false, noHover = false }) => {
  return (
    <Card className={cn(
      "h-full border-[2px]",
      "transition-colors duration-300",
      className, {
        "border-[#2b2b2b] bg-[#1a1a1a]": active,
        "hover:border-[#1a1a1a] hover:bg-[#161616]": active && !noHover,

        "bg-[#161616] border-[#1a1a1a]" : !active,
        "hover:bg-[#1a1a1a] hover:border-[#2b2b2b]" : !active && !noHover
      }
    )}>
      {children}
    </Card>
  );
}