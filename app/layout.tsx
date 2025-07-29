import { iconsByName } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Component } from "@/type/component";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Image from "next/image";
import { PropsWithChildren } from "react";
import "./globals.css";

const CURRENT_URL = "https://2025.steellgold.fr";

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
    images: [{ url: `${CURRENT_URL}/og-image.png?v=2`, width: 1200, height: 630, alt: "Gaëtan Huszovits" }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Steellgold",
    creator: "@Steellgold",
    title: "Gaëtan Huszovits",
    description: "Full-Stack Developer specializing in the TypeScript ecosystem, building web applications with modern technologies.",
    images: [{ url: `${CURRENT_URL}/og-image.png?v=2`, width: 1200, height: 630, alt: "Gaëtan Huszovits" }]
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
      <body className={`${outfit.className} antialiased bg-[#121212] text-white relative min-h-screen`}>
        <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none">
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
        
        <div className={cn(
          "relative z-10",
          "p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12",
          "max-w-4xl mx-auto"
        )}>
          {children}
        </div>
      </body>
    </html>
  );
}

export default RootLayout;