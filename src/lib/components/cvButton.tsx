"use client";

import { useViewMode } from "../hooks/mode.store";
import { Button } from "./ui/button";

export const CVButtons = () => {
  const { viewMode, setViewMode } = useViewMode();

  return <div className="flex flex-row items-center gap-2" id="cv-buttons">
    <Button onClick={() => setViewMode(viewMode == "normal" ? "cv" : "normal")} variant={"outline"} size={"sm"}>
      {viewMode == "normal" ? "View the CV" : "View the Portfolio"}
    </Button>
  </div>;
};