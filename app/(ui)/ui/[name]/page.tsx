import { Section } from "@/components/section"
import { Component } from "@/type/component"
import { notFound } from "next/navigation"
import { use } from "react"
import { ColorPickerPlayground } from "./_components/color-picker.view"

type Params = {
  params: Promise<{
    name: string
  }>
}

const components = ["color-picker"];
const CURRENT_URL = "https://ui.gaetanhus.fr";

export async function generateMetadata({ params }: Params) {
  const { name } = await params;
  if (!components.includes(name)) notFound();

  const componentName = name.replace(/-/g, " ").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return {
    title: `UI Components - ${componentName}`,
    description: `Configure and preview the ${componentName} component in real-time.`,
    openGraph: {
      title: `UI Components - ${componentName}`,
      description: `Configure and preview the ${componentName} component in real-time.`,
      images: [{ url: `${CURRENT_URL}/${name}-og-image.png`, width: 1200, height: 630, alt: "UI Components" }]
    },
    twitter: {
      images: [{ url: `${CURRENT_URL}/${name}-og-image.png`, width: 1200, height: 630, alt: "UI Components" }]
    }
  }
}

const ComponentPage: Component<Params> = ({ params }) => {
  const { name } = use(params);

  if (!components.includes(name)) {
    notFound();
  }

  const componentName = name.replace(/-/g, " ").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <div className="flex flex-col gap-18">
      <Section
        name={componentName}
        description={`Configure and preview the ${componentName} component in real-time.`}
      >
        <main className="flex flex-col gap-8">
          {name === "color-picker" && <ColorPickerPlayground />}
        </main>
      </Section>
    </div>
  )
}

export default ComponentPage;