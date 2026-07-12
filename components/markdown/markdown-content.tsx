import { CodeWindow } from "@/components/markdown/code-window";
import { LightboxImage } from "@/components/markdown/lightbox-image";
import { lastik } from "@/lib/font";
import { cn } from "@/lib/utils";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

const cleanCode = (code: string) => {
  const lines = code.split("\n");
  const nonEmptyLines = lines.filter((line) => line.trim().length > 0);
  if (nonEmptyLines.length === 0) return code;

  const minIndent = Math.min(
    ...nonEmptyLines.map((line) => {
      const match = line.match(/^(\s*)/);
      return match ? match[1].length : 0;
    })
  );

  return lines
    .map((line) => (line.trim().length === 0 ? line : line.slice(minIndent)))
    .join("\n")
    .replace(/\n$/, "");
};

type MarkdownContentProps = {
  content: string;
};

export const MarkdownContent: FC<MarkdownContentProps> = ({ content }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      h1: ({ ...props }) => <h1 className={cn(lastik.className, "text-3xl mt-8 mb-2")} {...props} />,
      h2: ({ ...props }) => <h2 className={cn(lastik.className, "text-2xl mt-6 mb-2")} {...props} />,
      h3: ({ ...props }) => <h3 className={cn(lastik.className, "text-xl mt-4 mb-1")} {...props} />,
      h4: ({ ...props }) => <h4 className="text-lg font-semibold mt-4 mb-1" {...props} />,
      h5: ({ ...props }) => <h5 className="text-base font-semibold mt-4 mb-1" {...props} />,
      h6: ({ ...props }) => <h6 className="text-sm font-semibold mt-4 mb-1" {...props} />,
      p: ({ ...props }) => <p className="mb-3 text-muted-foreground leading-relaxed" {...props} />,
      hr: ({ ...props }) => <hr className="my-8 border-border" {...props} />,
      ul: ({ ...props }) => <ul className="list-disc mb-4 pl-6 text-muted-foreground space-y-1" {...props} />,
      ol: ({ ...props }) => <ol className="list-decimal mb-4 pl-6 text-muted-foreground space-y-1" {...props} />,
      li: ({ ...props }) => <li className="mb-1" {...props} />,
      a: ({ ...props }) => <a className="text-foreground underline underline-offset-2" {...props} />,
      blockquote: ({ ...props }) => (
        <blockquote className="border-l-2 border-flag-blue pl-4 italic my-4 bg-card/40 border border-border rounded-md p-4" {...props} />
      ),
      img: ({ src, alt }) => {
        const isValidSrc = typeof src === "string" && (src.startsWith("/") || src.startsWith("http"));
        if (!isValidSrc) return null;

        return (
          <LightboxImage
            alt={alt ?? ""}
            src={src}
            className="rounded-lg w-full h-auto max-w-full border border-border my-6"
          />
        );
      },
      strong: ({ ...props }) => <strong className="font-bold text-foreground" {...props} />,
      em: ({ ...props }) => <em className="italic" {...props} />,
      code({ className, children, ...props }) {
        const match = /language-(\w+)/.exec(className ?? "");

        return match ? (
          <CodeWindow language={match[1]} textCode={cleanCode(String(children))}>
            <SyntaxHighlighter
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              style={atomDark as any}
              language={match[1]}
              PreTag="div"
              customStyle={{ background: "transparent", padding: 0, margin: 0 }}
            >
              {cleanCode(String(children))}
            </SyntaxHighlighter>
          </CodeWindow>
        ) : (
          <code className="bg-card border border-border text-foreground px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
            {children}
          </code>
        );
      },
      table: ({ ...props }) => (
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-border rounded-lg" {...props} />
        </div>
      ),
      th: ({ ...props }) => <th className="border border-border px-4 py-2 text-left font-semibold" {...props} />,
      td: ({ ...props }) => <td className="border border-border px-4 py-2 text-muted-foreground" {...props} />,
    }}
  >
    {content}
  </ReactMarkdown>
);
