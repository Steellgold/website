import { PERSON } from "@/config/site"
import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

const Icon = async () => {
  const photoBuffer = await fetch(PERSON.image).then((res) => res.arrayBuffer())
  const photoSrc = `data:image/png;base64,${Buffer.from(photoBuffer).toString("base64")}`

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <img
          src={photoSrc}
          width={size.width}
          height={size.height}
          alt=""
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    { ...size }
  )
}

export default Icon