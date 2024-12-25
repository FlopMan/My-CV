"use client";

import useDesignerTheme from "@/hooks/useDesignerTheme";
import useStyleByTheme from "@/hooks/useStyleByTheme";
import { Theme } from "@/lib/constant";
import Image from "next/image";
import React from "react";

const Banner = () => {
  const background = useStyleByTheme([
    "bg-[#ffffff]",
    "bg-[#3843D0]",
    "bg-[#f6f3ee]",
  ]);
  const banner = useStyleByTheme([
    "/assets/images/designer/banner_bg.png",
    "/assets/images/designer/banner_bg2.png",
    "/assets/images/designer/banner_bg3.png",
  ]);
  const handIcon = useStyleByTheme([
    "/assets/images/designer/hand.svg",
    "/assets/images/designer/white_hand.svg",
    "/assets/images/designer/hand.svg",
  ]);
  const penIcon = useStyleByTheme([
    "/assets/images/designer/pen.svg",
    "/assets/images/designer/white_pen.svg",
    "/assets/images/designer/pen.svg",
  ]);

  return (
    <div
      className={`relative w-full h-[27.07757rem] md:h-[55.5556rem] max-md:mb-[2.13rem] ${background}`}
    >
      <div className="max-md:hidden z-50 px-[1.67rem] w-[32rem] fixed left-[50%] bottom-[4.9rem] -translate-x-1/2 flex justify-center items-center py-[0.83rem] bg-[#fff] rounded-[7.84722rem] border-[1px] solid bg-border-[#131313]">
        <span className="text-theme-primary-content text-[1.11111rem] leading-[1.4] uppercase mr-[1.67rem] flex items-center ">
          <svg
            className="w-[0.55556rem] h-[0.55556rem] object-contain mr-[0.56rem]"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
          >
            <circle cx="4" cy="4.5" r="4" fill="#6172F8" />
          </svg>
          I’m available for work!
        </span>
        <div className="px-[1.39rem] py-[0.83rem] bg-theme-button-background rounded-[4.16667rem]">
          <span className=" text-theme-button-text text-center text-[1.11111rem] leading-[1.3] uppercase">
            Connect now
          </span>
        </div>
      </div>
      <div className="relative w-full h-full md:h-[52.91667rem]">
        <Image alt="banner_bg" src={banner} fill className="object-cover" />
      </div>
      <div className="max-md:px-[1.39rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[86.667rem] w-full">
        <h1 className="text-[2.5rem] md:text-[5.55rem] text-theme-primary-content font-medium text-center">
          <span className="hand_image inline-flex relative w-[2.22222rem] h-[2.22222rem] md:w-[5rem] md:h-[5rem] md:mr-[1.667rem] md:ml-[1.667rem] mr-[0.83rem]">
            <Image src={handIcon} alt="hand" fill className="object-contain" />
          </span>
          Hi, I’m <span className="italic text-theme-highlight">Jenny</span>{" "}
          <br /> A <span className="italic text-theme-highlight">Visual</span>{" "}
          Designer
          <span className="pen_image inline-flex relative w-[2.22222rem] h-[2.22222rem] md:w-[5.556rem] md:h-[5.556rem] ml-[0.83rem] md:ml-[1.667rem]">
            <Image src={penIcon} alt="pen" fill className="object-contain" />
          </span>
          <br />
          with experience since{" "}
          <span className="border-[2px] border-[#999999] rounded-full text-theme-highlight px-[1.39rem] py-[0.83rem] md:py-[0.66667rem] md:px-[2.22222rem] italic text-[2.22222rem] md:text-[4.72222rem] text-e">
            2020
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
