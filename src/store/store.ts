import create from 'zustand';

type Store = {
    isHovered: boolean;
    setHovered: (hovered: boolean) => void;
   };

export const useHoverStore = create<Store>((set) => ({
  isHovered: false,
  setHovered: (hovered) => set(() => ({ isHovered: hovered }))
}));
