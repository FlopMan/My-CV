"use client";
import MenuMobile from "@/app/(designer)/common/MenuMobile";
import useStyleByTheme from "@/hooks/useStyleByTheme";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const background = useStyleByTheme(["bg-[#ffffff]", "bg-transparent", "bg-transparent"]);
  const backgroundButton = useStyleByTheme(["bg-[#ffffff]", "bg-theme-button-background", "bg-theme-button-background"]);
  const colorButton = useStyleByTheme(["text-theme-primary", "text-[#131313]", "text-[#fff]"]);

  const [backgroundColor, setBackgroundColor] = useState(background);
  const [textColor, setTextColor] = useState("text-theme-primary");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackgroundColor("bg-[#fff]");
        setTextColor("text-[#131313]");
      } else {
        setBackgroundColor(background);
        setTextColor("text-theme-primary");
      }
    });
  }, [background]);

  return (
    <div className={`${isOpen ? "w-screen h-screen fixed bg-[#01000560] z-50" : ""}`}>
      <div className={`px-[7.03rem] max-md:p-[1.46rem] flex justify-between items-center py-[1.76rem] fixed w-full z-10 top-0 ${backgroundColor} ${textColor}`}>
        <p className=' text-[1.46413rem] md:text-[2.22222rem] leading-[1.1] max-md:tracking-[-0.07321rem] md:leading-[1.5]'>Jenny Nguyen</p>
        <div className='flex items-center justify-center gap-[2.22rem] max-md:hidden'>
          <Link href={"/"} className=' text-[1.11111rem] font-medium leading-[1.5]'>
            HOME
          </Link>
          <Link href={"/"} className=' text-[1.11111rem] font-medium leading-[1.5]'>
            PROJECTS
          </Link>
          <Link href={"/"} className=' text-[1.11111rem] font-medium leading-[1.5]'>
            ABOUT
          </Link>
          <Link
            href={"/"}
            className={`${backgroundButton} ${colorButton} text-[1.11111rem] font-medium leading-[1.5] px-[1.88rem] py-[1.04rem] rounded-[2.64rem] border-[1px] border-solid border-[#131313]`}>
            WORK WITH ME
          </Link>
        </div>

        <svg onClick={() => setIsOpen(true)} className='md:hidden' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path d='M5 17H19M5 12H19M5 7H19' stroke='#131313' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
        </svg>
      </div>

      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
