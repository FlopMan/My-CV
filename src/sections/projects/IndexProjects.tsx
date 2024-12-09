"use client";
import { useCallback, useState } from "react";
import ProjectItem from "./ProjectItem";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DialogProvider } from "@/components/dialog/DialogProvider";
import FormAddProject from "@/sections/projects/FormAddProject";
import { ItemProject, ResponseProject } from "@/types/project";

type Props = {
  dataProjects: ResponseProject;
};

const IndexProjects = ({ dataProjects }: Props) => {
  console.log("🚀 ~ IndexProjects ~ dataProjects:", dataProjects);
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleView = useCallback(
    (id: string) => {
      router.push(`/projects/${id}`);
    },
    [router]
  );

  const handleEdit = useCallback(
    (id: string) => {
      router.push(`/projects/${id}`);
    },
    [router]
  );

  const handleDelete = useCallback((id: string) => {
    console.info("DELETE", id);
  }, []);
  return (
    <div>
      <Button onClick={() => setOpen(true)} variant={"secondary"}>
        Thêm mới dự án
      </Button>
      <DialogProvider open={open} setOpen={setOpen}>
        <FormAddProject setOpen={setOpen} />
      </DialogProvider>
      <div className="grid grid-cols-4 gap-[2rem]">
        {dataProjects?.ITEMS?.map((item: ItemProject, index: number) => (
          <ProjectItem
            key={index}
            onView={() => handleView("0")}
            onEdit={() => handleEdit("0")}
            onDelete={() => handleDelete("0")}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default IndexProjects;
