"use client";

import { Component } from "@/lib/components/utils/component";
import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type BlackjackButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const BlackjackButton: Component<BlackjackButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={cn(
      "bg-white bg-opacity-10 text-white rounded-md px-3 py-1 flex flex-row items-center group border border-white border-opacity-20",
      className
    )} {...props}>
      {children}
    </button>
  )
}