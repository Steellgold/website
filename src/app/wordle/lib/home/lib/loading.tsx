import { Skeleton } from "@/lib/components/ui/skeleton";
import { ReactElement } from "react";

export const QuestsLoading = (): ReactElement => {
  return (
    <>
      {["", "", ""].map((_, i) => (
        <Skeleton key={i} className="w-full h-16" />
      ))}
    </>
  );
}