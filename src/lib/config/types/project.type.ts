import { Dayjs } from "dayjs";
import { Stack } from "./stack.type";
import { ReactElement } from "react";

export type Project = {
  title: string;
  description: {
    en: ReactElement | string;
    fr: ReactElement | string
  };
  cvDescription?: {
    en: ReactElement;
    fr: ReactElement;
  };
  type: "open-source" | "pro" | "team";
  duration: {
    start: Dayjs;
    end?: Dayjs;
  }
  url?: string;
  urls?: Link[];
  stacks: Stack[];

  isHighlighted?: boolean;
  highlightUrl?: string;

  showOnCv?: boolean;
}

type Link = {
  icon?: ReactElement;
  title: string;
  url: string;
}