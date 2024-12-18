import { ImageZoomer } from "image-zoomer-react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

type Image = {
  url?: string;
  alt: string;
  onInstagram: boolean;
  text?: string;
}

const images: Image[] = [
  { url: "https://www.instagram.com/p/C5vwnZfNR5r/", alt: "Kitty", onInstagram: true, text: "Kitty on her pillow" },
  { url: "https://www.instagram.com/p/CXqTmYOt_X4/", alt: "Noisette", onInstagram: true, text: "Noisette drinking water" },
  { alt: "Kitty", onInstagram: false, text: "Kitty play with alluminium foil" },
  { alt: "Kitty", onInstagram: false, text: "Kitty on my bed... again" },
  { alt: "Noisette", onInstagram: false, text: "Noisette making the beautiful" },
  { url: "https://www.instagram.com/p/CikZINKDYtI/", alt: "Kitty", onInstagram: true, text: "Kitty sharpening her claws" },
  { alt: "Noisette", onInstagram: false, text: "Noisette sunbathing" },
];

export const Cats = (): ReactElement => {
  return (
    <section id="cats">
      <div className="my-8" />

      <div className="grid auto-rows-[192px] grid-cols-3 gap-2">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`group relative row-span-1 rounded-none border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 ${
              i === 3 || i === 6 ? "col-span-2" : ""
            }`}
          >
            <ImageZoomer
              as={Image}
              alt={images[i].alt}
              src={`/cats/${i + 1}.jpg`}
              className="object-cover"
              textMessage={images[i].text}
              fill
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMSE6uBwAD2AGfmsy4kQAAAABJRU5ErkJggg=="
            />
            
            {images[i].onInstagram && (
              <Link
                href={images[i].url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-center flex items-center gap-1"
              >
                <div className="absolute inset-x-0 bottom-0 h-8 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <InstagramLogoIcon className="w-5 h-5 mr-1" />
                  {images[i].alt}
                </div>
              </Link>
            )}

            {!images[i].onInstagram && (
              <div className="absolute inset-x-0 bottom-0 h-8 rounded-none bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-center flex items-center gap-1">
                  {images[i].alt}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}