import React from "react";
import { CountType } from ".";

type Props = {
  item: CountType;
};

const Count = ({ item: { count, description } }: Props) => {
  return (
    <h5 className='text-[4.44444rem] md:text-[5.55556rem] text-theme-primary-content leading-[1.2] font-bold flex items-end'>
      {count}
      <span className='text-[2.22222rem] md:text-[2.77778rem] leading-[1.2] font-bold self-start'>+</span>
      <span className='text-[#535353] text-[1.11111rem] md:text-[1.25rem] leading-[1.75] font-normal'>{description}</span>
    </h5>
  );
};

export default Count;
