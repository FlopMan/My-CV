"use client";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../dashboard/app-sidebar";
import { Input } from "../ui/input";
import ICSearch from "../icons/ICSearch";
import ICAdd from "../icons/ICAdd";
import ICArrow from "../icons/ICArrow";
import { Suspense } from "react";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="bg-white">
      <Suspense>
        <AppSidebar />
      </Suspense>
      <SidebarInset>
        <header className="sticky bg-white z-10 top-0 left-0 w-full h-[5rem] flex items-center justify-between px-[1.38889rem]">
          <div className="relative">
            <Input
              className="py-[0.55556rem] pr-[0.83333rem] pl-[2.64rem] h-[2.5rem] w-[16.66667rem] border-none rounded-[0.41667rem] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-white placeholder:text-[#85868A] !leading-[1.35] !text-[1.11111rem] text-[#737373]"
              placeholder="Search by name"
            />
            <ICSearch className="size-[1.25rem] absolute top-1/2 -translate-y-1/2 left-[0.83333rem]" />
          </div>
          <div className="flex items-center space-x-[1.39rem]">
            <div className="flex items-center h-[2.77778rem] p-[0.83333rem_1.11111rem] rounded-[0.41667rem] border-[1px] border-solid border-[#D4D4D4] shadow-[0px_4px_10px_0px_rgba(91,91,91,0.04)]">
              <ICAdd className="size-[1.25rem]" />
              <p className="text-[#121216] text-[0.97222rem] font-medium leading-[1.3] font-roboto">
                Add New Project
              </p>
            </div>
            <div className="flex items-center space-x-[0.56rem]">
              <div className="size-[2.77778rem] flex items-center justify-center rounded-full bg-[#F3562E] text-white text-[1.11111rem]">
                TD
              </div>
              <ICArrow className="size-[1.25rem] rotate-[-90deg]" />
            </div>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
