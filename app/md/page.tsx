"use client";

import { MarkdownPlease } from "@/components/markdown/please";
import { Button, buttonVariants } from "@/components/ui/button";
import { File } from "lucide-react";
import { useState } from "react";

export default function MarkdownPage() {
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const removeFrontmatter = (content: string): string => {
    let cleaned = content;

    const frontmatterRegex = /^---[\s\S]*?---\s*/;
    cleaned = cleaned.replace(frontmatterRegex, "");

    const metadataRegex = /^(Création\s*:|Modification\s*:).*$/gm;
    cleaned = cleaned.replace(metadataRegex, "");

    const dashesRegex = /^-{6,}\s*$/gm;
    cleaned = cleaned.replace(dashesRegex, "");

    const pageBreakRegex = /<div style="page-break-after:always"><\/div>/g;
    cleaned = cleaned.replace(pageBreakRegex, "");

    const tocRegex = /^\[TOC\]\s*$/gm;
    cleaned = cleaned.replace(tocRegex, "");

    return cleaned.replace(/^\s*\n+/, "").replace(/\n{3,}/g, "\n\n").trim();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name.endsWith(".md")) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        const cleanContent = removeFrontmatter(content);
        setMarkdownContent(cleanContent);
      };
      reader.readAsText(file);
    } else {
      alert("Veuillez sélectionner un fichier .md valide");
    }
  };

  const clearContent = () => {
    setMarkdownContent("");
    setFileName("");
    const fileInput = document.getElementById("md-file-input") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className={markdownContent ? "block" : "hidden"}>
          <label
            htmlFor="md-file-input"
            className={buttonVariants({
              variant: "outline",
              size: "default",
              className: "cursor-pointer"
            })}
          >
            {
              fileName ?
                fileName.length > 30 ?
                  `${fileName.slice(0, 15)}...${fileName.slice(-10)}`
                  : fileName
                : "Upload Markdown File (.md)"
            }
          </label>

          <input
            type="file"
            id="md-file-input"
            accept=".md"
            onChange={handleFileUpload}
            className="hidden"
          />

          {fileName && (
            <Button
              onClick={clearContent}
              variant="destructive"
              size="default"
              className="ml-2"
            >
              Remove File
            </Button>
          )}
        </div>

        {markdownContent ? (
          <article className="relative">
            <div className="prose prose-invert prose-lg max-w-none">
              <MarkdownPlease content={markdownContent} />
            </div>
          </article>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="space-y-2">
              <div
                className="text-6xl bg-primary-foreground/15 rounded-full p-2.5 inline-block"
              >
                <File className="mx-auto text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white/90">
                  No file uploaded
                </h2>

                <p className="text-muted-foreground max-w-md">
                  Upload a Markdown file to see its rendered content.
                </p>

                <label htmlFor="md-file-input" className={buttonVariants({ variant: "outline", size: "default", className: "cursor-pointer mt-4" })}>
                  Upload File
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}