"use client";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { Theme } from "@/lib/constant";

const useDesignerTheme = () => {
  const params = useSearchParams();

  const themeSearch = params.get("theme");

  const getTheme = (value?: string | null) => {
    switch (value) {
      case Theme.DESIGNER2:
        return Theme.DESIGNER2;
      case Theme.DESIGNER3:
        return Theme.DESIGNER3;
      default:
        return Theme.DESIGNER1;
    }
  };

  const theme = useMemo(() => {
    return getTheme(themeSearch);
  }, [themeSearch]);

  return {
    theme: theme,
  };
};

export default useDesignerTheme;
