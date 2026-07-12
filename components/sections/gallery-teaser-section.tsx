import { GALLERY_PHOTOS } from "@/config/gallery";
import { handwritten } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const TEASER_PHOTOS = [GALLERY_PHOTOS[6], GALLERY_PHOTOS[0], GALLERY_PHOTOS[9]];
const TRANSFORMS = ["-translate-x-4 translate-y-2 -rotate-12", "translate-x-3 translate-y-1 rotate-6", "-rotate-2"];

export const GalleryTeaserSection: FC = () => {
  const t = useTranslations("gallery");

  return (
    <section className="flex flex-col items-center justify-center gap-7 w-full mt-12">
      <div className="relative w-28 h-36 shrink-0 mx-4">
        {TEASER_PHOTOS.map((photo, index) => (
          <div
            key={photo.src}
            className={cn(
              "absolute inset-0 rounded-2xl border border-border overflow-hidden shadow-lg",
              TRANSFORMS[index]
            )}
            style={{ zIndex: index }}
          >
            <Image
              src={photo.src}
              alt=""
              width={photo.width}
              height={photo.height}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className={cn("text-4xl sm:text-5xl", handwritten.className)}>{t("teaserTitle")}</h2>
        <p className="text-muted-foreground">{t("teaserSubtitle")}</p>
        <Link
          href="/gallery"
          className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-1.5 text-sm font-medium hover:opacity-90 transition-opacity mt-1"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
};