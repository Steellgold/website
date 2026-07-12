"use client"

import { useSyncExternalStore } from "react"

const emptySubscribe = () => () => {}

export const useMounted = (): boolean =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )
