"use client";

import useStore from "@/app/(store)/store";
import RHFTextField from "./rhf-text-field";
import { RHFImage } from "./rhf-image";
import { DialogFileManager } from "@/components/file-manager/DialogFileManager";
import { useBoolean } from "@/hooks/use-boolean";

const RhfButton = ({ data, keyName }: { data: any; keyName: string }) => {
  //NOTE - STATE GLOBAL
  const { currentKey } = useStore((state) => state);
  const chooseFile = useBoolean();

  //NOTE init name
  const name = `${keyName}.value.icon.value`;

  // Bắt buộc render bằng cách thêm key
  const keyText = `${keyName}.value.title-${data?.value?.title?.type}`;
  const keyImg = `${keyName}.value.icon-${data?.value?.icon?.type}`;

  return (
    <div>
      <RHFTextField
        key={keyText}
        name={`${keyName}.value.title.value`}
        multiline
        isActive={`${currentKey}.value` === `${keyName}.value`}
      />
      <div className="w-1/2">
        <RHFImage
          key={keyImg}
          sx={{ my: 3 }}
          name={name}
          onOpen={chooseFile.onTrue}
        />
        <DialogFileManager
          open={chooseFile.value}
          setOpen={chooseFile.onFalse}
          name={name}
        />
      </div>
    </div>
  );
};

export default RhfButton;
