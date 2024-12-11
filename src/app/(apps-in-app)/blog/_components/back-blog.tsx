"use client";

import { Button } from "@/lib/components/ui/button";
import { useLang } from "@/lib/stores/lang.store";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";
import { ScrollProgressBar } from "./post-scrollbar";
import { Component } from "@/lib/components/utils/component";

type BackToBlogButtonProps = {
  onlyButton?: boolean;

  data?: {
    title?: string;
    createdAt?: string;
  }
};

const BackButton = (): ReactElement => {
  const { lang } = useLang();

  return (
    <Button
      asChild
      size={"sm"}
      variant={"outline"}
      className="shadow-lg transition-all absolute -right-0 top-0 m-3 z-[8888]"
    >
      <Link href={"/blog"} className="flex items-center gap-1">
        <ArrowLeft className="h-4 w-4" />
        <span className="hidden sm:block">
          {lang === "en" ? "Back" : "Retour"}
        </span>
      </Link>
    </Button>
  );
}

export const BackToBlogButton: Component<BackToBlogButtonProps> = ({ onlyButton, data }) => {
  if (onlyButton) return <BackButton />;

  return (
    <>
      <div className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 fixed top-0 left-0 w-full h-14 z-[9999] flex flex-row justify-between items-center">
        {data && (
          <div className="flex flex-col gap-0.5 p-2">
            <p>{data.title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {data.createdAt}
            </p>
          </div>
        )}

        <BackButton />
      </div>

      <div className="h-14" />
    </>
  );
};