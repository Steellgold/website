"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { generateName } from "just-random-names";

type IdentityState = {
  name: string;
  setName: (name: string) => void;
};

export const useIdentity = create<IdentityState>()(
  persist(
    (set, get) => ({
      name: generateName(),
      setName: (name) => set({ name }),
    }),
    { name: "identity-storage", getStorage: () => localStorage }
  )
);
