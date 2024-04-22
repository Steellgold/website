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
      <body className={cn("min-h-screen scroll-smooth bg-black py-16", nunito.className)}>
        <main className="mx-auto w-1/2 xl:w-5/6 lg:w-3/4 sm:w-11/12">
        {children}
        </main>
      </body>
    </html>
  );
}

export default Layout;