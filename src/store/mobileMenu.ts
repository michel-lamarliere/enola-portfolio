import { create, StoreApi, UseBoundStore } from "zustand";

type MobileMenuStore = UseBoundStore<
  StoreApi<{
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
  }>
>;

export const useMobileMenuStore: MobileMenuStore = create((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
