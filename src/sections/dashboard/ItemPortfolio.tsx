"use client";

import Image from "@/components/base/Image";
import { ItemCategoryTemplate, ItemTemplate } from "@/types/template";
import Link from "next/link";

export default function ItemPortfolio({ data }: { data: ItemTemplate }) {
  function handleGenerateTitleCategories(listCategory: ItemCategoryTemplate[]) {
    const result = listCategory.map((item) => item.TITLE).join(", ");
    return result;
  }

  return (
    <div className="relative">
      <Image
        className="w-full h-[12.29167rem] rounded-[0.27778rem] mb-[0.83333rem]"
        alt={data.TITLE}
        src={data.THUMBNAIL}
        width={800}
        height={600}
      />
      <div className="space-y-[0.28rem]">
        <Link
          href={"/"}
          className="text-[#121216] text-[0.97222rem] leading-[1.3] flex-1"
        >
          {data.TITLE}
        </Link>
        <p className="text-[#525866] text-[0.97222rem] leading-[1.3]">
          {handleGenerateTitleCategories(data.CATEGORIES)}
        </p>
      </div>
    </div>
  );
}
