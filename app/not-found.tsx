import { Button } from "@/components/ui/button";
import { lastik } from "@/lib/font";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

const NotFound: FC = async () => {
  const t = await getTranslations("notFound");

  return (
    <main className="relative flex min-h-[calc(100dvh-6rem)] flex-col items-center justify-center gap-6 overflow-hidden px-4 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/5 blur-3xl"
      />

      <span className={cn("text-8xl sm:text-9xl text-muted-foreground", lastik.className)}>
        404
      </span>
      <div className="flex flex-col gap-3">
        <h1 className={cn("text-3xl sm:text-4xl", lastik.className)}>{t("title")}</h1>
        <p className="text-muted-foreground">{t("description")}</p>
      </div>

      <Button asChild>
        <Link href="/">{t("cta")}</Link>
      </Button>
    </main>
  );
};

export default NotFound;