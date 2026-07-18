type RouteProps = {
  params: Promise<{
    seed: string
  }>
}

const hashString = (value: string): number => {
  return [...value].reduce((hash, char) => {
    return char.charCodeAt(0) + ((hash << 5) - hash)
  }, 0)
}

export const GET = async (
  _request: Request,
  { params }: RouteProps
): Promise<Response> => {
  const { seed } = await params
  const hash = Math.abs(hashString(seed))

  const hue1 = hash % 360
  const hue2 = (hash + 80) % 360
  const hue3 = (hash + 180) % 360

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256">
      <defs>
        <radialGradient id="gradient" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stop-color="hsl(${hue1} 90% 85%)" />
          <stop offset="45%" stop-color="hsl(${hue2} 85% 65%)" />
          <stop offset="100%" stop-color="hsl(${hue3} 80% 55%)" />
        </radialGradient>

        <filter id="blur">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      <rect width="256" height="256" fill="url(#gradient)" />

      <circle
        cx="145"
        cy="145"
        r="70"
        fill="hsl(${hue2} 90% 55%)"
        opacity="0.65"
        filter="url(#blur)"
      />
    </svg>
  `

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
