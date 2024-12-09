"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenuItem,
  SidebarMenu,
  SidebarMenuSub,
  SidebarMenuButton,
  SidebarGroup,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { TeamSwitcher } from "./team-switcher";
import Link from "next/link";
import ICHome from "../icons/ICHome";
import { logoutForm } from "@/actions/logoutForm";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="bg-white" collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <Collapsible
              key={"home"}
              asChild
              defaultOpen={false}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    className="active group-data-[collapsible=icon]:p-[0.83rem_0.56rem] h-[3.33333rem] hover:bg-[rgba(10,13,20,0.05)] p-[0.83333rem_0.83333rem_0.83333rem_1.11111rem] flex items-center rounded-[0.41667rem] [&.active]:bg-[rgba(10,13,20,0.05)]"
                    tooltip={"Dashboard"}
                  >
                    <Link
                      href={"/"}
                      className="flex items-center space-x-[0.83333rem]"
                    >
                      <ICHome className="filter brightness-[1] invert-[100] size-[1.66667rem]" />
                      <span className="text-[#0A0D14] text-[1.11111rem] leading-[1.375]">
                        Dashboard
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-0">
        <SidebarMenu>
          <Collapsible
            key={"logout"}
            asChild
            defaultOpen={false}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  className="group-data-[collapsible=icon]:[&_svg]:ml-[0.5rem] group-data-[collapsible=icon]:[&_a]:space-x-[1.53333rem] group-data-[collapsible=icon]:p-[0.83rem_0.56rem] h-[3.33333rem] hover:bg-[rgba(10,13,20,0.05)] p-[0.83333rem_0.83333rem_0.83333rem_1.11111rem] flex items-center rounded-[0.41667rem] [&.active]:bg-[rgba(10,13,20,0.05)]"
                  tooltip={"Log - out"}
                >
                  <div
                    onClick={() => {
                      logoutForm();
                    }}
                    className="flex flex-1 items-center space-x-[0.83333rem] cursor-pointer"
                  >
                    <ICHome className="filter brightness-[1] invert-[100] size-[1.66667rem]" />
                    <span className="text-[#0A0D14] text-[1.11111rem] leading-[1.375] w-max">
                      Log - out
                    </span>
                  </div>
                </SidebarMenuButton>
              </CollapsibleTrigger>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
