import { Dayjs } from "dayjs";
import { Stack } from "./stack.type";

export type Project = {
  title: string;
  description: string;
  type: "open-source" | "pro";
  duration: {
    start: Dayjs;
    end?: Dayjs;
  }
  url?: string;
  stacks: Stack[];
}