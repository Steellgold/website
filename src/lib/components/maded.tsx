"use client";

import { useViewMode } from "../stores/mode.store";

export const MadeWith = () => {
  const { viewMode } = useViewMode();

  if (viewMode === "cv") return <></>;

  return (
    <div className="mt-7 mb-7">
      <p className="text-white text-center">Made with ❤️ by Gaëtan</p>
    </div>
  );
};