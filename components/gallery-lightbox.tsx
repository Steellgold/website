"use client";

import { PhotoTile } from "@/components/photo-tile";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { KITTY, NOISETTE, type CatPhoto } from "@/config/gallery";
import { formatAge } from "@/lib/pet-age";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import Image from "next/image";
import { FC, MouseEvent, useEffect, useState } from "react";

type GalleryLightboxProps = {
  featured: CatPhoto;
  featuredLifespan: string;
  photos: CatPhoto[];
  locale: "fr" | "en";
};

const CATS = { kitty: KITTY, noisette: NOISETTE };

export const GalleryLightbox: FC<GalleryLightboxProps> = ({ featured, featuredLifespan, photos, locale }) => {
  const allPhotos = [featured, ...photos];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const goPrev = () => setOpenIndex((i) => (i === null ? i : (i - 1 + allPhotos.length) % allPhotos.length));
  const goNext = () => setOpenIndex((i) => (i === null ? i : (i + 1) % allPhotos.length));
  const close = () => setOpenIndex(null);
  const stopPropagation = (event: MouseEvent) => event.stopPropagation();

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex]);

  const current = openIndex !== null ? allPhotos[openIndex] : null;
  const isFeatured = openIndex === 0;

  const names = current ? current.cats.map((cat) => CATS[cat].name).join(locale === "fr" ? " et " : " and ") : "";

  const ages =
    current && !isFeatured && current.date
      ? current.cats.map((cat) => {
          const info = CATS[cat];
          const age = formatAge(info.birth, current.date as Date, locale);
          return current.cats.length > 1 ? `${info.name}: ${age}` : age;
        })
      : null;

  return (
    <>
      <div className="mb-6">
        <PhotoTile
          photo={featured}
          locale={locale}
          aspectClassName="aspect-1600/840"
          sizes="768px"
          priority
          lifespan={featuredLifespan}
          grayscale
          onClick={() => setOpenIndex(0)}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {photos.map((photo, index) => (
          <PhotoTile key={photo.src} photo={photo} locale={locale} onClick={() => setOpenIndex(index + 1)} />
        ))}
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && close()}>
        <DialogContent
          onClick={close}
          className="max-w-none w-screen h-screen sm:max-w-none p-0 rounded-none bg-black/95 ring-0 border-0 flex items-center justify-center"
        >
          <DialogTitle className="sr-only">{current?.description[locale]}</DialogTitle>

          {current && (
            <>
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

              <div
                key={current.src}
                onClick={stopPropagation}
                className="relative max-w-[92vw] max-h-[85vh] w-full h-full animate-in fade-in duration-200"
                style={{ aspectRatio: `${current.width} / ${current.height}` }}
              >
                <Image
                  src={current.src}
                  alt={current.description[locale]}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>

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

              <div
                key={`${current.src}-caption`}
                onClick={stopPropagation}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-center px-4 animate-in fade-in duration-200"
              >
                <span className="text-white text-sm font-medium">{names}</span>
                <span className="text-white/80 text-xs">{current.description[locale]}</span>
                {isFeatured && <span className="text-white/60 text-[11px]">{featuredLifespan}</span>}
                {ages && (
                  <div className="flex flex-col">
                    {ages.map((age) => (
                      <span key={age} className="text-white/60 text-[11px]">
                        {age}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};