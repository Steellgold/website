"use client";

import { piano, syne } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Component } from "@/type/component";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { PropsWithChildren } from "react";

type Section = {
  name: string;
  description?: string;
} & PropsWithChildren;

export const Section: Component<Section> = ({ name, description, children }) => {
  const t = useTranslations("common");

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

      {name.toLowerCase() == "blog" && (
        <Link
          href="https://simplist.blog?ref=gaetanhuszovits"
          target="_blank"
          className={cn("text-sm flex items-center gap-1.5 justify-end mt-4.5")}
        >
          <p>{t("poweredBy")}</p>
          <span className={cn(syne.className, "")}>Simplist</span>
        </Link>
      )}
    </div>
  );
};
