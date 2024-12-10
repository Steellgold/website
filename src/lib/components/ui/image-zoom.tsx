"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface ImageZoomProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function ImageZoom({ src, alt, width, height, className }: ImageZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  const toggleZoom = () => setIsZoomed(!isZoomed)

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={cn("cursor-zoom-in", className)}
        onClick={toggleZoom}
      />
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            onClick={toggleZoom}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-h-full max-w-full overflow-auto"
              onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-2 justify-center items-center">
                <img
                  src={src}
                  alt={alt}
                  className="max-h-[90vh] max-w-[90vw] object-contain cursor-zoom-out"
                />
                
                <p>Click outside the image to close the zoom.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
