/* eslint-disable no-unused-vars */
import { create } from "zustand";

export enum ModeViewPort {
  DESKTOP = "desktop",
  TABLET = "tablet",
  MOBILE = "mobile",
}

type Store = {
  isViewPort: boolean;
  setIsViewPort: (value: boolean) => void;
  modeViewPort: ModeViewPort;
  setModeViewPort: (value: ModeViewPort) => void;
};

const useStoreViewPort = create<Store>()((set) => ({
  isViewPort: false,
  setIsViewPort: (value) => set({ isViewPort: value }),
  modeViewPort: ModeViewPort.DESKTOP,
  setModeViewPort: (value) => set({ modeViewPort: value }),
}));

export default useStoreViewPort;
