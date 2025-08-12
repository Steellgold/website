import { ColorPickerPlayground } from "@/components/color-picker-playground"
import { Section } from "@/components/section"

export default function Home() {
  return (
    <div className="flex flex-col gap-18">
      <Section
        name="UI Components"
        description="Configure and preview the Color Picker component in real-time."
      >
        <main className="flex flex-col gap-8">
          <ColorPickerPlayground />
        </main>
      </Section>
    </div>
  )
}