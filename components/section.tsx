import { piano } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Component } from "@/type/component";
import { PropsWithChildren } from "react";

type Section = {
  name: string;
} & PropsWithChildren;

export const Section: Component<Section> = ({ name, children }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h2 className={cn("text-4xl sm:text-5xl", piano.className)}>
        {name}
      </h2>

      {children}
    </div>
  );
};
