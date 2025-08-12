import { ColorPicker } from "@/registry/new-york/color-picker/components/color-picker"

export default async function Page() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4">
      <div className="grid grid-cols-2 gap-4 py-10 sm:grid-cols-3 md:grid-cols-4">
        <ColorPicker />
      </div>
    </div>
  )
}