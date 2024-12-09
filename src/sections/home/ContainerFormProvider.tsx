/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import FormProvider from "@/components/builder/hook-form";

import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import useStore from "@/app/(store)/store";
import { useEffect, useTransition } from "react";
import { OverviewSchema } from "./schema/OverviewSchema";

import ContainerContent from "./components/ContainerContent";
import ContainerEdit from "./components/ContainerEdit";
import DropAsideEdit from "./components/DropAsideEdit";
import TableContent from "./components/TableContent";
import TaskbarFeature from "./components/TaskbarFeature";
import Header from "@/components/layout/Header";
import HomeBanner from "@/features/home/components/HomeBanner";
import WorkSection from "@/features/home/components/WorkSection";
import AboutMe from "@/features/home/components/AboutMeSection";
import SkillSection from "@/features/home/components/SkillSection";
import { CollapsibleBuilder } from "@/components/builder/components/CollapsibleBuilder";
import { ContainerAccordion } from "./components/ContainerAccordion";
import CommentSection from "@/features/home/components/CommentSection";
import Footer from "@/components/layout/Footer";
import { handleGenerateDataBeforeUpdate } from "./utils";
import { updateDataAuth } from "@/actions/updateDataAuth";
import { endpoints } from "@/utils/axios";
import RevalidateTags from "@/actions/revalidateTags";
import { toast } from "sonner";

const ContainerFormProvider = ({ data, dataInit, dataProjects }: any) => {
  console.log("🚀 ~ data:", data);
  console.log("🚀 ~ dataInit:", dataInit);
  const { setValuesForm, setValuesProject } = useStore((state) => state);
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
    setValuesProject(dataProjects);
  }, []);

  useEffect(() => {
    setValuesForm(values);
  }, [JSON.stringify(values)]);
  console.log("🚀 ~ useEffect ~ values:", values);

  const onSubmit = async (formData: any) => {};
  function updateData() {
    setTransition(async () => {
      const payload = handleGenerateDataBeforeUpdate(values, dataInit);
      console.log("🚀 ~ setTransition ~ payload:", payload);
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
            <HomeBanner />
            <WorkSection />
            <AboutMe />
            <SkillSection />
            <CommentSection />
            {/* <Footer /> */}
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

export default ContainerFormProvider;
