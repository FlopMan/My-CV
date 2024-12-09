import { cookies } from "next/headers";

import { Theme } from "./constant";

export function getTheme(value?: string | null) {
  switch (value) {
    case Theme.GREEN:
      return Theme.GREEN;
    case Theme.LIGHT:
      return Theme.LIGHT;
    default:
      return Theme.DARK;
  }
}

export const getCookieTheme = () => {
  const cookieStore = cookies();
  return getTheme(cookieStore.get("theme")?.value || "");
};
