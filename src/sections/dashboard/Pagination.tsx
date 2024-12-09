"use client";

import ICArrow from "@/components/icons/ICArrow";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const items: number[] = Array.from({ length: 100 }, (_, index) => index);
export default function PaginationPage() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage: number = 10;

  const offset: number = currentPage * itemsPerPage;
  const currentItems: number[] = items.slice(offset, offset + itemsPerPage);
  const pageCount: number = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }): void => {
    setCurrentPage(event.selected);
  };
  return (
    <div className="text-[#262626] text-[0.97222rem] font-medium leading-[1.3] w-full flex items-center justify-center">
      <ReactPaginate
        previousLabel={<ICArrow className="size-[1.11111rem] " />}
        nextLabel={<ICArrow className="size-[1.11111rem] rotate-[180deg]" />}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={
          "pagination flex items-center [&_.previous]:mx-[1rem] [&_li]:cursor-pointer [&_li]:size-[2.22222rem] [&_li]:p-[0.69444rem] [&_li]:ronded-[0.55556rem] [&_li]:flex [&_li]:items-center [&_li]:justify-center"
        }
        activeClassName={"bg-[#171717] text-white rounded-[0.55556rem]"}
      />
    </div>
  );
}
