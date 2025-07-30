import { ConditionalPadding } from "@/components/conditional-padding";
import { iconsByName } from "@/components/icons";
import { SpotifyPlayer } from "@/components/spotify-player";
import { AppProvider } from "@/contexts/app-context";
import { cn } from "@/lib/utils";
import { Component } from "@/type/component";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Image from "next/image";
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

const RootLayout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html
      lang="en"
      className={cn(
        "selection:bg-white selection:text-black"
      )}
    >
      <body className={`${outfit.className} antialiased bg-[#121212] text-white relative`}>
        <AppProvider>
          <div className="absolute top-0 left-0 right-0  pointer-events-none">
            <div className="w-full h-54 sm:h-100">
              <Image 
                src="/BWR.webp" 
                alt="BWR" 
                width={1000}
                height={256}
                className="w-full h-full"
              />
            </div>
          </div>
            
          <ConditionalPadding>
            {children}
          </ConditionalPadding>
          
          <SpotifyPlayer />
        </AppProvider>
      </body>
    </html>
  );
}

export default RootLayout;