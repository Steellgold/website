import { RiArrowLeftLine } from "@remixicon/react";
import Link from "next/link";
import { FC } from "react";

export const BackLink: FC = () => (
  <Link
    href="/"
    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors mb-8"
  >
    <RiArrowLeftLine className="w-4 h-4" />
    Gaëtan Huszovits
  </Link>
);
