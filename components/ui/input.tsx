import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full bg-[#2d2d2d] border-inside border-inside-default px-3",
        "focus:outline-none focus:ring-1",
        "text-white placeholder-neutral-400",
        "transition-colors",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white",
        className
      )}
      {...props}
    />
  )
}

export { Input }
