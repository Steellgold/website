import { GalleryLightbox } from "@/components/gallery-lightbox";
import { GALLERY_PHOTOS, KITTY, KITTY_FEATURED_PHOTO } from "@/config/gallery";
import { handwritten } from "@/lib/font";
import { formatLifespan } from "@/lib/pet-age";
import { cn } from "@/lib/utils";
import { RiArrowLeftLine } from "@remixicon/react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A little break from code — Gaëtan's cat photo gallery.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery",
    description: "A little break from code — Gaëtan's cat photo gallery.",
    url: "/gallery",
    type: "website",
  },
};

const Page: FC = async () => {
  const t = await getTranslations("gallery");
  const locale = (await getLocale()) as "fr" | "en";
  const kittyLifespan = formatLifespan(KITTY.birth, KITTY.death, locale);

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <RiArrowLeftLine className="w-4 h-4" />
        Gaëtan Huszovits
      </Link>

      <h1 className={cn("text-4xl sm:text-5xl mb-10", handwritten.className)}>{t("teaserTitle")}</h1>

      <GalleryLightbox
        featured={KITTY_FEATURED_PHOTO}
        featuredLifespan={kittyLifespan}
        photos={GALLERY_PHOTOS}
        locale={locale}
      />
    </main>
  );
};

export default Page;