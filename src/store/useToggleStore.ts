import { create } from 'zustand';

interface SetState {
  value: boolean;
  setValue: (val: boolean) => void;
}

const useSetStore = create<SetState>((set) => ({
  value: true,
  setValue: (val) => set({ value: val }),
}));

export const useGetValue = () => useSetStore((state) => state.value);
export const useSetValue = () => useSetStore((state) => state.setValue);
