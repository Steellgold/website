"use client";

import { Stars_Thinsmooth } from "@/components/icons";
import { Skill } from "@/components/skill";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Project } from "@/config/projects";
import { cn } from "@/lib/utils";
import { Component } from "@/type/component";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ProjectDialog: Component<{
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}> = ({ project, open, onOpenChange }) => {
  const t = useTranslations("projects");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const hasImages = project?.images && project.images.length > 0;

  useEffect(() => {
    if (open && project) {
      setSelectedImageIndex(0);
    }
  }, [project, open]);

  useEffect(() => {
    if (open && !hasImages) {
      onOpenChange(false);
    }
  }, [open, hasImages, onOpenChange]);

  if (!project) return <></>;
  if (!hasImages) return <></>;

  const hasMultipleImages = hasImages && project.images!.length > 1;

  const nextImage = () => {
    if (hasImages && hasMultipleImages) {
      setSelectedImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = () => {
    if (hasImages && hasMultipleImages) {
      setSelectedImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="p-0 max-h-[95vh] md:max-h-[90vh]"
        style={{ 
          maxWidth: "95vw", 
          width: "900px",
          maxHeight: "95vh"
        }}
      >
        <div className="flex flex-col md:grid md:grid-cols-2 h-full max-h-[95vh] md:max-h-[90vh]">
          {hasImages && (
            <div className="relative w-full h-64 md:h-full md:min-h-0 shrink-0 md:shrink md:order-2">
              <Image
                src={project.images![selectedImageIndex]}
                alt={`${project.name} - Image ${selectedImageIndex + 1}`}
                fill
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized={project.images![selectedImageIndex].startsWith('http')}
              />

              {hasMultipleImages && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-[#1d1d1d]/80 hover:bg-[#1d1d1d]"
                    onClick={prevImage}
                  >
                    <ChevronLeft />
                    <span className="sr-only">Previous image</span>
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-[#1d1d1d]/80 hover:bg-[#1d1d1d]"
                    onClick={nextImage}
                  >
                    <ChevronRight />
                    <span className="sr-only">Next image</span>
                  </Button>

                  <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-black/50 px-3 py-2 rounded-full">
                    {project.images!.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all",
                          index === selectedImageIndex
                            ? "bg-white"
                            : "bg-white/40"
                        )}
                        aria-label={`Aller à l'image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <div className="p-4 md:p-8 overflow-y-auto flex-1 min-h-0 md:order-1">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-xl md:text-2xl font-semibold text-left">
                {project.name}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {project.description}
              </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Skill key={tech} name={tech} minimized />
                ))}
              </div>

              <div className="flex items-center gap-1 flex-wrap">
                <div className="bg-[#1d1d1d] border-inside border-inside-default px-2 md:px-3 py-1 md:py-1.5 flex items-center">
                  <span className="text-xs md:text-sm">{project.status}</span>
                </div>

                {project.awards && project.awards.length > 0 && (
                  <Link
                    className="bg-[#F3FF45] px-2 md:px-3 py-1 md:py-1.5 border-inside border-inside-preferred select-none flex items-center gap-1 md:gap-1.5 text-[#1d1d1d]"
                    href={project.awards[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Stars_Thinsmooth className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    <span className="text-xs md:text-sm font-medium">
                      {t("awarded")}
                    </span>
                  </Link>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ExternalLink />
                    {t("view")}
                  </Link>
                </Button>

                {project.githubUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code source
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  )
};
