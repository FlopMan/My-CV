/* eslint-disable react-hooks/exhaustive-deps */
"use client";
//NOTE HOOK
import { useEffect, useState } from "react";

//NOTE STATE GLOBAL
import useStore from "@/app/(store)/store";

//NOTE LIB
import { useFormContext } from "react-hook-form";

//NOTE UI
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RenderComponent from "./RenderComponent";
import ICQuestion from "@/components/icons/ICQuestion";
import useStoreInit from "@/app/(store)/storeInit";

//NOTE DEFINE TYPE
type ItemTableContent = {
  label: string;
  value: string;
};

export function ContainerAccordion({ data }: { data: any }) {
  //NOTE HOOK FORM
  const { getValues } = useFormContext();

  //NOTE - STATE GLOBAL
  const { currentKey, asideEditRef, containerWidth } = useStore(
    (state) => state
  );
  const { clientWidth } = useStoreInit((state) => state);

  //NOTE HOOK REACT
  const [keyTableContent, setKeyTableContent] = useState<ItemTableContent[]>(
    []
  );
  const [value, setValue] = useState<string>("");

  //NOTE - GET VALUE WHEN CURRENT KEY CHANGE
  useEffect(() => {
    if (!currentKey || !asideEditRef) return;
    setValue(currentKey.split(".")[0]);
    setTimeout(() => {
      const boxIdCurrentKey = asideEditRef?.querySelector(
        `#${currentKey.replaceAll(".", "_")}_edit`
      );
      if (boxIdCurrentKey instanceof HTMLElement) {
        scrollToElementWithOffset(boxIdCurrentKey, 100);
      }
      setTimeout(() => {
        asideEditRef.style.overflowY = "auto";
      }, 50);
    }, 400);
  }, [currentKey]);

  function scrollToElementWithOffset(element: HTMLElement, offset: number) {
    if (!asideEditRef) return;
    const elementPosition = element.offsetTop;
    const scrollPosition = elementPosition - offset;
    asideEditRef.scrollTo({
      top: scrollPosition,
      behavior: "smooth", // Cuộn mượt
    });
  }

  // NOTE - INIT LIST DATA ACCORDION
  useEffect(() => {
    if (!data) return;
    const arrInit: ItemTableContent[] = [];
    Object.keys(data).forEach((key) => {
      arrInit.push({
        label: data?.[key]?.label || key,
        value: key,
      });
    });

    setKeyTableContent(arrInit);
  }, []);

  const width =
    !clientWidth || !containerWidth
      ? 400
      : clientWidth - containerWidth - 2 * ((clientWidth / 100) * 0.83);

  // JSX
  return (
    <Accordion
      value={value}
      onValueChange={setValue}
      type="single"
      collapsible
      className="w-full"
    >
      {keyTableContent.map((item: ItemTableContent, index) => (
        <AccordionItem
          value={item.value}
          key={index}
          className="border-[#F0F0F0] px-[0.83rem] w-full relative [&>h3]:sticky [&>h3]:top-[3rem] [&>h3]:bg-white [&>h3]:z-10"
        >
          <AccordionTrigger className="flex items-center hover:no-underline">
            <div className="text-[1.11111rem] font-roboto font-semibold leading-normal text-black flex items-center">
              {item.label}
              <ICQuestion className="size-[0.72917rem] flex-shrink-0 ml-[0.28rem]" />
            </div>
          </AccordionTrigger>
          <AccordionContent
            style={{
              width: width ? width + "px" : "100%",
            }}
            className="space-y-[1.4rem] pt-[0.83rem] pb-[1.11rem] border-[#F0F0F0] w-full"
          >
            <RenderComponent
              data={getValues(item.value)}
              keyName={item.value}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
