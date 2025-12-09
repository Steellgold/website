"use client";

import { MarkdownPlease } from "@/components/markdown/please";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { File, Clock, X, Search } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

interface RecentFile {
  name: string;
  content: string;
  timestamp: number;
}

export default function MarkdownPage() {
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [recentFiles, setRecentFiles] = useState<RecentFile[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("md-recent-files");
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as RecentFile[];
        setRecentFiles(parsed.sort((a, b) => b.timestamp - a.timestamp));
      } catch (e) {
        console.error("Erreur lors du chargement des fichiers récents:", e);
      }
    }
  }, []);

  const saveToRecent = (name: string, content: string) => {
    const newFile: RecentFile = {
      name,
      content,
      timestamp: Date.now()
    };

    const updated = [newFile, ...recentFiles.filter(f => f.name !== name)].slice(0, 5);
    setRecentFiles(updated);
    localStorage.setItem("md-recent-files", JSON.stringify(updated));
  };

  const removeFromRecent = (name: string) => {
    const updated = recentFiles.filter(f => f.name !== name);
    setRecentFiles(updated);
    localStorage.setItem("md-recent-files", JSON.stringify(updated));
  };

  const loadRecentFile = (file: RecentFile) => {
    setFileName(file.name);
    setMarkdownContent(file.content);
  };

  const filteredFiles = useMemo(() => {
    if (!searchQuery.trim()) return recentFiles;
    
    return recentFiles.filter(file => {
      const searchTerm = searchQuery.toLowerCase();
      return file.name.toLowerCase().includes(searchTerm) || 
             file.content.toLowerCase().includes(searchTerm);
    });
  }, [recentFiles, searchQuery]);

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
        saveToRecent(file.name, cleanContent);
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
      <div className="max-w-4xl mx-auto">
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
              <div className="text-6xl bg-primary-foreground/15 rounded-full p-2.5 inline-block">
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

            {recentFiles.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <h3 className="text-lg font-medium text-white/90">Recent files</h3>
                </div>

                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search files by name or content..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-primary-foreground/10 border-primary-foreground/20"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
                  {filteredFiles.length > 0 ? filteredFiles.map((file) => {
                    const flat = file.content.replace(/\s+/g, " ").trim();
                    const preview = flat.length > 120 ? `${flat.slice(0, 117)}...` : flat;
                    return (
                      <div
                        key={file.name}
                        className="group p-4 bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
                      >
                        <button onClick={() => loadRecentFile(file)} className="w-full text-left">
                          <div className="flex items-start gap-2">
                            <File className="w-4 h-4 mt-0.5 text-muted-foreground" />
                            <div className="flex-1">
                              <div className="text-sm font-medium text-white/90">
                                {file.name.length > 30
                                  ? `${file.name.slice(0, 22)}...${file.name.slice(-6)}`
                                  : file.name}
                              </div>

                              <div className="text-xs text-muted-foreground">
                                {new Date(file.timestamp).toLocaleDateString("fr-FR", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </div>
                              <div className="mt-2 text-xs text-white/70">
                                {preview || "(Aperçu indisponible)"}
                              </div>
                            </div>
                          </div>
                        </button>

                        <div className="mt-3 flex justify-end">
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromRecent(file.name);
                            }}
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-red-400 p-1"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    );
                  }) : (
                    <div className="col-span-full text-center py-8 text-muted-foreground">
                      No files match your search criteria
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}