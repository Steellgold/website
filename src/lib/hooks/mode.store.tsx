import { create } from 'zustand';
import { useEffect } from 'react';

type ViewMode = "cv" | "normal";

type ViewModeStore = {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
};

export const useViewMode = create<ViewModeStore>((set, get) => ({
  viewMode: "normal",
  setViewMode: (mode) => set(() => ({ viewMode: mode })),
}));

export const useInitializeViewMode = () => {
  const setViewMode = useViewMode((state) => state.setViewMode);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log(window.location.hostname);
      const defaultViewMode: ViewMode = window.location.hostname === 'gaetanhus.fr' ? 'cv' : 'normal';
      setViewMode(defaultViewMode);
      console.log(`Default view mode: ${defaultViewMode}`);
    }
  }, [setViewMode]);
};
