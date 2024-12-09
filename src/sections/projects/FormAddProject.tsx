"use client";

import FormProvider, { RHFTextField } from "@/components/builder/hook-form";
import { RHFImage } from "@/components/builder/hook-form/rhf-image";
import { DialogFileManager } from "@/components/file-manager/DialogFileManager";
import { useBoolean } from "@/hooks/use-boolean";
import ProjectService from "@/services/project";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import * as Yup from "yup";

const NewTourSchema = Yup.object().shape({
  TITLE: Yup.string().required("Title is required"),
  THUMBNAIL: Yup.mixed(),
});

const FormAddProject = ({ setOpen }: any) => {
  const { addProject } = ProjectService;

  const chooseFile = useBoolean();

  const methods = useForm({
    resolver: yupResolver(NewTourSchema),
    defaultValues: {
      TITLE: "",
      THUMBNAIL: "",
    },
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (formData) => {
    const body = {
      ...formData,
      THUMBNAIL: formData.THUMBNAIL.id.toString(),
      CONTENT: {},
    };
    const res: any = await addProject(body);
    if (res?.status === 200) {
      toast.success("Add successfully!", {
        position: "top-right",
      });
      reset();
      return setOpen(false);
    } else {
      toast.error("Add failed!", {
        position: "top-right",
      });
    }
  });
  return (
    <div className="p-[2rem] ">
      <Typography sx={{ mb: 3 }} variant="h4">
        Dự án mới
      </Typography>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <div className="space-y-[1rem]">
          <RHFTextField name="TITLE" label="Title" />
          <div>
            <div>Thumbnail</div>
            <RHFImage onOpen={chooseFile.onTrue} name="THUMBNAIL" />
            <DialogFileManager
              open={chooseFile.value}
              setOpen={chooseFile.onFalse}
              name={"THUMBNAIL"}
            />
          </div>
        </div>
        <div className="mt-[2rem] flex justify-end space-x-[1rem]">
          <Button variant="outlined" onClick={() => setOpen(false)}>
            {"Hủy"}
          </Button>
          <LoadingButton
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            {"Tạo"}
          </LoadingButton>
        </div>
      </FormProvider>
    </div>
  );
};

export default FormAddProject;
