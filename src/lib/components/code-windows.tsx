"use client";

import { PropsWithChildren, ReactElement } from "react";
import { Component } from "./utils/component";
import { Clipboard, ClipboardCheck, Code2 } from "lucide-react";
import { useCopyToClipboard } from "../hooks/use-copy-clipboard";
import { toast } from "sonner";

const languageNames: {
  [key: string]: string
} = {
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
}

type CodeWindowProps = {
  language: string;
  textCode: string;

} & PropsWithChildren;

export const CodeWindow: Component<CodeWindowProps> = ({ language, textCode, children }): ReactElement => {
  const name = languageNames[language] || language;
  const [copiedText, copy] = useCopyToClipboard();

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-black/70 my-4 hover:border-black/50 hover:dark:border-gray-300/15 transition-all duration-200">
      <div className="bg-gray-100 dark:bg-black/35 px-4 py-2 flex items-center justify-between">
        <div className="flex flex-row gap-0.5">
          <Code2 className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {name}
          </span>
        </div>

        {copiedText ? (
          <ClipboardCheck className="w-5 h-5 ml-2 text-gray-500 dark:text-gray-400" />
        ) : (
          <Clipboard
            onClick={() => {
              toast("Copied to clipboard", {
                icon: <ClipboardCheck className="w-5 h-5" />,
                duration: 2000,
              });

              copy(textCode);

              setTimeout(() => {
                copy("");
              }, 2000);
            }}
            className="w-5 h-5 ml-2 text-gray-500 dark:text-gray-400 cursor-pointer"
          />
        )}
      </div>
      <div className="p-4 bg-white dark:bg-black/25 selection:bg-gray-100 dark:selection:bg-blue-400/20">
        {children}
      </div>

      {/* TODO, maybe set as default on the global app? */}
      <style jsx>
        {`
          ::-webkit-scrollbar {
            width: 10px;
            height: 10px;  
          }

          ::-webkit-scrollbar-track {
            background: #0a0a0a;
          }

          ::-webkit-scrollbar-thumb {
            background: #0f0f0f;
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  )
}