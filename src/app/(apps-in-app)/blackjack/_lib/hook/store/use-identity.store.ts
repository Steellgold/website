import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type IdentityStore = {
  name: string;
  setName: (name: string) => void;
  isHost: boolean;
  setIsHost: (isHost: boolean) => void;
  hydrated: boolean;
  setHydrated: (hydrated: boolean) => void;
};

export const useIdentityStore = create<IdentityStore>()(
  persist(
    (set) => ({
      name: "",
      setName: (name: string) => set({ name }),
      isHost: false,
      setIsHost: (isHost: boolean) => set({ isHost }),
      hydrated: false,
      setHydrated: (hydrated: boolean) => set({ hydrated }),
    }),
    {
      name: "identity-store",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);