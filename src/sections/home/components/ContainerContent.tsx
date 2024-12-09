/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import ProviderEdit from "./ProviderEdit";
import useStore from "@/app/(store)/store";
import { useEffect, useRef, useState } from "react";
import { DndContext, useDraggable } from "@dnd-kit/core";
import useStoreInit from "@/app/(store)/storeInit";
import TaskbarViewPort from "@/components/viewport/TaskbarViewPort";
import useStoreViewPort, { ModeViewPort } from "@/app/(store)/storeViewPort";

const ContainerContent = ({ children }: { children: React.ReactNode }) => {
  //NOTE - STATE GLOBAL
  const { valuesForm, setContentRef, containerWidth, setContainerWidth } =
    useStore((state) => state);
  const { isViewPort, modeViewPort } = useStoreViewPort((state) => state);

  const { clientWidth } = useStoreInit((state) => state);

  //NOTE - HOOK REACT
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setContainerWidth(clientWidth * 0.75);
    setTimeout(() => {
      setContentRef(containerRef.current);
    }, 0);
  }, []);

  //NOTE - RENDER TASKBAR RESIZE
  function ResizerHandle() {
    const { attributes, listeners, setNodeRef } = useDraggable({
      id: "resizer",
    });
    if (containerWidth === clientWidth) return null;
    const style = {
      cursor: "ew-resize",
      position: "absolute" as const,
      right: 0,
      top: 0,
      width: "10px",
      height: "100%",
      backgroundColor: "transparent",
      zIndex: 999,
      transform: "translateX(50%)",
    };

    return (
      <div ref={setNodeRef} style={style} {...listeners} {...attributes} />
    );
  }

  // Hàm cập nhật chiều rộng trong khi kéo
  const handleResizeMove = (event: any) => {
    const { delta } = event;
    const newWidth = containerWidth + delta.x;
    const widthLatest = Math.max(200, Math.min(newWidth, clientWidth));

    setContainerWidth(widthLatest);
  };

  if (!valuesForm) return null;
  return (
    <DndContext onDragMove={handleResizeMove}>
      <div
        ref={containerRef}
        id="render__content__base"
        className="relative"
        style={{ width: `${containerWidth}px` }}
      >
        <TaskbarViewPort />
        <div
          className={`${
            isViewPort ? "pt-[2.5rem]" : ""
          } relative transition-all duration-200`}
        >
          <ResizerHandle />
          {modeViewPort === ModeViewPort.DESKTOP && children}
          {modeViewPort === ModeViewPort.MOBILE && (
            <div className="mx-auto w-[375px] h-[736px] border border-solid border-black rounded-lg my-[0.5rem] overflow-hidden">
              <iframe
                height={736}
                width={375}
                src="http://localhost:3000/iframe"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </DndContext>
  );
};

export default ContainerContent;
