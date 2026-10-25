"use client";

import { CvFloatingButton } from "@/components/cv-floating-button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { QrCodeFloatingButton } from "@/components/qr-code-floating-button"
import { ThemeToggler } from "@/components/theme-toggler"
import { usePathname } from "next/navigation"

export const FloatingControls = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/ftrv-2oct" && (
        <div className="fixed bottom-4 left-4 z-50">
          <QrCodeFloatingButton />
        </div>
      )}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        <LanguageSwitcher />
        <ThemeToggler />
        <CvFloatingButton />
      </div>
    </>
  );
};
