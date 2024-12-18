"use client";

import { Component } from "@/lib/components/utils/component";
import { cn } from "@/lib/utils";
import React from "react";

type BlackjackCardProps = React.HTMLAttributes<HTMLDivElement>;

export const BlackjackCard: Component<BlackjackCardProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(
      "bg-white bg-opacity-10 p-3 rounded-md border border-white border-opacity-20",
      className
    )} {...props}>
      {children}
    </div>
  )
}