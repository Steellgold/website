"use client";

import { SkillBadge } from "@/components/skill-badge";
import { Icon_ChromeWebStore } from "@/components/tech-icons";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { type Project } from "@/config/projects";
import { cn } from "@/lib/utils";
import { RiArrowLeftSLine, RiArrowRightSLine, RiAwardFill, RiGithubFill } from "@remixicon/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FC, MouseEvent, useEffect, useState } from "react";

type ProjectCardProps = {
  project: Project;
  showBanner?: boolean;
};

export const ProjectCard: FC<ProjectCardProps> = ({ project, showBanner = false }) => {
  const locale = useLocale() as "en" | "fr";
  const t = useTranslations("projects");
  const hasAward = Boolean(project.awards && project.awards.length > 0);
  const images = project.images ?? [];
  const previewImage = showBanner ? images[0] : undefined;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const goPrev = () => setLightboxIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  const goNext = () => setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length));
  const close = () => setLightboxIndex(null);
  const stopPropagation = (event: MouseEvent) => event.stopPropagation();
  const openLightbox = () => images.length > 0 && setLightboxIndex(0);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex]);

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden border border-border rounded-lg",
        previewImage ? "bg-card" : "bg-card/40"
      )}
    >
      {previewImage && (
        <div
          className="absolute inset-x-0 top-0 h-48 overflow-hidden cursor-pointer"
          onClick={openLightbox}
          role="button"
          tabIndex={0}
          aria-label={`View ${project.name} screenshots`}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              openLightbox();
            }
          }}
        >
          <Image
            src={previewImage}
            alt=""
            fill
            className="object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent from-0% via-black/15 via-35% to-card to-60% dark:via-black/70" />
        </div>
      )}

      <div
        className={cn(
          "relative z-10 flex flex-col gap-2 h-full px-4 sm:px-5 pb-4 sm:pb-5",
          previewImage ? "pt-32 pointer-events-none" : "pt-4 sm:pt-5"
        )}
      >
        <div className="flex items-center justify-between gap-2 flex-wrap pointer-events-auto">
          <h3 className="text-lg font-semibold whitespace-nowrap">{project.name}</h3>

          <div className="flex items-center gap-1.5 shrink-0">
            {hasAward && project.githubUrl ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-6 h-6 border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-white/30 transition-colors"
                  >
                    <RiGithubFill className="w-3.5 h-3.5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{project.status}</TooltipContent>
              </Tooltip>
            ) : project.githubUrl ? (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-border rounded-md px-2 py-0.5 text-muted-foreground hover:text-foreground hover:border-white/30 transition-colors"
              >
                {project.status}
              </Link>
            ) : (
              <span className="text-xs border border-border rounded-md px-2 py-0.5 text-muted-foreground">
                {project.status}
              </span>
            )}

            {hasAward && (
              <Link
                href={project.awards![0]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs bg-[#F3FF45] text-black rounded-md px-2 py-0.5 font-medium"
              >
                <RiAwardFill className="w-3 h-3" />
                {t("awardBadge")}
              </Link>
            )}

            {project.chromeWebStoreUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={project.chromeWebStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-6 h-6 border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-white/30 transition-colors"
                  >
                    <Icon_ChromeWebStore className="w-3.5 h-3.5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Chrome Web Store</TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed pointer-events-auto">
          {project.description[locale] ?? project.description.en}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-1 pointer-events-auto">
          {project.technologies.map((tech) => (
            <SkillBadge key={tech} name={tech} minimized />
          ))}
        </div>
      </div>

      {images.length > 0 && (
        <Dialog open={lightboxIndex !== null} onOpenChange={(open) => !open && close()}>
          <DialogContent
            onClick={close}
            className="max-w-none w-screen h-screen sm:max-w-none p-0 rounded-none bg-black/95 ring-0 border-0 flex items-center justify-center"
          >
            <DialogTitle className="sr-only">{project.name}</DialogTitle>

            {lightboxIndex !== null && (
              <>
                {images.length > 1 && (
                  <button
                    onClick={(event) => {
                      stopPropagation(event);
                      goPrev();
                    }}
                    className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                    aria-label="Previous"
                  >
                    <RiArrowLeftSLine className="w-6 h-6 text-white" />
                  </button>
                )}

                <div
                  key={images[lightboxIndex]}
                  onClick={stopPropagation}
                  className="relative max-w-[92vw] max-h-[85vh] w-full h-full animate-in fade-in duration-200"
                >
                  <Image
                    src={images[lightboxIndex]}
                    alt={`${project.name} screenshot ${lightboxIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="90vw"
                  />
                </div>

                {images.length > 1 && (
                  <button
                    onClick={(event) => {
                      stopPropagation(event);
                      goNext();
                    }}
                    className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                    aria-label="Next"
                  >
                    <RiArrowRightSLine className="w-6 h-6 text-white" />
                  </button>
                )}

                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs">
                  {lightboxIndex + 1} / {images.length}
                </span>
              </>
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};