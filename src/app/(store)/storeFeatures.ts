/* eslint-disable no-unused-vars */

import { create } from "zustand";

type Store = {
  isOpenTableContent: boolean;
  setIsOpenTableContent: (value: boolean) => void;
};

const useStoreFeatures = create<Store>()((set) => ({
  isOpenTableContent: true,
  setIsOpenTableContent: (value) => set({ isOpenTableContent: value }),
}));

export default useStoreFeatures;
