import { FloatingControls } from "@/components/floating-controls";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME, SITE_TITLE_TEMPLATE, SITE_URL, TWITTER_HANDLE } from "@/config/site";
import { handwritten, piano } from "@/lib/font";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { FC, PropsWithChildren } from "react";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const generateMetadata = async (): Promise<Metadata> => {
  const locale = await getLocale();
  const openGraphLocale = locale === "fr" ? "fr_FR" : "en_US";

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: SITE_NAME, template: SITE_TITLE_TEMPLATE },
    description: SITE_DESCRIPTION,
    keywords: SITE_KEYWORDS,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    openGraph: {
      type: "website",
      url: SITE_URL,
      siteName: SITE_NAME,
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      locale: openGraphLocale,
    },
    twitter: {
      card: "summary_large_image",
      creator: TWITTER_HANDLE,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    alternates: { canonical: SITE_URL },
  };
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark light",
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
        <StructuredData locale={locale} />
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