import { CvFloatingButton } from "@/components/cv-floating-button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggler } from "@/components/theme-toggler"
import { FC } from "react"

export const FloatingControls: FC = () => (
  <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
    <LanguageSwitcher />
    <ThemeToggler />
    <CvFloatingButton />
  </div>
)
