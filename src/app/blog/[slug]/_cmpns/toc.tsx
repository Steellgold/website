"use client";

import { Component } from "@/lib/components/utils/component";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

type Heading = {
  id: string;
  title: string;
  level: number;
}

type TableOfContentsProps = {
  content: string;
}


const TableOfContents: Component<TableOfContentsProps> = ({ content }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headingLines = content
      .split("\n")
      .filter((line: string) => line.startsWith("#"))
      .map((line: string) => {
        const match = line.match(/^#+/);
        const level = match ? match[0].length : 0;
        const title = line.replace(/^#+\s/, "");
        return {
          id: title,
          title,
          level
        };
      });

    setHeadings(headingLines);
  }, [content]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    headings.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setActiveId(heading.id);
              }
            });
          },
          { rootMargin: "-20% 0px -80% 0px" }
        );
        
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if  (!headings.length) {
    return <></>;
  }

  return (
    <div className={cn(
      "hidden lg:block fixed w-72 max-h-[calc(100vh-8rem)] overflow-y-auto p-4 rounded-lg border",
      "top-20 right-4 z-10",
      "bg-background/95"
    )}>
      <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
      <nav className="space-y-2">
        {headings.map((heading, index) => (
          <div
            key={index}
            style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
            className="text-sm"
          >
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`hover:text-primary transition-colors duration-200 text-left ${
                activeId === heading.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {heading.title}
            </button>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContents;