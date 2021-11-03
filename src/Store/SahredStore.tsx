import create from "zustand";

interface GifState {
  gifs: [];
  addGif: (gifs: any) => void;
}

export const useSharedStore = create<GifState>((set) => ({
  gifs: [],
  addGif: (gifs) => set({ gifs }),
}));
