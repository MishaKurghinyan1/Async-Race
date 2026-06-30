import { create } from 'zustand';

interface PaginationState {
  page: number;
  turnPage: (offset: number) => void;
  setPage: (absolutePage: number) => void;
}

const usePaginationStore = create<PaginationState>((set) => ({
  page: 1,

  turnPage: (offset) =>
    set((state) => ({
      page: Math.max(1, state.page + offset),
    })),

  setPage: (absolutePage) => set({ page: absolutePage }),
}));

export const useGetPage = () => usePaginationStore((state) => state.page);
export const useTurnPage = () => usePaginationStore((state) => state.turnPage);
export const useSetPage = () => usePaginationStore((state) => state.setPage);
