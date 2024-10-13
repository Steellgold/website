import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Component } from "@/lib/components/utils/component";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/lib/components/providers/theme-provider";
import { Toaster } from "sonner";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaëtan | Full-stack Developer",
  applicationName: "Gaëtan's Portfolio",
  description: "20. Indie Hacker | Full-stack developper", // 20 years old !!!!!!!
};

export const viewport: Viewport = {
  themeColor: "#15803D",
};

const Layout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn("bg-black", nunito.className)} id="cv-section">
        {process.env.NEXT_PUBLIC_ENV !== "dev" && (
          <script defer src="https://supalytics.co/track.js" data-website-id="ffd6eb05-59b1-4fa2-8a47-225c12ca64f8"></script>
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
