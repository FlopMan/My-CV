/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Iconify from "../builder/hook-form/iconify";
import { useState } from "react";
import { Divider } from "@mui/material";

export function OptionItemFile({
  children,
  path,
  handleDeleteItem,
}: {
  children: React.ReactNode;
  path: string;
  handleDeleteItem: () => void;
}) {
  //
  const [open, setOpen] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(path);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-full bg-white">
        <button
          onClick={() => {
            setOpen(false);
            handleDeleteItem();
          }}
          className="flex items-center gap-2 text-red-500"
        >
          <Iconify icon="solar:trash-bin-trash-bold" color={"red"} />
          Delete
        </button>
        <Divider sx={{ borderStyle: "dashed", my: 1 }} />
        <button
          onClick={() => {
            setOpen(false);
            copyToClipboard();
          }}
          className="flex items-center gap-2 text-green-500"
        >
          <Iconify icon="eva:link-2-fill" color={"green"} />
          Copy Link
        </button>
      </PopoverContent>
    </Popover>
  );
}
