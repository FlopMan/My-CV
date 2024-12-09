import Image from "next/image";
import React from "react";
import { TestimonialType } from ".";

type Props = {
  item: TestimonialType;
};
const Item = ({ item: { avatar, name, position, description } }: Props) => {
  return (
    <div className='px-[1.67rem] py-[2.22rem] flex flex-col gap-[1.67rem] rounded-[0.83333rem] border border-[#BFBEBE] bg-[#ffffff]'>
      <div className='flex gap-[0.56rem]'>
        <div className='relative w-[3.33333rem] h-[3.33333rem] rounded-full overflow-hidden'>
          <Image style={{ objectFit: "cover" }} src={avatar} alt='avatar' fill />
        </div>
        <div className='flex flex-col gap-[0.27778rem]'>
          <h5 className='text-theme-primary-content text-[1.38889rem] leading-[1.80556rem] font-semibold'>{name}</h5>
          <p className='text-[#595959] text-[0.97222rem] leading-[1.25rem]'>{position}</p>
        </div>
      </div>
      <p className='text-[#595959] text-[1.11111rem] leading-6 text-justify'>{description}</p>
    </div>
  );
};

export default Item;
