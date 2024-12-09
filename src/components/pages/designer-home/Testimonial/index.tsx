"use client";

import React from "react";
import Item from "./Item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./style.css";

export type TestimonialType = {
  avatar: string;
  name: string;
  position: string;
  description: string;
};

const Testimonial = () => {
  const slides: TestimonialType[] = [
    {
      avatar: "/assets/images/designer/avatar_testimony.png",
      name: "Gerry Kellmen",
      position: "Head of finance",
      description:
        "It is a long established fact that a reader will be distracted by the content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
    },
    {
      avatar: "/assets/images/designer/avatar_testimony.png",
      name: "Gerry Kellmen",
      position: "Head of finance",
      description:
        "It is a long established fact that a reader will be distracted by the content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
    },
    {
      avatar: "/assets/images/designer/avatar_testimony.png",
      name: "Gerry Kellmen",
      position: "Head of finance",
      description:
        "It is a long established fact that a reader will be distracted by the content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
    },
    {
      avatar: "/assets/images/designer/avatar_testimony.png",
      name: "Gerry Kellmen",
      position: "Head of finance",
      description:
        "It is a long established fact that a reader will be distracted by the content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
    },
    {
      avatar: "/assets/images/designer/avatar_testimony.png",
      name: "Gerry Kellmen",
      position: "Head of finance",
      description:
        "It is a long established fact that a reader will be distracted by the content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
    },
    {
      avatar: "/assets/images/designer/avatar_testimony.png",
      name: "Gerry Kellmen",
      position: "Head of finance",
      description:
        "It is a long established fact that a reader will be distracted by the content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
    },
  ];

  return (
    <div className='pt-[6.67rem] pb-[3.33rem] max-md:pt-[3.33rem] max-md:pb-[1.39rem]'>
      <h2 className='text-theme-primary-content text-center text-[2.22222rem] md:text-[4.44444rem] leading-[1.2] font-medium mb-[2.78rem] max-md:mb-[1.67rem]'>Testimonial</h2>
      <div className='testimony overflow-hidden pb-20 max-md:px-[1.39rem]'>
        <Swiper
          loop
          centeredSlides
          centeredSlidesBounds
          slidesPerView={1}
          spaceBetween={20}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              spaceBetween: 20,
              slidesPerView: 3.6,
            },
          }}>
          {slides.map((item, index: number) => (
            <SwiperSlide key={index}>
              <Item item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
