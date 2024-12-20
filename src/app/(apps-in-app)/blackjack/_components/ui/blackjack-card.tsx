"use client";

import { Component } from "@/lib/components/utils/component";
import { cn } from "@/lib/utils";
import React from "react";

export type BlackjackCardVariant = "default" | "destructive" | "success" | "warning"; 

type BlackjackCardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: BlackjackCardVariant;
}

export const BlackjackCard: Component<BlackjackCardProps> = ({ children, className, variant = "default", ...props }) => {
  return (
    <div className={cn(
      "bg-white bg-opacity-10 rounded-md border p-3 border-white border-opacity-20",
      "transition-colors duration-300 ease-in-out",
      className, {
        "bg-red-500 border-red-300": variant === "destructive",
        "bg-green-500 border-green-300": variant === "success",
        "bg-yellow-500 border-yellow-300": variant === "warning"
      }
    )} {...props}>
      {children}
    </div>
  )
}