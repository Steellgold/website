"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { hexToRgba, hsvaToHex, isValidHex, normalizeHex, rgbaToHsva, stripAlpha, type HSVA } from "@/registry/new-york/color-picker/lib/color-utils"
import * as React from "react"

interface ColorPickerProps {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  className?: string
  disabled?: boolean
  presets?: string[]
  showPresets?: boolean
  showAlpha?: boolean
  showPreview?: boolean
  showLabels?: boolean
  huePosition?: "right" | "left" | "top" | "bottom" // Added hue position control
  showValue?: boolean
}

const DEFAULT_PRESETS = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
  "#64748b",
  "#000000",
  "#ffffff",
  "#f8fafc",
  "#f1f5f9",
  "#e2e8f0",
  "#cbd5e1",
]

export const ColorPicker = React.forwardRef<HTMLButtonElement, ColorPickerProps>(
  (
    {
      value,
      defaultValue = "#3b82f6",
      onValueChange,
      className,
      disabled,
      presets,
      showPresets = false,
      showAlpha = false,
      showPreview = true,
      showLabels = true,
      huePosition = "bottom", // Default to bottom position
      showValue = true
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue)
    const [isOpen, setIsOpen] = React.useState(false)
    const [hexInput, setHexInput] = React.useState("")
    const [hsva, setHsva] = React.useState<HSVA>({ h: 0, s: 100, v: 100, a: 1 })

    const currentValue = value ?? internalValue
    const displayValue = showAlpha ? currentValue : stripAlpha(currentValue)

    const effectivePresets = showPresets ? presets || DEFAULT_PRESETS : []

    // Update HSVA when color changes
    React.useEffect(() => {
      const rgba = hexToRgba(currentValue)
      if (rgba) {
        const newHsva = rgbaToHsva(rgba.r, rgba.g, rgba.b, rgba.a)
        setHsva(newHsva)
      }
      setHexInput(currentValue)
    }, [currentValue])

    const updateColor = React.useCallback(
      (newColor: string) => {
        const finalColor = showAlpha ? newColor : stripAlpha(newColor)

        if (value === undefined) {
          setInternalValue(finalColor)
        }
        onValueChange?.(finalColor)
      },
      [value, onValueChange, showAlpha],
    )

    const handleHsvaChange = React.useCallback(
      (newHsva: HSVA) => {
        setHsva(newHsva)
        const alpha = showAlpha ? newHsva.a : 1
        const newColor = hsvaToHex(newHsva.h, newHsva.s, newHsva.v, alpha)
        updateColor(newColor)
      },
      [updateColor, showAlpha],
    )

    const handlePresetClick = React.useCallback(
      (color: string) => {
        updateColor(color)
      },
      [updateColor],
    )

    const handleHexInputChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        setHexInput(inputValue)

        if (isValidHex(inputValue)) {
          const normalizedHex = normalizeHex(inputValue)
          updateColor(normalizedHex)
        }
      },
      [updateColor],
    )

    const handleHexInputKeyDown = React.useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
          e.preventDefault()
          if (isValidHex(hexInput)) {
            const normalizedHex = normalizeHex(hexInput)
            updateColor(normalizedHex)
            setIsOpen(false)
          }
        }
      },
      [hexInput, updateColor],
    )

    const renderHueSlider = () => {
      if (huePosition === "right" || huePosition === "left") {
        return <VerticalHueSlider hue={hsva.h} onChange={(h) => handleHsvaChange({ ...hsva, h })} />
      } else {
        return <HueSlider hue={hsva.h} onChange={(h) => handleHsvaChange({ ...hsva, h })} />
      }
    }

    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            className={cn(
              "w-[200px] justify-start text-left font-normal",
              !displayValue && "text-muted-foreground",
              className,
            )}
            disabled={disabled}
            aria-label={`Color picker, current color: ${displayValue}`}
          >
            <div
              className="w-4 h-4 rounded border border-border flex-shrink-0"
              style={{ backgroundColor: displayValue }}
              aria-hidden="true"
            />
            {showValue && <span className="truncate">{displayValue}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={cn("p-3", huePosition === "right" || huePosition === "left" ? "w-72" : "w-64")}
          align="start"
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === "Escape") {
              setIsOpen(false)
            }
          }}
        >
          <div className="space-y-3">
            {showPreview && (
              <div className="flex items-center space-x-2">
                <div
                  className="w-8 h-8 rounded-md border border-border flex-shrink-0"
                  style={{ backgroundColor: displayValue }}
                  aria-label={`Selected color: ${displayValue}`}
                />
                <div className="text-sm font-medium">{displayValue}</div>
              </div>
            )}

            <div className="space-y-2">
              {showLabels && <Label className="text-xs font-medium">Color</Label>}

              {/* Top hue slider */}
              {huePosition === "top" && <div className="mb-2">{renderHueSlider()}</div>}

              {/* Main color picker area with conditional hue slider positioning */}
              <div className="flex gap-3">
                {/* Left hue slider */}
                {huePosition === "left" && renderHueSlider()}

                <SaturationValuePicker
                  hue={hsva.h}
                  saturation={hsva.s}
                  value={hsva.v}
                  onChange={(s, v) => handleHsvaChange({ ...hsva, s, v })}
                />

                {/* Right hue slider */}
                {huePosition === "right" && renderHueSlider()}
              </div>

              {/* Bottom hue slider */}
              {huePosition === "bottom" && <div className="mt-2">{renderHueSlider()}</div>}
            </div>

            {showAlpha && (
              <div className="space-y-2">
                {showLabels && <Label className="text-xs font-medium">Alpha</Label>}
                <AlphaSlider
                  alpha={hsva.a}
                  hue={hsva.h}
                  saturation={hsva.s}
                  value={hsva.v}
                  onChange={(a) => handleHsvaChange({ ...hsva, a })}
                />
              </div>
            )}

            {/* Hex Input */}
            <div className="space-y-2">
              {showLabels && (
                <Label htmlFor="hex-input" className="text-xs font-medium">
                  Hex
                </Label>
              )}
              <Input
                id="hex-input"
                value={hexInput}
                onChange={handleHexInputChange}
                onKeyDown={handleHexInputKeyDown}
                placeholder={showAlpha ? "#000000ff" : "#000000"}
                className="h-8 text-xs"
                aria-describedby="hex-input-description"
              />
              <div id="hex-input-description" className="sr-only">
                Enter a hex color code{showAlpha ? " with optional alpha channel" : ""}, for example #ff0000 for red
              </div>
            </div>

            {showPresets && effectivePresets.length > 0 && (
              <div className="space-y-2">
                {showLabels && <Label className="text-xs font-medium">Presets</Label>}
                <div className="grid grid-cols-8 gap-0.5">
                  {effectivePresets.map((color) => (
                    <button
                      key={color}
                      className={cn(
                         "w-full aspect-square rounded border border-border focus:outline-none focus:ring-0.5 focus:ring-ring focus:ring-offset-2 hover:rounded-md transition-all",
                        stripAlpha(displayValue) === stripAlpha(color) && "ring-0.5 ring-ring ring-offset-2",
                      )}
                      style={{ backgroundColor: color }}
                      onClick={() => handlePresetClick(color)}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    )
  },
)

ColorPicker.displayName = "ColorPicker"

// Saturation/Value Picker Component
interface SaturationValuePickerProps {
  hue: number
  saturation: number
  value: number
  onChange: (saturation: number, value: number) => void
}

const SaturationValuePicker: React.FC<SaturationValuePickerProps> = ({ hue, saturation, value, onChange }) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const updatePosition = React.useCallback(
    (clientX: number, clientY: number) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(rect.width, clientX - rect.left))
      const y = Math.max(0, Math.min(rect.height, clientY - rect.top))

      const newSaturation = Math.round((x / rect.width) * 100)
      const newValue = Math.round(100 - (y / rect.height) * 100)

      onChange(newSaturation, newValue)
    },
    [onChange],
  )

  const handleMouseDown = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      setIsDragging(true)
      updatePosition(e.clientX, e.clientY)
    },
    [updatePosition],
  )

  const handleTouchStart = React.useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault()
      setIsDragging(true)
      const touch = e.touches[0]
      updatePosition(touch.clientX, touch.clientY)
    },
    [updatePosition],
  )

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault()
        updatePosition(e.clientX, e.clientY)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault() // Prevent page scroll on mobile
        const touch = e.touches[0]
        updatePosition(touch.clientX, touch.clientY)
      }
    }

    const handleTouchEnd = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.body.style.userSelect = "none"
      document.body.style.webkitUserSelect = "none"
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      document.body.style.userSelect = ""
      document.body.style.webkitUserSelect = ""
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging, updatePosition])

  const backgroundColor = hsvaToHex(hue, 100, 100, 1)

  return (
    <div
      ref={containerRef}
      className="relative w-full h-32 rounded-md cursor-crosshair focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none touch-none flex-1" // Added flex-1 for proper sizing
      style={{
        background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, ${backgroundColor})`,
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      tabIndex={0}
      role="slider"
      aria-label="Color saturation and brightness"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={saturation}
    >
      <div
        className="absolute w-3 h-3 border-2 border-white rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          left: `${saturation}%`,
          top: `${100 - value}%`,
        }}
      />
    </div>
  )
}

// Hue Slider Component
interface HueSliderProps {
  hue: number
  onChange: (hue: number) => void
}

const HueSlider: React.FC<HueSliderProps> = ({ hue, onChange }) => {
  const sliderRef = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const updateHue = React.useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return

      const rect = sliderRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(rect.width, clientX - rect.left))
      const newHue = Math.round((x / rect.width) * 360)

      onChange(newHue)
    },
    [onChange],
  )

  const handleMouseDown = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      setIsDragging(true)
      updateHue(e.clientX)
    },
    [updateHue],
  )

  const handleTouchStart = React.useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault()
      setIsDragging(true)
      const touch = e.touches[0]
      updateHue(touch.clientX)
    },
    [updateHue],
  )

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault()
        updateHue(e.clientX)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault() // Prevent page scroll on mobile
        const touch = e.touches[0]
        updateHue(touch.clientX)
      }
    }

    const handleTouchEnd = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.body.style.userSelect = "none"
      document.body.style.webkitUserSelect = "none"
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      document.body.style.userSelect = ""
      document.body.style.webkitUserSelect = ""
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging, updateHue])

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      let newHue = hue

      switch (e.key) {
        case "ArrowLeft":
          newHue = hue - 1
          break
        case "ArrowRight":
          newHue = hue + 1
          break
        default:
          return
      }

      e.preventDefault()
      // Wrap around hue values
      if (newHue < 0) newHue = 360 + newHue
      if (newHue > 360) newHue = newHue - 360

      onChange(newHue)
    },
    [hue, onChange],
  )

  return (
    <div
      ref={sliderRef}
      className="relative w-full h-4 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none touch-none"
      style={{
        background:
          "linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)",
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="slider"
      aria-label="Color hue"
      aria-valuemin={0}
      aria-valuemax={360}
      aria-valuenow={hue}
    >
      <div
        className="absolute w-4 h-4 border-2 border-white rounded-full shadow-md transform -translate-x-1/2 -translate-y-0 pointer-events-none"
        style={{
          left: `${(hue / 360) * 100}%`,
          backgroundColor: hsvaToHex(hue, 100, 100, 1),
        }}
      />
    </div>
  )
}

interface VerticalHueSliderProps {
  hue: number
  onChange: (hue: number) => void
}

const VerticalHueSlider: React.FC<VerticalHueSliderProps> = ({ hue, onChange }) => {
  const sliderRef = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const updateHue = React.useCallback(
    (clientY: number) => {
      if (!sliderRef.current) return

      const rect = sliderRef.current.getBoundingClientRect()
      const y = Math.max(0, Math.min(rect.height, clientY - rect.top))
      const newHue = Math.round((y / rect.height) * 360)

      onChange(newHue)
    },
    [onChange],
  )

  const handleMouseDown = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      setIsDragging(true)
      updateHue(e.clientY)
    },
    [updateHue],
  )

  const handleTouchStart = React.useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault()
      setIsDragging(true)
      const touch = e.touches[0]
      updateHue(touch.clientY)
    },
    [updateHue],
  )

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault()
        updateHue(e.clientY)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault() // Prevent page scroll on mobile
        const touch = e.touches[0]
        updateHue(touch.clientY)
      }
    }

    const handleTouchEnd = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.body.style.userSelect = "none"
      document.body.style.webkitUserSelect = "none"
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      document.body.style.userSelect = ""
      document.body.style.webkitUserSelect = ""
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging, updateHue])

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      let newHue = hue

      switch (e.key) {
        case "ArrowUp":
          newHue = hue - 1
          break
        case "ArrowDown":
          newHue = hue + 1
          break
        default:
          return
      }

      e.preventDefault()
      // Wrap around hue values
      if (newHue < 0) newHue = 360 + newHue
      if (newHue > 360) newHue = newHue - 360

      onChange(newHue)
    },
    [hue, onChange],
  )

  return (
    <div
      ref={sliderRef}
      className="relative w-4 h-32 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none touch-none flex-shrink-0"
      style={{
        background:
          "linear-gradient(to bottom, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)",
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="slider"
      aria-label="Color hue"
      aria-valuemin={0}
      aria-valuemax={360}
      aria-valuenow={hue}
    >
      <div
        className="absolute w-4 h-4 border-2 border-white rounded-full shadow-md transform -translate-x-0 -translate-y-1/2 pointer-events-none"
        style={{
          top: `${(hue / 360) * 100}%`,
          backgroundColor: hsvaToHex(hue, 100, 100, 1),
        }}
      />
    </div>
  )
}

// Alpha Slider Component
interface AlphaSliderProps {
  alpha: number
  hue: number
  saturation: number
  value: number
  onChange: (alpha: number) => void
}

const AlphaSlider: React.FC<AlphaSliderProps> = ({ alpha, hue, saturation, value, onChange }) => {
  const sliderRef = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const updateAlpha = React.useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return

      const rect = sliderRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(rect.width, clientX - rect.left))
      const newAlpha = x / rect.width

      onChange(newAlpha)
    },
    [onChange],
  )

  const handleMouseDown = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      setIsDragging(true)
      updateAlpha(e.clientX)
    },
    [updateAlpha],
  )

  const handleTouchStart = React.useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault()
      setIsDragging(true)
      const touch = e.touches[0]
      updateAlpha(touch.clientX)
    },
    [updateAlpha],
  )

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault()
        updateAlpha(e.clientX)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault() // Prevent page scroll on mobile
        const touch = e.touches[0]
        updateAlpha(touch.clientX)
      }
    }

    const handleTouchEnd = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.body.style.userSelect = "none"
      document.body.style.webkitUserSelect = "none"
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      document.body.style.userSelect = ""
      document.body.style.webkitUserSelect = ""
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging, updateAlpha])

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      let newAlpha = alpha

      switch (e.key) {
        case "ArrowLeft":
          newAlpha = Math.max(0, alpha - 0.01)
          break
        case "ArrowRight":
          newAlpha = Math.min(1, alpha + 0.01)
          break
        default:
          return
      }

      e.preventDefault()
      onChange(newAlpha)
    },
    [alpha, onChange],
  )

  const solidColor = hsvaToHex(hue, saturation, value, 1)

  return (
    <div
      ref={sliderRef}
      className="relative w-full h-4 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none touch-none"
      style={{
        background: `linear-gradient(45deg, #ccc 25%, transparent 25%), 
                     linear-gradient(-45deg, #ccc 25%, transparent 25%), 
                     linear-gradient(45deg, transparent 75%, #ccc 75%), 
                     linear-gradient(-45deg, transparent 75%, #ccc 75%)`,
        backgroundSize: "8px 8px",
        backgroundPosition: "0 0, 0 4px, 4px -4px, -4px 0px",
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="slider"
      aria-label="Color alpha"
      aria-valuemin={0}
      aria-valuemax={1}
      aria-valuenow={alpha}
    >
      <div
        className="absolute inset-0 rounded-md"
        style={{
          background: `linear-gradient(to right, transparent, ${solidColor})`,
        }}
      />
      <div
        className="absolute w-4 h-4 border-2 border-white rounded-full shadow-md transform -translate-x-1/2 -translate-y-0 pointer-events-none"
        style={{
          left: `${alpha * 100}%`,
          backgroundColor: hsvaToHex(hue, saturation, value, alpha),
        }}
      />
    </div>
  )
}