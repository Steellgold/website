import { FloatingControls } from "@/components/floating-controls";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { handwritten, piano } from "@/lib/font";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { FC, PropsWithChildren } from "react";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

const CURRENT_URL = "https://gaetanhus.fr";

export const metadata: Metadata = {
  title: "Gaëtan Huszovits",
  description: "Développeur Full-Stack spécialisé dans l'écosystème Next.js / React.",
  applicationName: "Gaëtan Huszovits",
  authors: [{ name: "Gaëtan Huszovits", url: CURRENT_URL }],
  robots: { index: true, follow: true },
  alternates: { canonical: CURRENT_URL },
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={cn(geist.variable, geistMono.variable, piano.variable, handwritten.variable)}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground antialiased selection:bg-foreground selection:text-background">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <TooltipProvider>
              {children}
              <Footer />
              <FloatingControls />
            </TooltipProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
