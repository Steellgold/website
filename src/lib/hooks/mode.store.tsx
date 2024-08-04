import { create } from 'zustand';

type ViewMode = "cv" | "normal";

type ViewModeStore = {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
};

export const useViewMode = create<ViewModeStore>((set, get) => ({
  viewMode: "normal",
  setViewMode: (mode) => set(() => ({ viewMode: mode })),
}));