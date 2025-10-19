// Color conversion utilities for the color picker component

export interface HSV {
  h: number // 0-360
  s: number // 0-100
  v: number // 0-100
}

export interface RGB {
  r: number // 0-255
  g: number // 0-255
  b: number // 0-255
}

export interface HSVA {
  h: number // 0-360
  s: number // 0-100
  v: number // 0-100
  a: number // 0-1
}

export interface RGBA {
  r: number // 0-255
  g: number // 0-255
  b: number // 0-255
  a: number // 0-1
}

export function hexToRgb(hex: string): RGB | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : null
}

export function hexToRgba(hex: string): RGBA | null {
  // Support both 6-digit (#RRGGBB) and 8-digit (#RRGGBBAA) hex
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex)
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
        a: result[4] ? Number.parseInt(result[4], 16) / 255 : 1,
      }
    : null
}

export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

export function rgbaToHex(r: number, g: number, b: number, a = 1): string {
  const alpha = Math.round(a * 255)
  if (a < 1) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1) + alpha.toString(16).padStart(2, "0")
  }
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

export function rgbToHsv(r: number, g: number, b: number): HSV {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const diff = max - min

  let h = 0
  const s = max === 0 ? 0 : diff / max
  const v = max

  if (diff !== 0) {
    switch (max) {
      case r:
        h = ((g - b) / diff + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / diff + 2) / 6
        break
      case b:
        h = ((r - g) / diff + 4) / 6
        break
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
  }
}

export function hsvToRgb(h: number, s: number, v: number): RGB {
  h /= 360
  s /= 100
  v /= 100

  const i = Math.floor(h * 6)
  const f = h * 6 - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)

  let r: number, g: number, b: number

  switch (i % 6) {
    case 0:
      r = v
      g = t
      b = p
      break
    case 1:
      r = q
      g = v
      b = p
      break
    case 2:
      r = p
      g = v
      b = t
      break
    case 3:
      r = p
      g = q
      b = v
      break
    case 4:
      r = t
      g = p
      b = v
      break
    case 5:
      r = v
      g = p
      b = q
      break
    default:
      r = g = b = 0
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  }
}

export function hsvToHex(h: number, s: number, v: number): string {
  const rgb = hsvToRgb(h, s, v)
  return rgbToHex(rgb.r, rgb.g, rgb.b)
}

export function rgbaToHsva(r: number, g: number, b: number, a = 1): HSVA {
  const hsv = rgbToHsv(r, g, b)
  return { ...hsv, a }
}

export function hsvaToRgba(h: number, s: number, v: number, a = 1): RGBA {
  const rgb = hsvToRgb(h, s, v)
  return { ...rgb, a }
}

export function hsvaToHex(h: number, s: number, v: number, a = 1): string {
  const rgba = hsvaToRgba(h, s, v, a)
  return rgbaToHex(rgba.r, rgba.g, rgba.b, rgba.a)
}

export function isValidHex(hex: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{4})$/.test(hex)
}

export function normalizeHex(hex: string): string {
  if (hex.length === 4) {
    return "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
  }
  if (hex.length === 5) {
    return "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3] + hex[4] + hex[4]
  }
  return hex
}

export function stripAlpha(hex: string): string {
  if (hex.length === 9) {
    return hex.slice(0, 7)
  }
  return hex
}