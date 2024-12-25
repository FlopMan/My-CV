"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryType from "./CategoryType";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./style.css";
import useStyleByTheme from "@/hooks/useStyleByTheme";
import Link from "next/link";
import { useEffect, useState } from "react";

export type WorkItemType = {
  thumbs: string[];
  title: string;
  categories: string[];
  description: string;
};

type Props = {
  isMainItem?: boolean;
  item: WorkItemType;
  index: number;
};

const categoryColors = ["#6172F8", "#131313"];

const Item = ({
  isMainItem,
  item: { thumbs, title, categories, description },
  index,
}: Props) => {
  const arrowUpIcon = useStyleByTheme([
    "/assets/images/designer/arrow_up_right.svg",
    "/assets/images/designer/arrow_up_right2.svg",
    "/assets/images/designer/arrow_up_right.svg",
  ]);
  const [theme, setTheme] = useState("");
  useEffect(() => {
    // Lấy giá trị theme từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const themeParam = urlParams.get("theme");
    setTheme(themeParam || "designerStyle1"); // Nếu không có, gán giá trị mặc định
  }, []);
  return (
    <div
      className={`${isMainItem ? "p-[2.22rem]" : "p-[1.39rem]"} ${
        isMainItem ? "pb-[2.78rem]" : "pb-[2.22rem]"
      } bg-theme-feature-work-background rounded-[1.38889rem] max-md:p-[1.11rem]`}
    >
      <Swiper
        className="swiperPaginationHorizontal"
        slidesPerView={1}
        spaceBetween={20}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {thumbs.map((thumb, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative ${
                isMainItem ? "h-[40.27778rem]" : "h-[27.77778rem]"
              } rounded-[0.83333rem] md:rounded-[1.66667rem] max-md:h-[14.90167rem] w-full overflow-hidden`}
            >
              <Image
                style={{ objectFit: "cover" }}
                src={thumb}
                alt="work_1"
                fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link
        href={`/designer-projects/project-detail?theme=${theme}`}
        className="mt-[1.6rem] block max-md:mt-[1.67rem] text-theme-primary-content font-medium text-[1.11111rem] md:text-[1.75695rem]"
      >
        Project number {index} - {title}
      </Link>
      <div className="flex justify-between">
        <div>
          <div className="mt-[0.76rem] flex gap-[0.56rem]">
            {categories.map((category, index) => (
              <CategoryType
                key={"category" + index}
                content={category}
                color={categoryColors[index]}
              />
            ))}
          </div>
          <p
            className={`mt-[0.76rem] ${
              isMainItem ? "text-[1.25rem]" : "text-[1.11111rem]"
            } text-[#11111199] max-md:text-[0.97222rem]`}
          >
            {description}
          </p>
        </div>
        <button
          className={`max-md:hidden self-end flex justify-center ${
            isMainItem ? "p-[1.11rem]" : "p-[0.83rem]"
          } text-theme-button-text bg-theme-button-background rounded-full text-[1.25rem]`}
        >
          <span
            className={`inline-flex  ${
              isMainItem ? "w-[1.6667rem]" : "w-[1.38889rem]"
            } ${isMainItem ? "h-[1.6667rem]" : "h-[1.38889rem]"} relative`}
          >
            <Image alt="arrow" src={arrowUpIcon} fill />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Item;
