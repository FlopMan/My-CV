import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { getTheme } from "@/lib/theme";

export const useTheme = () => {
  const params = useSearchParams();

  const themeSearch = params.get("theme");

  const theme = useMemo(() => {
    return getTheme(themeSearch);
  }, [themeSearch]);

  return {
    theme: theme,
  };
};
