"use client";

import { useEffect, useState } from "react";

export const TableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
    const newHeadings = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.innerText,
      level: Number(heading.tagName.slice(1)),
    }));
    setHeadings(newHeadings);
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Ajustez cette valeur pour déterminer quand un titre devient actif
      const activeHeading = headings.find((heading) => {
        const element = document.getElementById(heading.id);
        return element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition;
      });
      setActiveId(activeHeading ? activeHeading.id : "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  return (
    // Fixed in right side on desktop and not shown on mobile
    <nav className="hidden lg:block fixed top-20 right-0 w-64 h-96 overflow-y-auto">
      <h3>Table des matières</h3>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={heading.id === activeId ? "active" : ""}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};