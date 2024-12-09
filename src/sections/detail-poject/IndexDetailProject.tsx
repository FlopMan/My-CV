"use client";

import FormProvider, {
  RHFRepeater,
  RHFTextField,
} from "@/components/builder/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { DetailProject } from "../home/schema/DetailProject";
import { RHFImage } from "@/components/builder/hook-form/rhf-image";
const data = {
  thumbnail: {
    value: "https://placehold.co/800x900",
    type: "image",
  },
  name: {
    value: "Project 01",
    type: "text",
  },
  technologies: {
    value: [
      {
        value: "React",
        type: "text",
      },
      {
        value: "NextJS",
        type: "text",
      },
    ],
    type: "array",
  },
};
const IndexDetailProject = () => {
  const methods = useForm({
    resolver: yupResolver(DetailProject),
    defaultValues: data,
  });
  const {
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (formData: any) => {
    try {
    } catch (error) {}
  };
  return (
    <div>
      <h1>Detail Project</h1>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-[1rem]">
          <RHFImage name="thumbnail.value" />
          <RHFTextField name="name.value" />
          <RHFRepeater
            name="technologies.value"
            child={{ value: "", type: "text" }}
          />
        </div>
      </FormProvider>
    </div>
  );
};

export default IndexDetailProject;
