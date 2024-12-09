"use client";
import { Checkbox } from "@mui/material";
import Image from "next/image";
import Iconify from "../builder/hook-form/iconify";
import { OptionItemFile } from "./OptionItemFile";

const FileItem = ({ file, onSave, handleDeleteItem, checked }: any) => {
  return (
    <div className="w-full h-fit rounded-lg border border-solid border-gray-300 overflow-hidden p-[1rem] relative select-none">
      <Image
        className="w-full h-auto object-contain"
        src={file?.path || "https://placehold.co/300x300"}
        alt={file?.name}
        width={300}
        height={300}
      />
      <button className="absolute top-[0.5rem] left-[0.5rem] z-10">
        <Checkbox
          onChange={(e) => {
            if (e.target.checked) {
              onSave(file);
            } else {
            }
          }}
          checked={checked}
        />
      </button>
      <OptionItemFile path={file?.path} handleDeleteItem={handleDeleteItem}>
        <button className="absolute top-[1rem] right-[0.5rem] z-10">
          <Iconify icon="eva:more-vertical-fill" />
        </button>
      </OptionItemFile>
    </div>
  );
};

export default FileItem;
