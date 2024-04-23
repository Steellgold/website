import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Component } from "@/lib/components/utils/component";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaëtan | Back-end Developer",
  applicationName: "Gaëtan's Portfolio",
  description: "19. Indie Hacker | Full-stack developper",
};

export const viewport: Viewport = {
  themeColor: "#15803D",
};

const Layout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <script defer src="https://supalytics.co/track.js" data-website-id="ffa13789-0111-4357-8b65-1777364c77b3"></script>
      <body className={cn("bg-black", nunito.className)}>
        {children}
      </body>
    </html>
  );
}

export default Layout;
