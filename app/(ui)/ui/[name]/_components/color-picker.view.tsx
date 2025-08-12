"use client"

import { CodeBlockCommand } from "@/components/code-block-command"
import { OpenInV0Button } from "@/components/open-in-v0"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ColorPicker } from "@/registry/new-york/color-picker/components/color-picker"
import { Check, Copy, PanelBottom, PanelLeft, PanelRight, PanelTop } from "lucide-react"
import { useState } from "react"

export const ColorPickerPlayground = () => {
  const [showPresets, setShowPresets] = useState(true)
  const [showAlpha, setShowAlpha] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [showLabels, setShowLabels] = useState(true)
  const [huePosition, setHuePosition] = useState<"right" | "left" | "top" | "bottom">("bottom")
  const [disabled, setDisabled] = useState(false)
  const [customPresets, setCustomPresets] = useState("#e11d48 #f59e0b #10b981 #3b82f6 #8b5cf6 #ec4899")
  const [useCustomPresets, setUseCustomPresets] = useState(false)
  const [defaultValue, setDefaultValue] = useState("#ffffff10")
  const [showValue, setShowValue] = useState(true)

  const [currentColor, setCurrentColor] = useState(defaultValue)
  const [copied, setCopied] = useState(false)
  const downloadUrl = "https://ui.steellgold.fr/r/color-picker.json"

  const resetConfig = () => {
    setShowPresets(true)
    setShowAlpha(false)
    setShowPreview(true)
    setShowLabels(true)
    setHuePosition("bottom")
    setDisabled(false)
    setUseCustomPresets(false)
    const initialDefault = "#ffffff10"
    setDefaultValue(initialDefault)
    setCurrentColor(initialDefault)
    setCustomPresets("#e11d48 #f59e0b #10b981 #3b82f6 #8b5cf6 #ec4899")
    setCopied(false)
  }

  const parsedPresets = customPresets
    .split(/[\s,–—-]+/)
    .map((color) => color.trim())
    .filter((color) => color.length > 0)

  const generateCode = () => {
    const props = []

    if (defaultValue !== "#3b82f6") {
      props.push(`defaultValue="${defaultValue}"`)
    }

    if (showPresets && useCustomPresets && parsedPresets.length > 0) {
      props.push(`presets={[${parsedPresets.map((color) => `"${color}"`).join(", ")}]}`)
    }

    if (showPresets) {
      props.push(`showPresets={true}`)
    }

    if (showAlpha) {
      props.push(`showAlpha={true}`)
    }

    if (!showPreview) {
      props.push(`showPreview={false}`)
    }

    if (!showLabels) {
      props.push(`showLabels={false}`)
    }

    if (huePosition !== "bottom") {
      props.push(`huePosition="${huePosition}"`)
    }

    if (!showValue) {
      props.push(`showValue={false}`)
    }

    if (disabled) {
      props.push(`disabled={true}`)
    }

    props.push(`onValueChange={(color) => console.log(color)}`)
    const propsString = props.length > 0 ? `\n  ${props.join("\n  ")}\n` : ""

    return `<ColorPicker${propsString}/>`
  }

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(generateCode())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-2 h-full">
      <Card>
          <CardHeader>
          <CardTitle className="flex items-center gap-2">Configuration</CardTitle>
          <CardDescription>Customize the Color Picker component properties</CardDescription>

          <CardAction>
            <Button variant="outline" size="xs" onClick={resetConfig}>Reset</Button>
          </CardAction>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="space-y-2">
            <div className="space-y-2">
              <Label htmlFor="default-value" className="font-bold">Default Value</Label>
              <Input
                id="default-value"
                value={defaultValue}
                onChange={(e) => {
                  setDefaultValue(e.target.value)
                  setCurrentColor(e.target.value)
                }}
                placeholder="#3b82f6"
              />
            </div>

            <div className="flex items-center justify-between border-inside border-inside-default p-2">
              <div className="space-y-0.5">
                <Label htmlFor="show-presets" className="font-bold">Show Presets</Label>
                <p className="text-sm">Display preset color swatches</p>
              </div>
              <Switch id="show-presets" checked={showPresets} onCheckedChange={setShowPresets} />
            </div>

            <div className="flex items-center justify-between border-inside border-inside-default p-2">
              <div className="space-y-0.5">
                <Label htmlFor="show-alpha" className="font-bold">Show Alpha</Label>
                <p className="text-sm">Enable transparency control</p>
              </div>
              <Switch id="show-alpha" checked={showAlpha} onCheckedChange={setShowAlpha} />
            </div>

            <div className="flex items-center justify-between border-inside border-inside-default p-2">
              <div className="space-y-0.5">
                <Label htmlFor="show-preview" className="font-bold">Show Preview</Label>
                <p className="text-sm">Show preview swatch in popover</p>
              </div>
              <Switch id="show-preview" checked={showPreview} onCheckedChange={setShowPreview} />
            </div>

            <div className="flex items-center justify-between border-inside border-inside-default p-2">
              <div className="space-y-0.5">
                <Label htmlFor="show-labels" className="font-bold">Show Labels</Label>
                <p className="text-sm">Display section labels (Color, Hue, Hex)</p>
              </div>
              <Switch id="show-labels" checked={showLabels} onCheckedChange={setShowLabels} />
            </div>

            <div className="flex items-center justify-between border-inside border-inside-default p-2">
              <div className="space-y-0.5">
                <Label htmlFor="show-value" className="font-bold">Show Value</Label>
                <p className="text-sm">Display the current color value</p>
              </div>

              <Switch id="show-value" checked={showValue} onCheckedChange={setShowValue} />
            </div>

            <div className="space-y-2 flex items-center justify-between border-inside border-inside-default p-2">
              <div className="space-y-0.5">
                <Label htmlFor="hue-position" className="font-bold">Hue Slider Position</Label>
                <p className="text-sm">Position of the hue slider relative to the color area</p>
              </div>

              <ToggleGroup
                type="single"
                size="sm"
                value={huePosition}
                onValueChange={(v) => v && setHuePosition(v as typeof huePosition)}
                aria-label="Hue slider position"
                className="border-inside border-inside-default rounded-none shadow-none"
              >
                <ToggleGroupItem value="top" aria-label="Top">
                  <PanelTop className="size-3.5"/>
                </ToggleGroupItem>
                <ToggleGroupItem value="left" aria-label="Left">
                  <PanelLeft className="size-3.5"/>
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Right">
                  <PanelRight className="size-3.5"/>
                </ToggleGroupItem>
                <ToggleGroupItem value="bottom" aria-label="Bottom">
                  <PanelBottom className="size-3.5"/>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="flex items-center justify-between border-inside border-inside-default p-2">
              <div className="space-y-0.5">
                <Label htmlFor="disabled" className="font-bold">Disabled</Label>
                <p className="text-sm">Disable the color picker</p>
              </div>
              <Switch id="disabled" checked={disabled} onCheckedChange={setDisabled} />
            </div>
          </div>

          {showPresets && (
            <div className="space-y-2 border-inside border-inside-default p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="custom-presets" className="font-bold">Custom Presets</Label>
                  <p className="text-sm">Use custom preset colors</p>
                </div>
                <Switch id="custom-presets" checked={useCustomPresets} onCheckedChange={setUseCustomPresets} />
              </div>

              {useCustomPresets && (
                <div className="space-y-2">
                  <Label htmlFor="preset-colors" className="font-bold">Preset Colors</Label>
                  <Textarea
                    id="preset-colors"
                    value={customPresets}
                    onChange={(e) => setCustomPresets(e.target.value)}
                    placeholder="#e11d48 #f59e0b #10b981 #3b82f6 #8b5cf6 #ec4899"
                    className="h-24 resize-none text-sm rounded-none shadow-none border border-[#4a4a4a] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex flex-col gap-2">
        {/* Preview Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Live Preview
            </CardTitle>
            <CardDescription>
              Interactive preview of your configured Color Picker
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Component Preview */}
            <div
              className="relative flex flex-col items-center justify-center min-h-[200px] border-inside border-inside-default p-6"
              style={{ background: currentColor }}
            >
              <div className="absolute top-2 right-2 z-10">
                <OpenInV0Button name="color-picker" />
              </div>

              <div className="space-y-1 text-center">
                <Label className="text-base font-medium">Color Picker Component</Label>
                <ColorPicker
                  value={currentColor}
                  onValueChange={setCurrentColor}
                  showPresets={showPresets}
                  showAlpha={showAlpha}
                  showPreview={showPreview}
                  showLabels={showLabels}
                  huePosition={huePosition}
                  disabled={disabled}
                  presets={showPresets && useCustomPresets ? parsedPresets : undefined}
                  showValue={showValue}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="font-bold">Active Props</Label>
              <div className="flex flex-wrap gap-1">
                {showPresets && <Badge variant="secondary">showPresets</Badge>}
                {showAlpha && <Badge variant="secondary">showAlpha</Badge>}
                {!showPreview && <Badge variant="secondary">showPreview=false</Badge>}
                {!showLabels && <Badge variant="secondary">showLabels=false</Badge>}
                {huePosition !== "bottom" && <Badge variant="outline">huePosition={huePosition}</Badge>}
                {disabled && <Badge variant="destructive">disabled</Badge>}
                {useCustomPresets && showPresets && <Badge variant="outline">custom presets</Badge>}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Code</CardTitle>
            <CardDescription>Use this component in your project by copying and pasting the code below</CardDescription>

            <CardAction>
              <Button variant="outline" size="xs" onClick={copyCode}>
                {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            </CardAction>
          </CardHeader>

          <CardContent className="-mt-2">
            <pre className="bg-[#1d1d1d] p-3 text-sm border-inside border-inside-default whitespace-pre-wrap break-words md:whitespace-pre md:break-normal md:overflow-x-auto">
              {generateCode()}
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Installation</CardTitle>
            <CardDescription>via CLI (shadcn)</CardDescription>
          </CardHeader>

          <CardContent className="-mt-2">
            <CodeBlockCommand
              __pnpm__={`pnpx shadcn@latest add ${downloadUrl}`}
              __npm__={`npx shadcn@latest add ${downloadUrl}`}
              __yarn__={`yarn shadcn@latest add ${downloadUrl}`}
              __bun__={`bunx shadcn@latest add ${downloadUrl}`}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
