/* eslint-disable no-unused-vars */

import { create } from "zustand";

type Store = {
  clientWidth: number;
  setClientWidth: (value: number) => void;
};

const useStoreInit = create<Store>()((set) => ({
  clientWidth: 1600,
  setClientWidth: (value) => set({ clientWidth: value }),
}));

export default useStoreInit;
