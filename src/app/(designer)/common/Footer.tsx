"use client";
import useStyleByTheme from "@/hooks/useStyleByTheme";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const background = useStyleByTheme(["bg-[#fff]", "bg-transparent", "bg-[#fff]"]);

  return (
    <div className={`px-[1.46rem] md:px-[7.03rem] pt-[3.51rem] pb-[2.34rem] md:pb-[1.17rem] flex flex-col items-center ${background}`}>
      <p className='text-[#131313] text-center md:w-[61rem] text-[2.34261rem] md:text-[4.68521rem] font-semibold leading-[1.2] tracking-[-0.07321rem] mb-[1.76rem] md:mb-[1.46rem]'>
        You have a project?
        <br /> Let’s connect!
      </p>
      <p className='text-[#545151] text-[1.02489rem] md:text-[1.31772rem] leading-[1.4] mb-[0.88rem]'>Contact through:</p>
      <Link className='text-[#131313] text-[1.46413rem] md:text-[2.34261rem] mb-[2.93rem] md:mb-[3.2rem]' href={"mailto:Yourmail@gmail.com"}>
        Yourmail@gmail.com
      </Link>

      <div className='flex space-x-[1.46rem] max-md:space-x-[0.59rem] mb-[4.69rem] md:mb-[7.03rem]'>
        <div className='rounded-[4.83163rem] bg-[#DFE3FE] py-[0.58rem] px-[1.46rem] max-md:px-[1.17rem] max-md:py-[0.59rem] '>
          <span className='text-[#131313] text-[1.02489rem] leading-[1.3] uppercase'>Behance</span>
        </div>
        <div className='rounded-[4.83163rem] bg-[#DFE3FE] py-[0.58rem] px-[1.46rem] max-md:px-[1.17rem] max-md:py-[0.59rem] '>
          <span className='text-[#131313] text-[1.02489rem] leading-[1.3] uppercase'>Dribbble</span>
        </div>
        <div className='rounded-[4.83163rem] bg-[#DFE3FE] py-[0.58rem] px-[1.46rem] max-md:px-[1.17rem] max-md:py-[0.59rem] '>
          <span className='text-[#131313] text-[1.02489rem] leading-[1.3] uppercase'>Linkedin</span>
        </div>
      </div>

      <div className='flex justify-between w-full'>
        <span className='text-[#131313] leading-[1.3] text-[1.02489rem]'>© 2024 </span>
        <div className='flex items-center space-x-[0.95rem] max-md:hidden'>
          <Link href={"/"} className='text-[#444444] text-[0.95168rem] font-medium leading-[1.5]'>
            HOME
          </Link>
          <Link href={"/"} className='text-[#444444] text-[0.95168rem] font-medium leading-[1.5]'>
            PROJECTS
          </Link>
          <Link href={"/"} className='text-[#444444] text-[0.95168rem] font-medium leading-[1.5]'>
            ABOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
