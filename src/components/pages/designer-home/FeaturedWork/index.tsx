"use client";

import React from "react";
import WorkItem, { WorkItemType } from "./WorkItem";
import Image from "next/image";

const FeaturedWork = () => {
  const items: WorkItemType[] = [
    {
      thumbs: ["/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png"],
      title: "An Branding Agency Website",
      categories: ["Website design", "Redesign"],
      description: "A unique website for Branding Agency",
    },
    {
      thumbs: ["/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png"],
      title: "An Branding Agency Website",
      categories: ["Website design", "Redesign"],
      description: "A unique website for Branding Agency",
    },
    {
      thumbs: ["/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png"],
      title: "An Branding Agency Website",
      categories: ["Website design", "Redesign"],
      description: "A unique website for Branding Agency",
    },
    {
      thumbs: ["/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png"],
      title: "An Branding Agency Website",
      categories: ["Website design", "Redesign"],
      description: "A unique website for Branding Agency",
    },
    {
      thumbs: ["/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png"],
      title: "An Branding Agency Website",
      categories: ["Website design", "Redesign"],
      description: "A unique website for Branding Agency",
    },
  ];

  return (
    <div className='md:p-[6.67rem] px-[1.39rem] py-[3.33rem]'>
      <h1 className='text-theme-primary-content text-[2.22222rem] md:text-[4.44444rem] leading-[1.2] font-semibold text-center mb-[2.22rem] md:mb-[3.89rem] flex items-center justify-center gap-[1.39rem]'>
        <span className='relative inline-flex w-[2.23132rem] md:w-[4.46917rem] h-[2.22222rem] md:h-[4.46917rem]'>
          <Image src={"/assets/images/designer/union.svg"} alt='union' fill />
        </span>
        Featured Word
        <span className='relative inline-flex w-[2.23132rem] md:w-[4.46917rem] h-[2.22222rem] md:h-[4.46917rem]'>
          <Image src={"/assets/images/designer/union.svg"} alt='union' fill />
        </span>
      </h1>
      <div className='grid md:grid-cols-12 md:gap-x-[2.78rem] md:gap-y-[3.3333rem] max-md:space-y-[1.67rem] max-md:flex flex-col'>
        <div className='md:col-span-12'>
          <WorkItem item={items[0]} isMainItem index={1} />
        </div>
        {items.slice(1, 5).map((item, index) => (
          <div key={index} className='md:col-span-6'>
            <WorkItem item={item} index={index + 2} />
          </div>
        ))}
      </div>
      <div className='flex mt-[2.22rem] md:mt-[3.89rem] justify-center'>
        <button className='w-[12.43056rem] h-[12.43056rem] rounded-full bg-[#111111] text-[#ffffff] text-[1.25rem] leading-[1.625rem] uppercase '>
          <span className='relative inline-flex w-[1.16028rem] h-[0.84389rem] mr-[0.55556rem]'>
            <Image src='/assets/images/designer/arrow_right.svg' alt='arrow_right' fill />
          </span>
          All project
        </button>
      </div>
    </div>
  );
};

export default FeaturedWork;
