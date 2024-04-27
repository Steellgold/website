import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PartyEndReason, WordleParty } from "../types/wordle.type";

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

  // setWin: (id: string) => void;
  // setLose: (id: string, reason: PartyEndReason) => void;

  isJokerUsed: (id: string) => boolean;
  setJokerUsed: (id: string) => void;

  // getLine: (id: string, lineIndex: number) => { letter: string; status: string }[];
  // addLine: (id: string, line: { letter: string; status: string }[]) => void;
  // editLine: (id: string, lineIndex: number, line: { letter: string; status: string }[]) => void;
};

export const useWorldePartyStore = create(
  persist<PartyStore>(
    (set, get) => ({
      parties: [],
      activePartyId: null,
      setActivePartyId: (id) => set(() => ({ activePartyId: id })),

      getParty: (id) => get().parties.find((party) => party.id === id),
      // getLine: (id, lineIndex) => get().getParty(id)?.lines?.[lineIndex] || [],

      addParty: (party) => {
        set((state) => ({ parties: [...state.parties, party] }));
        set(() => ({ activePartyId: party.id }));
      },

      removeParty: (id) => {
        set((state) => ({ parties: state.parties.filter((party) => party.id !== id) }));
        set((state) => ({ activePartyId: state.activePartyId === id ? null : state.activePartyId }));
      },

      isJokerUsed: (id) => !!get().getParty(id)?.jokerUsed,
      setJokerUsed: (id) => {
        set((state) => ({ parties: state.parties.map((party) => party.id === id ? { ...party, jokerUsed: true } : party) }));
      },

      // setWin: (id) => set((state) => {
      //   const party = state.parties.find((party) => party.id === id);
      //   if (!party) return;

      //   party.endStatus = "win";
      //   party.finishedAt = Date.now();
      // }),

      // setLose: (id, reason) => set((state) => {
      //   const party = state.parties.find((party) => party.id === id);
      //   if (!party) return;

      //   party.endStatus = "lose";
      //   party.endReason = reason;
      //   party.finishedAt = Date.now();
      // }),

      // addLine: (id, line) => set((state) => {
      //   const party = state.parties.find((party) => party.id === id);
      //   if (!party) return;

      //   party.lines = party.lines || [];
      //   party.lines.push(line);
      // }),

      // editLine: (id, lineIndex, line) => set((state) => {
      //   const party = state.parties.find((party) => party.id === id);
      //   if (!party) return;

      //   party.lines = party.lines || [];
      //   party.lines[lineIndex] = line;
      // })
    }),
    { name: "wordle-party-storage" },
  ),
);