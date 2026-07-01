import { iconsByName } from "@/components/icons";
import { PageChrome } from "@/components/page-chrome";
import { AppProvider } from "@/contexts/app-context";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Outfit } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const CURRENT_URL = "https://gaetanhus.fr";

const outfit = Outfit({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Gaëtan Huszovits",
  description: "Full-Stack Developer specializing in the TypeScript ecosystem, building web applications with modern technologies.",
  applicationName: "Gaëtan Huszovits",
  authors: [
    { name: "Gaëtan Huszovits", url: CURRENT_URL }
  ],
  keywords: [
    "Gaëtan Huszovits",
    "Steellgold",
    "gaetan huszovits portfolio",
    "full-stack developer",
    "TypeScript developer",
    "React developer",
    "Next.js developer",
    "web developer modern stack",
    "modern web developer",
    "front-end back-end integration",
    ...Object.keys(iconsByName).map((icon) => icon.toLowerCase()),
  ],
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: CURRENT_URL
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    type: "website",
    url: CURRENT_URL,
    title: "Gaëtan Huszovits",
    description: "Full-Stack Developer specializing in the TypeScript ecosystem, building web applications with modern technologies.",
    siteName: "Gaëtan Huszovits",
    images: [{ url: `${CURRENT_URL}/og-image.png`, width: 1200, height: 630, alt: "Gaëtan Huszovits" }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Steellgold",
    creator: "@Steellgold",
    title: "Gaëtan Huszovits",
    description: "Full-Stack Developer specializing in the TypeScript ecosystem, building web applications with modern technologies.",
    images: [{ url: `${CURRENT_URL}/og-image.png`, width: 1200, height: 630, alt: "Gaëtan Huszovits" }]
  }
}

const RootLayout = async ({ children }: PropsWithChildren) => {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={cn(
        "selection:bg-white selection:text-black"
      )}
    >
      <body className={`${outfit.className} antialiased bg-[#121212] text-white relative`}>
        <main>
          <NextIntlClientProvider messages={messages}>
            <AppProvider>
              <PageChrome>{children}</PageChrome>
            </AppProvider>
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}

export default RootLayout;