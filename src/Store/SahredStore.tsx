import create from "zustand";
interface Gif {
  [x: string]: any;
}
interface GifState {
  gifs: Gif[];
  addGif: (gifs: any) => void;
}

export const useSharedStore = create<GifState>((set) => ({
  gifs: [],
  addGif: (gifs) => set({ gifs }),
}));
