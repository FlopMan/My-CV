/* eslint-disable react-hooks/exhaustive-deps */
"use client";
//NOTE - HOOK
import { useFormContext } from "react-hook-form";

//NOTE - UI
import {
  RHFEditor,
  RHFRepeater,
  RHFTextField,
} from "@/components/builder/hook-form";
import { RHFImage } from "@/components/builder/hook-form/rhf-image";
import RHFGallery from "@/components/builder/hook-form/rhf-gallery";
import RenderComponent from "./RenderComponent";

//NOTE - UTILS
import { deepClone, resetKeysInObject } from "../utils";
import useStore from "@/app/(store)/store";
import RhfButton from "@/components/builder/hook-form/rhf-button";
import { DialogFileManager } from "@/components/file-manager/DialogFileManager";
import { useBoolean } from "@/hooks/use-boolean";
import ProjectsSearch from "@/components/builder/hook-form/ProjectsSearch";

const RenderComponentV2 = ({
  data,
  keyName,
}: {
  data: any;
  keyName: string;
}) => {
  console.log("🚀 ~ keyName:", keyName);
  //NOTE - STATE GLOBAL
  const { currentKey } = useStore((state) => state);
  console.log("🚀 ~ currentKey:", currentKey);

  //NOTE HOOK FORM
  const { getValues } = useFormContext();
  const chooseFile = useBoolean();

  //NOTE init name
  const name = `${keyName}.value`;

  // Bắt buộc render bằng cách thêm key
  const key = `${keyName}-${data?.type}`;

  //NOTE - TEXT
  if (data?.type === "text") {
    return (
      <div id={`${keyName.replaceAll(".", "_")}_edit`}>
        {data?.label && (
          <h3 className="block text-[#262626] text-[0.972222rem] font-roboto font-semibold leading-normal mb-[0.28rem]">
            {data?.label}
          </h3>
        )}
        <RHFTextField
          key={key}
          name={`${keyName}.value`}
          multiline
          isActive={`${currentKey}.value` === `${keyName}.value`}
        />
      </div>
    );
  }

  if (data?.type === "textarea") {
    return (
      <div id={`${keyName.replaceAll(".", "_")}_edit`}>
        {data?.label && (
          <h3 className="block text-[#262626] text-[0.972222rem] font-roboto font-semibold leading-normal mb-[0.28rem]">
            {data?.label}
          </h3>
        )}
        <RHFTextField
          key={key}
          name={`${keyName}.value`}
          multiline
          rows={6}
          isActive={`${currentKey}.value` === `${keyName}.value`}
        />
      </div>
    );
  }

  //NOTE - EDITOR
  if (data?.type === "editor") {
    return (
      <div id={`${keyName.replaceAll(".", "_")}_edit`}>
        {data?.label && (
          <h3 className="block text-[#262626] text-[0.972222rem] font-roboto font-semibold leading-normal mb-[0.28rem]">
            {data?.label}
          </h3>
        )}
        <RHFEditor
          key={key}
          simple
          name={name}
          id={name.replaceAll(".", "_")}
        />
      </div>
    );
  }

  //NOTE - ARRAY
  if (data?.type === "array") {
    const dataClone = deepClone(data?.value?.[0]);
    const child = resetKeysInObject(dataClone);

    return (
      <div id={`${keyName.replaceAll(".", "_")}_edit`}>
        {data?.label && (
          <h3 className="block text-[#262626] text-[0.972222rem] font-roboto font-semibold leading-normal mb-[0.28rem]">
            {data?.label}
          </h3>
        )}
        <RHFRepeater key={key} name={`${keyName}.value`} child={child} />
      </div>
    );
  }

  //NOTE - IMAGE
  if (data?.type === "image") {
    return (
      <div id={`${keyName.replaceAll(".", "_")}_edit`}>
        {data?.label && (
          <h3 className="block text-[#262626] text-[0.972222rem] font-roboto font-semibold leading-normal mb-[0.28rem]">
            {data?.label}
          </h3>
        )}
        <RHFImage
          onOpen={chooseFile.onTrue}
          key={key}
          sx={{ my: 3 }}
          name={name}
        />
        <DialogFileManager
          open={chooseFile.value}
          setOpen={chooseFile.onFalse}
          name={name}
        />
      </div>
    );
  }

  //NOTE - BUTTON
  if (data?.type === "button") {
    return (
      <div id={`${keyName.replaceAll(".", "_")}_edit`}>
        {data?.label && (
          <h3 className="block text-[#262626] text-[0.972222rem] font-roboto font-semibold leading-normal mb-[0.28rem]">
            {data?.label}
          </h3>
        )}
        <RhfButton keyName={keyName} data={data} />
      </div>
    );
  }

  //NOTE - GALLERY
  if (data?.type === "gallery") {
    return (
      <div id={`${keyName.replaceAll(".", "_")}_edit`}>
        {data?.label && (
          <h3 className="block text-[#262626] text-[0.972222rem] font-roboto font-semibold leading-normal mb-[0.28rem]">
            {data?.label}
          </h3>
        )}
        <RHFGallery name={name} />
      </div>
    );
  }

  //NOTE - SECTION
  if (data?.type === "section") {
    return Object.keys(data?.value).map((key) => {
      return (
        <RenderComponent
          key={name + "." + key}
          data={getValues(`${name + "." + key}`)}
          keyName={`${name + "." + key}`}
        />
      );
    });
  }

  //NOTE - POST-OBJECT
  if (data?.type === "post-object") {
    console.log("🚀 ~ data:", data);
    return <ProjectsSearch />;
  }

  return <div></div>;
};

export default RenderComponentV2;
