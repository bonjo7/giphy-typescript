import create from "zustand";

interface GifState {
    gifs: [];
    addGif: ([{}]) => void;
  }
  
  export const useSharedStore = create<GifState>((set) => ({
   
    gifs: [],
    
    addGif: ([{}]) => {
      set((state) => ({
        gifs: [
          ...state.gifs
        ],
      }));
    }
  }));
