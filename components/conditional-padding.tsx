'use client';

import { useAppContext } from "@/contexts/app-context";
import { cn } from "@/lib/utils";
import { Component } from "@/type/component";
import { PropsWithChildren } from "react";

export const ConditionalPadding: Component<PropsWithChildren> = ({ children }) => {
  const { is404 } = useAppContext();
  
  return (
    <div className={cn(
      "relative z-10",
      is404 ? "" : "p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12",
      "max-w-4xl mx-auto"
    )}>
      {children}
    </div>
  );
}