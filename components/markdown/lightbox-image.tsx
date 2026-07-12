"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { FC, MouseEvent, useState } from "react";

type LightboxImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const LightboxImage: FC<LightboxImageProps> = ({ src, alt, className }) => {
  const [open, setOpen] = useState(false);
  const stopPropagation = (event: MouseEvent) => event.stopPropagation();

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={alt}
        src={src}
        onClick={() => setOpen(true)}
        className={className ? `${className} cursor-zoom-in` : "cursor-zoom-in"}
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          onClick={() => setOpen(false)}
          className="max-w-none w-screen h-screen sm:max-w-none p-0 rounded-none bg-black/95 ring-0 border-0 flex items-center justify-center"
        >
          <DialogTitle className="sr-only">{alt}</DialogTitle>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            onClick={stopPropagation}
            className="max-w-[92vw] max-h-[85vh] object-contain animate-in fade-in duration-200"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};