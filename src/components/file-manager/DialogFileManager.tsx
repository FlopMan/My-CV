/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "@mui/material";
import Iconify from "../builder/hook-form/iconify";
import { DialogProvider } from "../dialog/DialogProvider";
import { useCallback, useState } from "react";
import DialogUploadFile from "./DialogUploadFile";
import { useAxiosSWR } from "@/hooks/use-axios-swr";
import FileService from "@/services/file";
import FileItem from "./FileItem";
import { useFormContext } from "react-hook-form";
import { toast } from "sonner";

export function DialogFileManager({
  open,
  setOpen,
  name,
  multiple,
  path,
  id,
}: any) {
  //
  const { getAllFile, deleteFile } = FileService;
  //
  const [checkAll, setCheckAll] = useState<any[]>([]);
  console.log("🚀 ~ DialogFileManager ~ checkAll:", checkAll);

  const { setValue } = useFormContext();
  //
  const [openUpload, setOpenUpload] = useState(false);

  const { data: files, mutate: getFiles }: any = useAxiosSWR(
    "/get-all-file",
    () =>
      getAllFile({
        p: 1,
        limit: 50,
      })
  );

  function handleSave(file: any) {
    // setValue(name, file, { shouldDirty: true });
    if (multiple) {
      if (checkAll.some((item: any) => item.id === file.id)) {
        setCheckAll(checkAll.filter((item: any) => item.id !== file.id));
      } else {
        setCheckAll([...checkAll, file]);
      }
    } else {
      setCheckAll([file]);
    }
  }

  const handleDeleteItem = useCallback(async (id: string) => {
    try {
      await deleteFile({
        ID: id,
      });
      getFiles();
      toast.success("Delete successfully!");
    } catch (error) {
      toast.error("Delete failed!");
    }
  }, []);

  function handleCancel() {
    setOpen(false);
    setCheckAll([]);
  }

  function handleSubmit() {
    if (multiple) {
      setValue(name, checkAll, { shouldDirty: true });
    } else {
      if (path) {
        setValue(name, checkAll[0].path, { shouldDirty: true });
      } else if (id) {
        setValue(name, checkAll[0].id, { shouldDirty: true });
      } else {
        setValue(name, checkAll[0], { shouldDirty: true });
      }
    }
    setOpen(false);
  }

  return (
    <>
      <DialogProvider
        open={open}
        setOpen={setOpen}
        className="h-[90vh] bg-white max-h-[90vh] !p-0 w-[80vw] max-w-[80vw]"
      >
        <ScrollArea className="h-[90vh] w-full p-6">
          <DialogHeader>
            <DialogTitle>File manager</DialogTitle>
            <Button
              variant="contained"
              startIcon={<Iconify icon="eva:cloud-upload-fill" />}
              onClick={() => setOpenUpload(true)}
              sx={{ marginLeft: "auto" }}
            >
              {"Upload"}
            </Button>
            <DialogUploadFile
              open={openUpload}
              setOpen={setOpenUpload}
              mutate={getFiles}
            />
            <div className="grid grid-cols-5 gap-4 !mt-[2rem]">
              {files?.ITEMS?.map((file: any, index: number) => (
                <FileItem
                  key={index}
                  file={file}
                  onSave={handleSave}
                  handleDeleteItem={() => handleDeleteItem(file?.id.toString())}
                  multiple
                  checked={checkAll.some((item: any) => item?.id === file?.id)}
                />
              ))}
            </div>
          </DialogHeader>
          <div className="grid gap-4 py-4"></div>
          <DialogFooter className="absolute bottom-0 left-0 w-full justify-end">
            <div className="fixed bottom-6 right-2 flex gap-4">
              <Button variant="outlined" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!checkAll.length}
                variant="contained"
              >
                Save
              </Button>
            </div>
          </DialogFooter>
        </ScrollArea>
      </DialogProvider>
    </>
  );
}
