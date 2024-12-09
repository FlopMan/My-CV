"use client";
import { Assets } from "@/assets";
import { Theme } from "@/lib/constant";
// import { getCookieTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

import { Icon } from "./base/icon/Icon";
import useStore from "@/app/(store)/store";

export const TextTitle = (props: {
  title: string;
  className?: string;
  icon?: React.ReactNode;
}) => {
  const { className, icon } = props;
  const { themeState } = useStore((state) => state);

  const IconMapping = {
    [Theme.DARK]: {
      icon: (
        <Icon
          url={icon || Assets.asteriskIcon.src}
          className="text-[#E63B1D]"
          size={20}
        />
      ),
      text: "text-[#D2DEFC]",
    },
    [Theme.LIGHT]: {
      icon: (
        <Icon
          url={icon || Assets.asteriskLightIcon.src}
          className="text-[#F65D2C]"
          size={20}
        />
      ),
      text: "text-light-primary",
    },
    [Theme.GREEN]: {
      icon: (
        <div className="w-3.5 h-1.5 min-w-3.5 rounded-[19px] bg-[#12C99D]" />
      ),
      text: "text-[#D2DEFC]",
    },
  };

  const { icon: iconDefault, text } =
    IconMapping[themeState as keyof typeof IconMapping];

  return (
    <div className={cn("flex items-center gap-2 ", className)}>
      {iconDefault}
      <span className={cn("text-normal-14 uppercase", text)}>
        {props.title}
      </span>
    </div>
  );
};
