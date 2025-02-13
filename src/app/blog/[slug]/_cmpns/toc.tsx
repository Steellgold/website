"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { ScrollArea } from "@/lib/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/lib/components/ui/sheet"
import { Button } from "@/lib/components/ui/button"

type Heading = {
  id: string
  title: string
  level: number
}

type TableOfContentsProps = {
  content: string
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState("")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const headingLines = content
      .split("\n")
      .filter((line: string) => line.startsWith("#"))
      .map((line: string) => {
        const match = line.match(/^#+/)
        const level = match ? match[0].length : 0
        const title = line.replace(/^#+\s/, "")
        return {
          id: title,
          title,
          level,
        }
      })

    setHeadings(headingLines)
  }, [content])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveId(heading.id)
              }
            })
          },
          { rootMargin: "-20% 0px -80% 0px" },
        )

        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setOpen(false)
    }
  }

  if (!headings.length) {
    return null
  }

  const TableOfContentsContent = () => (
    <ScrollArea className="h-full">
      <div className="py-4">
        <h3 className="text-lg font-semibold mb-4">Table des matières</h3>
        <nav className="space-y-2">
          {headings.map((heading, index) => (
            <div key={index} style={{ paddingLeft: `${(heading.level - 1) * 12}px` }} className="text-sm">
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={cn(
                  "hover:text-primary transition-colors duration-200 text-left",
                  activeId === heading.id ? "text-primary" : "text-muted-foreground",
                )}
              >
                {heading.title}
              </button>
            </div>
          ))}
        </nav>
      </div>
    </ScrollArea>
  )

  return (
    <>
      {/* XL SCREENS */}
      <div
        className={cn(
          "hidden xl:block fixed w-72 h-[calc(100vh-8rem)] overflow-hidden p-4 rounded-lg border",
          "top-20 right-4 z-10",
          "bg-background/95",
        )}
      >
        <TableOfContentsContent />
      </div>

      {/* MOBILE SCREENS OR OTHERRRRRS */}
      <div className="xl:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="fixed top-20 right-4 z-40">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <TableOfContentsContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

export default TableOfContents

