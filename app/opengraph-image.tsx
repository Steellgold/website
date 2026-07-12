import { PERSON, SITE_NAME } from "@/config/site"
import { ImageResponse } from "next/og"

export const alt = "Gaëtan Huszovits, Full-Stack Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const GREETING = "Hi, I'm"
const TAGLINE = "Full-Stack Developer for the Next.js / React ecosystem"

async function loadGoogleFont(weight: 400 | 500, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&text=${encodeURIComponent(text)}`
  const css = await (await fetch(url)).text()
  const match = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

  if (match) {
    const response = await fetch(match[1])
    if (response.status === 200) {
      return response.arrayBuffer()
    }
  }

  throw new Error("Failed to load Inter font data")
}

const Image = async () => {
  const text = `${GREETING}${SITE_NAME}${TAGLINE}`

  const [photoBuffer, fontMedium, fontRegular] = await Promise.all([
    fetch(PERSON.image).then((res) => res.arrayBuffer()),
    loadGoogleFont(500, text),
    loadGoogleFont(400, text),
  ])
  const photoSrc = `data:image/png;base64,${Buffer.from(photoBuffer).toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          color: "#ffffff",
          padding: 80,
          fontFamily: "Inter",
        }}
      >
        <img
          src={photoSrc}
          width={220}
          height={220}
          alt=""
          style={{ borderRadius: 36, objectFit: "cover", marginRight: 56 }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, fontWeight: 400, opacity: 0.6 }}>{GREETING}</div>
          <div style={{ fontSize: 72, fontWeight: 500, marginTop: 4 }}>{SITE_NAME}</div>
          <div style={{ fontSize: 32, fontWeight: 400, opacity: 0.7, marginTop: 16 }}>
            {TAGLINE}
          </div>
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
      fonts: [
        { name: "Inter", data: fontMedium, style: "normal", weight: 500 },
        { name: "Inter", data: fontRegular, style: "normal", weight: 400 },
      ],
    }
  )
}

export default Image;
