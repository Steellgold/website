"use client";

import { useViewMode } from "../hooks/mode.store";
import { Button } from "./ui/button";

export const CVButton = () => {
  const { viewMode, setViewMode } = useViewMode();

  return (
    <Button onClick={() => setViewMode(viewMode == "normal" ? "cv" : "normal")} variant={"outline"} size={"sm"}>
      {viewMode == "normal" ? "View the CV" : "View the Portfolio"}
    </Button>
  );
};