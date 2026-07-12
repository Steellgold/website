"use client";

import { Button } from "@/components/ui/button";
import { piano } from "@/lib/font";
import { cn } from "@/lib/utils";
import { RiRefreshLine } from "@remixicon/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC, useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage: FC<ErrorPageProps> = ({ error, reset }) => {
  const t = useTranslations("error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[calc(100dvh-6rem)] flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="flex flex-col gap-3">
        <h1 className={cn("text-3xl sm:text-4xl", piano.className)}>{t("title")}</h1>
        <p className="text-muted-foreground">{t("description")}</p>
      </div>

      <div className="flex flex-row gap-3">
        <Button onClick={() => reset()}>
          <RiRefreshLine className="w-4 h-4" />
          {t("retry")}
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">{t("cta")}</Link>
        </Button>
      </div>
    </main>
  );
};

export default ErrorPage;