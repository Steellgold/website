"use client";

import { Component } from "@/lib/components/utils/component";
import { cn } from "@/lib/utils";
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type BlackjackButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  size?: "default" | "icon" | "small";
}

export const BlackjackButton: Component<BlackjackButtonProps> = ({ children, className, size = "default", ...props }) => {
  return (
    <button className={cn(
      "bg-white bg-opacity-10 text-white rounded-md flex flex-row items-center group border border-white border-opacity-20",
      "hover:bg-opacity-30 hover:border-opacity-40",
      "transition-colors duration-300 ease-in-out",

      "disabled:bg-opacity-10 disabled:border-opacity-20 disabled:text-opacity-50 disabled:cursor-not-allowed",
      className, {
        "px-3 py-1": size === "default",
        "px-2 py-1": size === "small",
        "px-0.5 py-0.5": size === "icon"
      }
    )} {...props}>
      {children}
    </button>
  )
}

type BlackjackButtonLinkProps = Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'href'> & {
  size?: "default" | "icon" | "small";
  href: string;
}

export const BlackjackButtonLink: Component<BlackjackButtonLinkProps> = ({ children, className, size = "default", href, ...props }) => {
  return (
    <a 
      href={href}
      className={cn(
        "bg-white bg-opacity-10 text-white rounded-md flex flex-row items-center group border border-white border-opacity-20",
        "hover:bg-opacity-30 hover:border-opacity-40",
        "transition-colors duration-300 ease-in-out",
        "disabled:bg-opacity-10 disabled:border-opacity-20 disabled:text-opacity-50 disabled:cursor-not-allowed",
        className, 
        {
          "px-3 py-1": size === "default",
          "px-2 py-1": size === "small",
          "px-0.5 py-0.5": size === "icon"
        }
      )} 
      {...props}
    >
      {children}
    </a>
  )
}