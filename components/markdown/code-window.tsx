"use client";

import { Component } from "@/type/component";
import { Clipboard, ClipboardCheck, Code2 } from "lucide-react";
import { PropsWithChildren, ReactElement } from "react";
import { useCopyToClipboard } from "usehooks-ts";

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
  language: keyof typeof languageNames;
  textCode: string;
} & PropsWithChildren;

export const CodeWindow: Component<CodeWindowProps> = ({
  language, textCode, children
}): ReactElement => {
  const name = languageNames[language] || language;
  const [copiedText, copy] = useCopyToClipboard();

  return (
    <div className="rounded-lg overflow-hidden border border-black/70 my-4 hover:border-gray-300/15 transition-all duration-200">
      <div className="bg-black/35 px-4 py-2 flex items-center justify-between">
        <div className="flex flex-row gap-0.5">
          <Code2 className="w-5 h-5 mr-2 text-gray-300" />
          <span className="text-sm font-medium text-gray-200">
            {name}
          </span>
        </div>

        {copiedText ? (
          <ClipboardCheck className="w-5 h-5 ml-2 text-gray-300" />
        ) : (
          <Clipboard
            onClick={() => {
              console.log("Copied to clipboard");
              // toast("Copied to clipboard", {
              //   icon: <ClipboardCheck className="w-5 h-5" />,
              //   duration: 2000,
              // });

              copy(textCode);

              setTimeout(() => {
                copy("");
              }, 2000);
            }}
            className="w-5 h-5 ml-2 text-gray-300 cursor-pointer"
          />
        )}
      </div>

      <div className="p-4 bg-black/25 selection:bg-blue-400/20 overflow-x-auto">
        {children}
      </div>

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