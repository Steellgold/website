import { Stack } from "./stack.type";

export type Project = {
  title: string;
  description: string;
  type: "open-source" | "personal" | "professional";
  url?: string;
  stacks: Stack[];
}