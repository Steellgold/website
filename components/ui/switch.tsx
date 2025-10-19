"use client"

import * as SwitchPrimitive from "@radix-ui/react-switch"
import * as React from "react"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full transition-all outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
        "border-inside border-inside-default",
        "data-[state=unchecked]:bg-[#1d1d1d] data-[state=checked]:bg-white",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-4 rounded-full ring-0 transition-transform shadow-sm",
          "data-[state=unchecked]:bg-white data-[state=checked]:bg-[#121212]",
          "data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
