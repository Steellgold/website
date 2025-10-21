import { piano } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Component } from "@/type/component";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { ImageZoom } from "../kibo-ui/image-zoom";
import { CodeWindow } from "./code-window";

type MarkdownPleaseProps = {
  content: string;
};

export const MarkdownPlease: Component<MarkdownPleaseProps> = ({ content }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      h1: ({ ...props }) => (
        <h1 
          className={cn(
            piano.className,
            "text-3xl font-bold mt-8 mb-2 text-white"
          )} 
          id={props.children as string} 
          {...props} 
        />
      ),
      h2: ({ ...props }) => (
        <h2 
          className={cn(
            piano.className,
            "text-2xl font-semibold mt-6 mb-2 text-white"
          )} 
          id={props.children as string} 
          {...props} 
        />
      ),
      h3: ({ ...props }) => (
        <h3
          className={cn(
            piano.className,
            "text-xl font-semibold mt-4 mb-1 text-white"
          )} 
          id={props.children as string} 
          {...props} 
        />
      ),
      h4: ({ ...props }) => (
        <h4 
          className="text-lg font-semibold mt-4 mb-1 text-white" 
          id={props.children as string} 
          {...props} 
        />
      ),
      h5: ({ ...props }) => (
        <h5 
          className="text-base font-semibold mt-4 mb-1 text-white" 
          id={props.children as string} 
          {...props} 
        />
      ),
      h6: ({ ...props }) => (
        <h6 
          className="text-sm font-semibold mt-4 mb-1 text-white" 
          id={props.children as string} 
          {...props} 
        />
      ),
      p: ({ ...props }) => (
        <p className="mb-2 text-gray-300 leading-relaxed" {...props} />
      ),
      hr: ({ ...props }) => (
        <hr
          className="my-8 border-none h-px bg-gradient-to-r from-transparent via-white to-transparent"
          style={{ "--border-inside-size": "1px" } as React.CSSProperties}
          {...props}
        />
      ),
      ul: ({ ...props }) => (
        <ul className="list-disc mb-4 pl-6 text-gray-300 space-y-1" {...props} />
      ),
      ol: ({ ...props }) => (
        <ol className="list-decimal mb-4 pl-6 text-gray-300 space-y-1" {...props} />
      ),
      li: ({ ...props }) => (
        <li className="mb-1" {...props} />
      ),
      a: ({ ...props }) => (
        <a 
          className="text-white underline" 
          {...props} 
        />
      ),
      blockquote: ({ ...props }) => (
        <blockquote 
          className={cn(
            "border-l-4 border-[#4889ff] pl-4 italic my-4",
            "bg-[#1d1d1d] border-inside border-inside-default p-4 pb-3"
          )}
          style={{ "--border-inside-size": "1px" } as React.CSSProperties}
          {...props} 
        />
      ),
      img: ({ ...props }) => {
        const isValidUrl = (url: string) => {
          try {
            return url.startsWith('/') || url.startsWith('http://') || url.startsWith('https://');
          } catch {
            return false;
          }
        };
        
        const imageSrc = isValidUrl(props.src as string) ? props.src as string : '/local-og.png';
        
        return (
          <div className="my-6">
            <ImageZoom>
              <Image
                alt="illustration image"
                src={imageSrc}
                width={900}
                height={500}
                className="rounded-lg w-full h-auto max-w-full"
              />
            </ImageZoom>
          </div>
        );
      },
      i: ({ ...props }) => (
        <i className="italic text-gray-200" {...props} />
      ),
      b: ({ ...props }) => (
        <b className="font-bold text-white" {...props} />
      ),
      strong: ({ ...props }) => (
        <strong className="font-bold text-white" {...props} />
      ),
      em: ({ ...props }) => (
        <em className="italic text-gray-200" {...props} />
      ),
      code({ className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || "");
        
        const cleanCode = (code: string) => {
          const lines = code.split('\n');
          const nonEmptyLines = lines.filter(line => line.trim().length > 0);
          if (nonEmptyLines.length === 0) return code;
          
          const minIndent = Math.min(...nonEmptyLines.map(line => {
            const match = line.match(/^(\s*)/);
            return match ? match[1].length : 0;
          }));
          
          return lines.map(line => {
            if (line.trim().length === 0) return line;
            return line.slice(minIndent);
          }).join('\n').replace(/\n$/, "");
        };
        
        return match ? (
          <CodeWindow language={match[1]} textCode={cleanCode(String(children))}>
            <SyntaxHighlighter
              // @ts-expect-error - All good
              style={{
                'pre[class*="language-"]': {
                  background: "transparent",
                  padding: "0",
                  margin: "0",
                },
                'code[class*="language-"]': {
                  ...atomDark['code[class*="language-"]'],
                  background: "transparent",
                  padding: "0",
                  margin: "0",
                },
              }}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {cleanCode(String(children))}
            </SyntaxHighlighter>
          </CodeWindow>
        ) : (
          <code 
            className="bg-[#1d1d1d] text-[#4889ff] px-1.5 py-0.5 rounded text-sm font-mono border-inside border-inside-default" 
            style={{ "--border-inside-size": "1px" } as React.CSSProperties}
            {...props}
          >
            {children}
          </code>
        );
      },
      table: ({ ...props }) => (
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-[#1d1d1d] border-inside border-inside-default rounded-lg" {...props} />
        </div>
      ),
      th: ({ ...props }) => (
        <th className="border border-gray-700 px-4 py-2 text-left text-white font-semibold" {...props} />
      ),
      td: ({ ...props }) => (
        <td className="border border-gray-700 px-4 py-2 text-gray-300" {...props} />
      ),
    }}
  >
    {content}
  </ReactMarkdown>
);