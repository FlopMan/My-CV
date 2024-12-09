"use client";
import {
  DndContext,
  PointerSensor,
  useDraggable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useEffect, useState } from "react";
import RenderItemTableContent from "./RenderItemTableContent";
import useStoreFeatures from "@/app/(store)/storeFeatures";
import useStore from "@/app/(store)/store";

type ItemTableContent = {
  label: string;
  value: string;
};

const TableContent = ({ data }: { data: any }) => {
  const { isOpenTableContent } = useStoreFeatures((state) => state);
  const { contentRef } = useStore((state) => state);
  const [keyTableContent, setKeyTableContent] = useState<ItemTableContent[]>(
    []
  );
  const [position, setPosition] = useState({ x: 0, y: 0 });
  //

  useEffect(() => {
    if (!contentRef) return;
    const arrInit: ItemTableContent[] = [];
    contentRef
      .querySelectorAll("div.provider__key__default")
      .forEach((item) => {
        const key = item.getAttribute("data-key");
        if (key) {
          const keyLast = key.split(".");
          const itemInit = {
            label: keyLast[keyLast.length - 1].toUpperCase(),
            value: key,
          };
          arrInit.push(itemInit);
        }
      });
    setKeyTableContent(arrInit);
  }, [contentRef]);

  //  Xử lý khi thao tác có thể đang được chọn
  // const sensors = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     distance: 5,
  //   },
  // });

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );
  function DraggableItem() {
    // Sử dụng hook useDraggable để tạo phần tử kéo thả
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
      id: "draggable",
    });

    // Vị trí thực tế của phần tử khi kéo
    const style = {
      transform: `translate3d(${(transform?.x || 0) + position.x}px, ${
        (transform?.y || 0) + position.y
      }px, 0)`,
    };

    return (
      <div
        className={`${
          isOpenTableContent ? "" : "opacity-0 pointer-events-none"
        } fixed z-[99] top-1/4 right-0 w-[17rem] h-fit p-[1rem] max-h-[25rem] bg-gray-200 rounded-lg shadow-lg`}
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
      >
        <div className="space-y-[1rem]">
          {keyTableContent.map((item: ItemTableContent, index) => (
            <RenderItemTableContent
              key={index}
              value={item.value}
              label={item.label}
            />
          ))}
        </div>
      </div>
    );
  }

  // Xử lý khi kết thúc thao tác kéo để lưu vị trí cuối cùng
  const handleDragEnd = (event: any) => {
    const { delta } = event;
    setPosition((prevPosition) => ({
      x: prevPosition.x + delta.x,
      y: prevPosition.y + delta.y,
    }));
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <DraggableItem />
    </DndContext>
  );
};

export default TableContent;
