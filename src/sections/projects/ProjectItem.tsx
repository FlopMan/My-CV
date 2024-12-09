"use client";

import Iconify from "@/components/builder/hook-form/iconify";
import CustomPopover, { usePopover } from "@/components/custom-popover";
import { ItemProject } from "@/types/project";
import { IconButton, MenuItem } from "@mui/material";
import Image from "next/image";

type Props = {
  onView: VoidFunction;
  onEdit: VoidFunction;
  onDelete: VoidFunction;
  data: ItemProject;
};

const ProjectItem = ({ onView, onEdit, onDelete, data }: Props) => {
  const popover = usePopover();

  return (
    <div className="w-full relative ">
      <IconButton
        onClick={popover.onOpen}
        sx={{ position: "absolute", top: 8, right: 8 }}
      >
        <Iconify icon="eva:more-vertical-fill" />
      </IconButton>
      <div className="w-full aspect-[6/5]">
        <Image
          className="size-full object-cover"
          src={data.THUMBNAIL || "https://placehold.co/600x500"}
          alt="image"
          width={600}
          height={500}
        />
      </div>
      <div>
        <h2>{data.TITLE}</h2>
        {/* <ul className="flex items-center gap-x-[0.5rem]">
          <li>HTML</li>
          <li>HTML</li>
        </ul> */}
      </div>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            popover.onClose();
            onView();
          }}
        >
          <Iconify icon="solar:eye-bold" />
          View
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
            onEdit();
          }}
        >
          <Iconify icon="solar:pen-bold" />
          Edit
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
            onDelete();
          }}
          sx={{ color: "error.main" }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>
      </CustomPopover>
    </div>
  );
};

export default ProjectItem;
