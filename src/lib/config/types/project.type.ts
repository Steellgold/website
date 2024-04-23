import { Stack } from "./stack.type";

export type Project = {
  title: string;
  description: string;
  type: "open-source" | "pro";
  url?: string;
  stacks: Stack[];
}