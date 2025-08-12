"use client"

import { CheckIcon, ClipboardIcon, TerminalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { useEffect, useMemo, useState } from "react"

type CodeBlockCommandProps = React.ComponentProps<"pre"> & {
  __npm__?: string
  __yarn__?: string
  __pnpm__?: string
  __bun__?: string
}

export const CodeBlockCommand = ({
  __npm__,
  __yarn__,
  __pnpm__,
  __bun__,
  className,
  ...preProps
}: CodeBlockCommandProps) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  const options = useMemo(() => {
    return Object.entries({
      pnpm: __pnpm__,
      npm: __npm__,
      yarn: __yarn__,
      bun: __bun__,
    }).filter(([, value]) => Boolean(value && value.trim().length > 0)) as Array<
      ["pnpm" | "npm" | "yarn" | "bun", string]
    >
  }, [__npm__, __pnpm__, __yarn__, __bun__])

  const [packageManager, setPackageManager] = useState<"pnpm" | "npm" | "yarn" | "bun">(
    "pnpm"
  )

  useEffect(() => {
    if (!options.find(([key]) => key === packageManager)) {
      setPackageManager((options[0]?.[0] as typeof packageManager) ?? "pnpm")
    }
  }, [options, packageManager])

  const currentCommand = useMemo(() => {
    const found = options.find(([key]) => key === packageManager)
    return (found?.[1] ?? "").trim()
  }, [options, packageManager])

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <TerminalIcon className="size-4 text-muted-foreground" />
          {options.length > 0 && (
            <ToggleGroup
              type="single"
              size="sm"
              variant="outline"
              value={packageManager}
              onValueChange={(v) => v && setPackageManager(v as typeof packageManager)}
              className="rounded-none shadow-none"
            >
              {options.map(([key]) => (
                <ToggleGroupItem key={key} value={key} aria-label={key}>
                  {key}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          )}
        </div>
        <Button
          variant="outline"
          size="xs"
          aria-label={isCopied ? "Copié" : "Copier"}
          onClick={() => copyToClipboard(currentCommand)}
          disabled={!currentCommand}
        >
          {isCopied ? (
            <CheckIcon className="size-3" />
          ) : (
            <ClipboardIcon className="size-3" />
          )}
          <span className="sr-only">{isCopied ? "Copié" : "Copier"}</span>
        </Button>
      </div>

      <pre
        className={
          "bg-[#1d1d1d] p-3 text-sm border-inside border-inside-default whitespace-pre-wrap break-words md:whitespace-pre md:break-normal md:overflow-x-auto" +
          (className ? ` ${className}` : "")
        }
        {...preProps}
      >
        {currentCommand || ""}
      </pre>
    </div>
  )
}