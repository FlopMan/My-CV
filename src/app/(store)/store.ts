/* eslint-disable no-unused-vars */

import { create } from "zustand";

type Store = {
  currentKey: string;
  currentKeyChild: string;
  setCurrentKey: (value: string) => void;
  setCurrentKeyChild: (value: string) => void;
  valuesForm: any;
  setValuesForm: (value: any) => void;
  containerWidth: number;
  setContainerWidth: (value: number) => void;
  contentRef: HTMLDivElement | null;
  setContentRef: (value: HTMLDivElement | null) => void;
  themeState: string;
  setThemeState: (value: string) => void;
  asideEditRef: HTMLDivElement | null;
  setAsideEditRef: (value: HTMLDivElement | null) => void;
  valuesProject: any;
  setValuesProject: (value: any) => void;
};

const useStore = create<Store>()((set) => ({
  currentKey: "",
  setCurrentKey: (value) => set({ currentKey: value }),
  currentKeyChild: "",
  setCurrentKeyChild: (value) => set({ currentKeyChild: value }),
  valuesForm: null,
  setValuesForm: (value) => set({ valuesForm: value }),
  containerWidth: 0,
  setContainerWidth: (value) => set({ containerWidth: value }),
  contentRef: null,
  setContentRef: (value) => set({ contentRef: value }),
  themeState: "dark",
  setThemeState: (value) => set({ themeState: value }),
  asideEditRef: null,
  setAsideEditRef: (value) => set({ asideEditRef: value }),
  valuesProject: null,
  setValuesProject: (value) => set({ valuesProject: value }),
}));

export default useStore;
