"use client";
import { DialogProvider } from "../dialog/DialogProvider";
import UploadFile from "./UploadFile";

const DialogUploadFile = ({
  open,
  setOpen,
  mutate,
}: {
  open: boolean;
  setOpen: any;
  mutate: any;
}) => {
  function handleSave() {
    setOpen(false);
    mutate();
  }
  return (
    <DialogProvider
      open={open}
      setOpen={setOpen}
      className="w-fit max-w-fit min-h-[50vh] max-h-[90vh] overflow-y-auto bg-white"
    >
      <UploadFile onSave={handleSave} />
    </DialogProvider>
  );
};

export default DialogUploadFile;
