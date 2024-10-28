"use client";

import { History } from "lucide-react"
import { Button } from "../ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import { use2048 } from "./hooks/use-2048";

export const E2048_History = () => {
  const { history } = use2048();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} className="p-2">
          <History size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            Game History
          </SheetTitle>
          <SheetDescription>
            <pre>
              {JSON.stringify(history, null, 2)}
            </pre>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
      </Sheet>
  )
}