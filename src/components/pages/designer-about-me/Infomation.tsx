"use client";
import useStyleByTheme from "@/hooks/useStyleByTheme";
import Image from "next/image";

export default function Infomation() {
  const border = useStyleByTheme(["border-[#27262630]", "border-transparent", "border-transparent"]);

  return (
    <div className='md:w-[27.91667rem] w-full md:mr-[5rem] flex-shrink-0 max-md:hidden'>
      <Image src={"/assets/images/pagess/avt.png"} alt='avt' width={400} height={400} className='w-full h-[31.25rem] object-cover rounded-[2.22222rem] mb-[1.39rem]' />

      <div className={`grid grid-cols-1 border gap-[1.11rem] w-[full] rounded-[1.38889rem] bg-[#fff] p-[1.67rem] ${border}`}>
        {Array(3)
          .fill(0)
          .map((e, index) => (
            <div className='flex  items-center' key={index}>
              <Image src={"/assets/images/pagess/chat.svg"} alt='avt' width={100} height={100} className='w-[2.22222rem] h-[2.22222rem] object-cover rounded-[50%]  mr-[1.11rem]' />
              <span className='text-[#666] text-[1.125rem] leading-[1.4] mr-[0.56rem]'>Email:</span>
              <span className='text-[#1E1E1E] text-[1.25rem] leading-[1.3] font-semibold'>Yourmail@gmail.com</span>
            </div>
          ))}
      </div>
    </div>
  );
}
