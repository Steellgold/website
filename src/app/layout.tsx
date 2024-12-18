import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Component } from "@/lib/components/utils/component";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "@/lib/components/providers/theme-provider";
import { Toaster } from "sonner";

const monterserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaëtan | Full-stack Developer",
  applicationName: "Gaëtan Portfolio",
  description: "20. Indie Hacker | Full-stack developper",
  openGraph: {
    title: "Gaëtan",
    description: "20. Indie Hacker | Full-stack developper",
    type: "website",
    url: "https://gaetanhus.fr",
    siteName: "Gaëtan Portfolio",
    images: [
      {
        url: "https://gaetanhus.fr/og.png",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://gaetanhus.fr/og.png",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
    title: "Gaëtan | Full-stack Developer",
    description: "20. Indie Hacker | Full-stack developper"
  }
};

export const viewport: Viewport = {
  themeColor: "#121212"
};

const Layout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`rounded-lg ${monterserrat.className} antialiased bg-background dark:bg-[#121212]`}>
        {process.env.NEXT_PUBLIC_ENV !== "dev" && (
          <script defer src="https://www.woyage.app/track.js" data-website-id="ffd6eb05-59b1-4fa2-8a47-225c12ca64f8"></script>
        )}
        
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <Toaster />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default Layout;
