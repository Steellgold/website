import { create } from "zustand";
import { persist } from "zustand/middleware";
import { WordleParty } from "../types/wordle.type";

type DataStore = {
  hasVisitedWordle: boolean;
  setHasVisitedWordle: () => void;
};

export const useWordleStore = create(
  persist<DataStore>(
    (set) => ({
      hasVisitedWordle: false,
      setHasVisitedWordle: () => set(() => ({ hasVisitedWordle: true })),
    }),
    { name: "wordle-visited-storage" },
  ),
);

type PartyStore = {
  parties: WordleParty[];
  activePartyId: string | null;
  setActivePartyId: (id: string | null) => void;

  getParty: (id: string) => WordleParty | undefined;

  addParty: (party: WordleParty) => void;
  removeParty: (id: string) => void;

  setWin: (id: string) => void;
  setLose: (id: string) => void;

  getLine: (id: string, lineIndex: number) => { letter: string; status: string }[];
  addLine: (id: string, line: { letter: string; status: string }[]) => void;
  editLine: (id: string, lineIndex: number, line: { letter: string; status: string }[]) => void;
};

export const useWorldePartyStore = create(
  persist<PartyStore>(
    (set) => ({
      parties: [],
      activePartyId: null,
      setActivePartyId: (id) => set(() => ({ activePartyId: id })),

      getParty: (id) => {
        return set((state) => state.parties.find((party) => party.id === id));
      },

      addParty: (party) => {
        set((state) => ({ parties: [...state.parties, party] }));
      },

      removeParty: (id) => {
        set((state) => ({ parties: state.parties.filter((party) => party.id !== id) }));
      },

      setWin: (id) => {
        set((state) => {
          const party = state.parties.find((party) => party.id === id);
          if (party) {
            party.finishedAt = Date.now();
            party.endStatus = "win";
          }
        });
      },

      setLose: (id) => {
        set((state) => {
          const party = state.parties.find((party) => party.id === id);
          if (party) {
            party.finishedAt = Date.now();
            party.endStatus = "lose";
          }
        });
      },

      getLine: (id, lineIndex) => {
        return set((state) => {
          const party = state.parties.find((party) => party.id === id);
          if (party) {
            return party.lines[lineIndex];
          }
          return [];
        });
      },
      
      addLine: (id, line) => {
        set((state) => {
          const party = state.parties.find((party) => party.id === id);
          if (party) {
            party.lines.push(line);
          }
        });
      },

      editLine: (id, lineIndex, line) => {
        set((state) => {
          const party = state.parties.find((party) => party.id === id);
          if (party) {
            party.lines[lineIndex] = line;
          }
        });
      },
    }),
    { name: "wordle-party-storage" },
  ),
);