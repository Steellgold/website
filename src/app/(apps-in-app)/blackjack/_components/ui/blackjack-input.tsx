"use client";

import { Component } from "@/lib/components/utils/component";
import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes, DetailedHTMLProps } from "react";

type BlackjackInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  inputSize?: "default" | "small";
};

export const BlackjackInput: Component<BlackjackInputProps> = ({ className, inputSize = "default", ...props }) => {
  return (
    <input
      className={cn(
        "bg-white bg-opacity-10 text-white rounded-md border border-white border-opacity-20",
        "focus:ring-1 focus:ring-offset-1 focus:outline-none",
        "placeholder-white placeholder-opacity-50",
        "transition-colors duration-300 ease-in-out",

        "disabled:bg-opacity-10 disabled:border-opacity-20 disabled:text-opacity-50 disabled:cursor-not-allowed",
        className,
        {
          "px-3 py-2 text-base": inputSize === "default",
          "px-2 py-1 text-sm": inputSize === "small",
        }
      )}
      {...props}
    />
  );
};