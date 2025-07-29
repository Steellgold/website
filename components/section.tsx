import { piano } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Component } from "@/type/component";
import { PropsWithChildren } from "react";

type Section = {
  name: string;
  description?: string;
} & PropsWithChildren;

export const Section: Component<Section> = ({ name, description, children }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col gap-1">
        <h2 className={cn("text-4xl sm:text-5xl", piano.className)}>
          {name}
        </h2>

        {description && (
          <p className="text-gray-300">
            {description}
          </p>
        )}
      </div>

      {children}
    </div>
  );
};
