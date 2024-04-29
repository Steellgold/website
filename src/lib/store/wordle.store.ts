import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Line, PartyEndReason, WordleParty } from "../types/wordle.type";
import { dayJS } from "../utils/dayjs/day-js";
import { diffToNum } from "../wordle/utils";

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
  activeLineIndex: number | null;
  setActivePartyId: (id: string | null) => void;
  setActiveLineIndex: (index: number | null) => void;

  getParty: (id: string) => WordleParty | undefined;

  addParty: (party: WordleParty) => void;
  removeParty: (id: string) => void;

  setWin: (id: string) => void;
  setLose: (id: string, reason: PartyEndReason) => void;

  isJokerUsed: (id: string) => boolean;
  setJokerUsed: (id: string) => void;

  setJokerEnabled: (id: string, enabled: boolean) => void;
  isJokerEnabled: (id: string) => boolean;
  setJoker: ( id: string, lineIndex: number, letterIndex: number ) => void;

  addLetter: (letter: string) => void;
  removeLetter: () => void;
  setWord: (word: string) => void;

  setLine: (line: Line) => void;

  setFinishedAt: (id: string) => void;

  clear: () => void;

  refresh: () => void;
};

export const useWorldePartyStore = create(
  persist<PartyStore>(
    (set, get) => ({
      parties: [],
      activePartyId: null,
      activeLineIndex: 0,
      setActivePartyId: (id) => set(() => ({ activePartyId: id })),
      setActiveLineIndex: (index) => set(() => ({ activeLineIndex: index })), 

      getParty: (id) => get().parties.find((party) => party.id === id),

      addParty: (party) => {
        // @ts-ignore
        set((state) => ({
          parties: [
            ...state.parties,
            {
              ...party,
              lines: Array.from({
                length: party.attempts
              }, () => Array.from({ length: diffToNum(party.difficulty) }, () => ({ letter: "", status: "unknow" }))),
            },
          ],
        }));
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

      isJokerEnabled: (id) => !!get().getParty(id)?.jokerEnabled,
      setJokerEnabled: (id, enabled) => {
        set((state) => ({ parties: state.parties.map((party) => party.id === id ? { ...party, jokerEnabled: enabled } : party) }));
      },
      setJoker: (id, lineIndex, letterIndex) => {
        set((state) => ({
          parties: state.parties.map((party) => party.id === id ? {
            ...party,
            joker: { letter: (party.lines ?? [])[lineIndex][letterIndex].letter, lineIndex, letterIndex },
          } : party),
        }));
      },

      setWin: (id) => {
        set((state) => ({
          parties: state.parties.map(
            (party) => party.id === id ? { ...party, endStatus: "win", finishedAt: dayJS().toISOString(), isReadOnly: true } : party
          ),
        }));
        set(() => ({ activePartyId: null }));
      },
      
      setLose: (id, reason) => {
        set((state) => ({
          parties: state.parties.map(
            (party) => party.id === id ?
              { ...party, endStatus: "lose", endReason: reason, finishedAt: dayJS().toISOString(), isReadOnly: true }
              : party
            )
          })
        );
        
        set(() => ({ activePartyId: null }));
      },

      setFinishedAt: (id) => {
        set((state) => ({
          parties: state.parties.map(
            (party) => party.id === id ? { ...party, finishedAt: dayJS().toISOString(), isReadOnly: true } : party
          )
        }));
      },
      
      addLetter: (letter) => {
        const lines: Line[] = get().getParty(get().activePartyId!)?.lines || [];
        const lineIndex = get().activeLineIndex!;

        const line = lines[lineIndex];

        const index = line.findIndex((l) => l.letter === "");
        if (index === -1) return;

        line[index].letter = letter;

        set((state) => ({
          parties: state.parties.map((party) => party.id === state.activePartyId ? { ...party, lines } : party),
        }));
      },

      removeLetter: () => {
        const lines: Line[] = get().getParty(get().activePartyId!)?.lines || [];
        const lineIndex = get().activeLineIndex!;
        const line = lines[lineIndex];

        const lastIndex = line.length - 1;
        for (let i = lastIndex; i >= 0; i--) {
          if (line[i].letter !== "") {
            line[i].letter = "";
            break;
          }
        }

        set((state) => ({
          parties: state.parties.map((party) => party.id === state.activePartyId ? { ...party, lines } : party),
        }));
      },

      setLine: (line) => {
        const lines: Line[] = get().getParty(get().activePartyId!)?.lines || [];
        const lineIndex = get().activeLineIndex!;

        lines[lineIndex] = line;

        set((state) => ({
          parties:
            state.parties.map((party) => party.id === state.activePartyId
              ? { ...party, lines }
              : party
            ),
        }));
      },

      setWord: (word) => {
        const party = get().getParty(get().activePartyId!);
        if (!party) return;

        set((state) => ({
          parties: state.parties.map((party) => party.id === state.activePartyId ? {
            ...party, word: word
          } : party),
        }));
      },

      clear: () => {
        set(() => ({ parties: [], activePartyId: null, activeLineIndex: 0 }));
      },

      refresh() {
        set(() => ({
          activePartyId: null
        }));
      },
    }),
    { name: "wordle-party-storage" },
  ),
);