"use client";

import * as React from "react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex flex-row group-data-[collapsible=icon]:[&_button]:ml-[1.2rem] group-data-[collapsible=icon]:[&_h1]:ml-[2rem] group-data-[collapsible=icon]:flex-row-reverse group-data-[collapsible=icon]:justify-end justify-between active:bg-transparent hover:bg-transparent focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
          <h1 className="text-[#0A0D14] text-[1.25rem] font-medium">
            Mah.folio
          </h1>
          <div className="flex aspect-square size-[1.66667rem] items-center justify-center rounded-lg text-sidebar-primary-foreground">
            <SidebarTrigger className="-ml-1 hover:bg-transparent size-[1.66667rem]" />
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
