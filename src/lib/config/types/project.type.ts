import { Dayjs } from "dayjs";
import { Stack } from "./stack.type";
import { ReactElement } from "react";

export type Project = {
  title: string;
  description: string;
  cvDescription?: ReactElement | string;
  type: "open-source" | "pro";
  duration: {
    start: Dayjs;
    end?: Dayjs;
  }
  url?: string;
  urls?: Link[];
  stacks: Stack[];
}

type Link = {
  title: string;
  url: string;
}