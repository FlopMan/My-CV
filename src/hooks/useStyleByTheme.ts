"use client";

import { Theme } from "@/lib/constant";
import useDesignerTheme from "./useDesignerTheme";

const useStyleByTheme = (values: string[]) => {
  const { theme } = useDesignerTheme();
  const style = () => {
    switch (theme) {
      case Theme.DESIGNER2:
        return values[1];
      case Theme.DESIGNER3:
        return values[2];
      default:
        return values[0];
    }
  };
  return style();
};

export default useStyleByTheme;
