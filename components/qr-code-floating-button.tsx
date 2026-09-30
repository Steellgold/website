"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { RiQrCodeLine } from "@remixicon/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const PAGE_URL = "https://www.gaetanhus.fr/ftrv-2oct";
const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=16&data=${encodeURIComponent(PAGE_URL)}`;

export const QrCodeFloatingButton = () => {
  const t = useTranslations("ftrv.qr");
  const isExpanded = !useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={t("ariaLabel")}
          className={cn(
            "flex h-10 items-center justify-center gap-2 rounded-full border border-border bg-card px-2.5 shadow-lg transition-all duration-300 hover:bg-accent",
            isExpanded && "px-4"
          )}
        >
          <RiQrCodeLine className="size-5 shrink-0" />
          <span className={cn("text-sm", !isExpanded && "sr-only")}>{t("label")}</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader className="text-center sm:text-center">
          <DialogTitle>{t("title")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>
        <div className="mx-auto rounded-xl bg-white p-3">
          <Image
            src={QR_CODE_URL}
            alt={t("alt")}
            width={256}
            height={256}
            unoptimized
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
