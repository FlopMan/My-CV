/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import FormProvider from "@/components/builder/hook-form";

import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";

import useStore from "@/app/(store)/store";
import { useEffect, useTransition } from "react";

import ContainerContent from "./components/ContainerContent";
import DropAsideEdit from "./components/DropAsideEdit";
import TaskbarFeature from "./components/TaskbarFeature";

import { ContainerAccordion } from "./components/ContainerAccordion";
import { handleGenerateDataBeforeUpdate } from "./utils";
import { updateDataAuth } from "@/actions/updateDataAuth";
import { endpoints } from "@/utils/axios";
import RevalidateTags from "@/actions/revalidateTags";
import { toast } from "sonner";
import Header from "@/components/layout/Header";
import DetailProject from "@/features/project/DetailProject";

const ContainerProjectFormProvider = ({
  data,
  dataInit,
}: {
  data: any;
  dataInit: any;
}) => {
  console.log("🚀 ~ data:", data);
  console.log("🚀 ~ dataInit:", dataInit);
  const { setValuesForm, currentKey } = useStore((state) => state);
  //
  const [isPending, setTransition] = useTransition();
  //
  const methods = useForm({
    defaultValues: data ?? {},
  });

  //
  const {
    getValues,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const values = watch();

  useEffect(() => {
    setValuesForm(values);
  }, [JSON.stringify(values)]);

  const onSubmit = async (formData: any) => {};
  function updateData() {
    setTransition(async () => {
      const payload = handleGenerateDataBeforeUpdate(values, dataInit);
      const request = {
        api: endpoints.portfolio.update,
        body: JSON.stringify(payload),
      };
      updateDataAuth(request)
        .then((res) => {
          if (res?.CODE === 0) {
            toast.success("Update successfully!", {
              position: "top-right",
            });
          } else {
            toast.error("Update failed!", {
              position: "top-right",
            });
          }
          RevalidateTags("portfolio");
        })
        .catch((error) => {
          toast.error("Update failed!", {
            position: "top-right",
          });
          console.log("🚀 ~ updateDataAuth ~ error:", error);
        });
    });
  }

  return (
    <main className="w-full flex relative [&_form]:!w-full [&_form]:!max-w-full overflow-x-hidden">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex relative">
          <ContainerContent>
            <Header />
            <DetailProject />
          </ContainerContent>

          <DropAsideEdit
            taskbarFeature={
              <TaskbarFeature>
                <LoadingButton
                  onClick={updateData}
                  type="submit"
                  variant="text"
                  loading={isPending}
                  className="w-fit !px-[1.39rem] !h-[2.3611rem] !rounded-[0.27778rem] !text-white !font-roboto !font-semibold !leading-[1.3] !text-[0.97222rem] !bg-black !capitalize"
                >
                  Publish
                </LoadingButton>
              </TaskbarFeature>
            }
          >
            {/* {currentKey && <ContainerEdit />} */}
            <ContainerAccordion data={data} />
          </DropAsideEdit>
        </div>
      </FormProvider>
    </main>
  );
};

export default ContainerProjectFormProvider;
