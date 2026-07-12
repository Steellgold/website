"use client";

import { RiCheckLine, RiCodeSSlashLine, RiFileCopyLine } from "@remixicon/react";
import { FC, PropsWithChildren, useState } from "react";

const languageNames: Record<string, string> = {
  ts: "TypeScript",
  js: "JavaScript",
  tsx: "TypeScript React",
  jsx: "JavaScript React",
  prisma: "Prisma",
  py: "Python",
  html: "HTML",
  css: "CSS",
  json: "JSON",
  xml: "XML",
  markdown: "Markdown",
  md: "Markdown",
  mdx: "MDX",
  shell: "Shell",
  sh: "Shell",
  bash: "Bash",
  yaml: "YAML",
};

type CodeWindowProps = {
  language: string;
  textCode: string;
} & PropsWithChildren;

export const CodeWindow: FC<CodeWindowProps> = ({ language, textCode, children }) => {
  const name = languageNames[language] ?? language;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-border my-4">
      <div className="bg-card px-4 py-2 flex items-center justify-between border-b border-border">
        <div className="flex flex-row items-center gap-2">
          <RiCodeSSlashLine className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">{name}</span>
        </div>

        <button onClick={handleCopy} aria-label="Copy code" className="text-muted-foreground hover:text-foreground transition-colors">
          {copied ? <RiCheckLine className="w-4 h-4" /> : <RiFileCopyLine className="w-4 h-4" />}
        </button>
      </div>

      <div className="p-4 bg-card/40 overflow-x-auto text-sm">{children}</div>
    </div>
  );
};
