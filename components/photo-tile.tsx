import { KITTY, NOISETTE, type CatPhoto } from "@/config/gallery";
import { formatAge, formatPhotoDate } from "@/lib/pet-age";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CSSProperties, FC } from "react";

type PhotoTileProps = {
  photo: CatPhoto;
  locale: "fr" | "en";
  sizes?: string;
  priority?: boolean;
  aspectClassName?: string;
  lifespan?: string;
  grayscale?: boolean;
  onClick?: () => void;
};

const CATS = { kitty: KITTY, noisette: NOISETTE };

export const PhotoTile: FC<PhotoTileProps> = ({
  photo,
  locale,
  sizes,
  priority,
  aspectClassName = "aspect-3/4",
  lifespan,
  grayscale = false,
  onClick,
}) => {
  const zoom = photo.zoom ?? 1;
  const names = photo.cats.map((cat) => CATS[cat].name).join(locale === "fr" ? " et " : " and ");

  const ages = photo.date
    ? photo.cats.map((cat) => {
        const info = CATS[cat];
        const age = formatAge(info.birth, photo.date as Date, locale);
        return photo.cats.length > 1 ? `${info.name}: ${age}` : age;
      })
    : null;

  return (
    <div
      className={cn(
        "group relative rounded-lg overflow-hidden border border-border",
        onClick && "cursor-pointer",
        aspectClassName
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      <Image
        src={photo.src}
        alt={photo.description[locale]}
        fill
        className={cn(
          "object-cover transition duration-300 ease-out group-hover:scale-(--hover-zoom)",
          grayscale && "grayscale group-hover:grayscale-0"
        )}
        style={{ "--hover-zoom": zoom * 1.08, transform: `scale(${zoom})` } as CSSProperties}
        sizes={sizes ?? "(max-width: 640px) 50vw, 33vw"}
        priority={priority}
      />

      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end p-3",
          "bg-linear-to-t from-black/85 via-black/30 to-transparent backdrop-blur-[1px]",
          grayscale
            ? "opacity-100 sm:opacity-70 sm:group-hover:opacity-100 transition-opacity duration-200"
            : "opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        )}
      >
        {photo.date && (
          <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-[1px] rounded px-1.5 py-0.5 text-white/80 text-[11px]">
            {formatPhotoDate(photo.date, locale)}
          </span>
        )}

        <span className="text-white text-sm font-medium">{names}</span>
        <span className="text-white/80 text-xs">{photo.description[locale]}</span>
        {lifespan && <span className="text-white/60 text-[11px] mt-0.5">{lifespan}</span>}
        {!lifespan && ages && (
          <div className="flex flex-col mt-0.5">
            {ages.map((age) => (
              <span key={age} className="text-white/60 text-[11px]">
                {age}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};