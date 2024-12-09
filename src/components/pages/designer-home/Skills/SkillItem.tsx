import Image from "next/image";
import React from "react";
import { SkillType } from ".";

type Props = {
  index: number;
  skill: SkillType;
};

const SkillItem = ({ index, skill: { icon, title, description } }: Props) => {
  return (
    <div className='flex flex-col text-theme-primary-content p-[1.67rem] md:p-[2.2222rem] md:pb-[3.3333rem] md:gap-[2.2222rem] rounded-[0.83333rem] bg-[#ffffff] border border-[#BFBEBE]'>
      <div className='flex justify-between'>
        <div className='relative w-[2.8609rem] md:w-[5.55556rem] h-[2.77778rem] md:h-[5.55556rem] max-md:mb-[1.67rem]'>
          <Image src={icon} alt='octa' fill className='object-contain' />
        </div>
        <h5 className='text-[1.66667rem] md:text-[2.77778rem] font-semibold leading-[3.47222rem]'>{index < 10 ? `0${index}` : index}</h5>
      </div>
      <h5 className='text-[1.38889rem] md:text-[2.22222rem] font-semibold leading-[1.2] uppercase max-md:mb-[0.83rem]'>{title}</h5>
      <p className='text-[#545151] text-[0.97222rem] md:text-[1.11111rem] font-normal leading-[1.4]'>{description}</p>
    </div>
  );
};

export default SkillItem;
