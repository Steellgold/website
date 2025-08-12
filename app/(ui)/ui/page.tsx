import { iconsByName } from "@/components/icons";
import { Section } from "@/components/section";
import { Metadata } from "next";
import { ColorPickerPlayground } from "./[name]/_components/color-picker.view";

const CURRENT_URL = "https://ui.gaetanhus.fr";

export const metadata: Metadata = {
  title: "UI Components",
  description: "Configure and preview the UI components in real-time.",
  applicationName: "UI Components",
  authors: [
    { name: "Gaëtan Huszovits", url: CURRENT_URL }
  ],
  keywords: [
    "color picker",
    "color",
    "picker",
    "ui",
    "components",
    "preview",
    "real-time",
    "gaetan huszovits",
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
    title: "UI Components",
    description: "Configure and preview the UI components in real-time.",
    siteName: "UI Components",
    images: [{ url: `${CURRENT_URL}/ui-og-image.png`, width: 1200, height: 630, alt: "UI Components" }]
  },
  twitter: {
    images: [{ url: `${CURRENT_URL}/ui-og-image.png`, width: 1200, height: 630, alt: "UI Components" }]
  }
}

export default function Home() {
  return (
    <div className="flex flex-col gap-18">
      <Section
        name="UI Components"
        description="Configure and preview the UI components in real-time."
      >
        <main className="flex flex-col gap-8">
          <ColorPickerPlayground />
        </main>
      </Section>
    </div>
  )
}