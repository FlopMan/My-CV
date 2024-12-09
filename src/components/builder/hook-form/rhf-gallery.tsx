"use client";
import { Stack, Typography } from "@mui/material";
// import { RHFImage } from "src/components/hook-form";
// import { FileService } from "src/services";
import { useFormContext } from "react-hook-form";
// import { useBoolean } from "src/hooks/use-boolean";
// import { FileChoosenDialog } from "src/sections/file-manager/components";
// import { IFile } from "src/types/file";
import { useCallback } from "react";
import { useBoolean } from "@/hooks/use-boolean";
import { RHFImage } from "./rhf-image";

const RHFGallery = ({
  name,
  label = "Gallery",
}: {
  name: string;
  label?: string;
}) => {
  // const { getFileByIds } = FileService;
  const chooseFiles = useBoolean();

  const {
    setValue,
    getValues,
    formState: { isSubmitting },
  } = useFormContext();
  const values = getValues(name);

  const handleImagesSave = async (selected: string[]) => {
    // try {
    //   // const { data } = await getFileByIds(selected);
    //   const newFiles = data.map((item: IFile) => ({
    //     ...item,
    //     preview: item.path,
    //   }));
    //   const files = values || [];
    //   setValue(name, [...files, ...newFiles], { shouldDirty: true });
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   chooseFiles.onFalse();
    // }
  };

  const handleRemoveFile = useCallback(
    (inputFile: File | any) => {
      const filtered = values?.filter(
        (file: any) => file?.id !== inputFile?.id
      );
      setValue(name, filtered);
    },
    [setValue, values]
  );
  return (
    <>
      <Stack spacing={2} mt={3}>
        <Typography variant="subtitle2">{label}</Typography>
        <RHFImage
          multiple
          thumbnail
          name={name}
          onRemove={handleRemoveFile}
          onRemoveAll={() => setValue(name, [], { shouldValidate: true })}
          onOpen={chooseFiles.onTrue}
          drag={true}
        />
      </Stack>
      {/* <FileChoosenDialog
        open={chooseFiles.value}
        onClose={chooseFiles.onFalse}
        onSave={handleImagesSave}
      /> */}
    </>
  );
};

export default RHFGallery;
