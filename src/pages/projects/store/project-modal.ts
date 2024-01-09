import { create, StoreApi, UseBoundStore } from "zustand";

type ProjectModalStore = UseBoundStore<
  StoreApi<{
    isOpen: boolean;
    imagesUrl: string[];
    open: (imagesUrl: string[]) => void;
    close: () => void;
  }>
>;

export const useProjectModalStore: ProjectModalStore = create((set) => ({
  isOpen: false,
  imagesUrl: [],
  open: (imagesUrl: string[]) => set({ isOpen: true, imagesUrl: imagesUrl }),
  close: () => set({ isOpen: false }),
}));
