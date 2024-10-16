import { Separator } from "@/lib/components/ui/separator";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

type Image = {
  url?: string;
  alt: string;
  onInstagram: boolean;
}

const images: Image[] = [
  { url: "https://www.instagram.com/p/C5vwnZfNR5r/", alt: "Kitty", onInstagram: true },
  { url: "https://www.instagram.com/p/CXqTmYOt_X4/", alt: "Noisette", onInstagram: true },
  { url: "https://www.instagram.com/p/CaMv-JkNyXS/", alt: "Kitty", onInstagram: true },
  { alt: "Kitty", onInstagram: false },
  { alt: "Noisette", onInstagram: false },
  { url: "https://www.instagram.com/p/CikZINKDYtI/", alt: "Kitty", onInstagram: true },
  { alt: "Noisette", onInstagram: false },
];

export const Cats = (): ReactElement => {
  return (
    <section>
      <Separator className="my-7 bg-[#1a1a1a] w-[90%] mx-auto" />

      <div className="flex flex-col items-center mb-7">
        <p className="text-lg">Here are my beautiful cats! They are so cute and amazing! I love them so much! 😻</p>
      </div>
      
      <div className="grid auto-rows-[192px] grid-cols-3 gap-2">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`group relative row-span-1 rounded-xl border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 ${
              i === 3 || i === 6 ? "col-span-2" : ""
            }`}
          >
            <Image
              src={`/cats/${i + 1}.jpg`}
              alt={`Cat ${i + 1}`}
              className="rounded-xl object-cover"
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
              <div className="absolute inset-x-0 bottom-0 h-8 rounded-b-xl bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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