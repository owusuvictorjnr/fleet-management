import { create } from "zustand";

interface BatteryState {
  level: number;
  setLevel: (level: number) => void;
}

export const useBatterystore = create<BatteryState>((set) => ({
  level: 100,
  setLevel: (level) => set({ level }),
}));
