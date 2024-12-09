"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import IC3dot from "@/components/icons/IC3dot";
import { ItemPortfolio } from "@/types/portfolio";
import Image from "@/components/base/Image";

export default function ItemDraft({ data }: { data: ItemPortfolio }) {
  console.log("🚀 ~ ItemDraft ~ data:", data);
  return (
    <div className="relative">
      <Image
        className="w-full h-[12.29167rem] rounded-[0.27778rem] mb-[0.83333rem]"
        alt=""
        src={"/assets/illustrations/characters/character_10.png"}
        width={800}
        height={600}
      />
      <div className="flex items-center justify-between space-x-[0.5rem]">
        <Link
          href={"/"}
          className="text-[#121216] text-[0.97222rem] leading-[1.3] flex-1"
        >
          {data?.TITLE}
        </Link>
        <div className="flex items-center justify-center h-[1.66667rem] p-[0.13889rem_0.41667rem] rounded-[0.41667rem] bg-[#F7FEE7] text-[#0A3D09] text-[0.83333rem] font-medium leading-[1.3]">
          Published
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="absolute rounded-full border-none size-[2.22222rem] bg-[#FAFAFA] p-0 flex items-center justify-center top-[0.42rem] right-[0.97rem]">
          <IC3dot className="size-[1.11111rem]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-white border-none w-[9.30556rem] py-[0.27778rem] rounded-[0.27778rem] shadow-[0px_3px_6px_-3px_rgba(23,24,24,0.08),0px_0px_20px_-4px_rgba(23,24,24,0.12)]"
        >
          <DropdownMenuItem className="p-[0.27778rem_0.55556rem_0.27778rem_1.11111rem] bg-white text-[#2C2C31] text-[0.97222rem] leading-[1.35]">
            <Link href={"/"}>Edit in Builder</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="p-[0.27778rem_0.55556rem_0.27778rem_1.11111rem] bg-white text-[#2C2C31] text-[0.97222rem] leading-[1.35]">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="p-[0.27778rem_0.55556rem_0.27778rem_1.11111rem] bg-white text-[#2C2C31] text-[0.97222rem] leading-[1.35]">
            Team
          </DropdownMenuItem>
          <DropdownMenuItem className="p-[0.27778rem_0.55556rem_0.27778rem_1.11111rem] bg-white text-[#2C2C31] text-[0.97222rem] leading-[1.35]">
            Subscription
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
