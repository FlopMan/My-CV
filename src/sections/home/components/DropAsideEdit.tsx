/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import useStore from "@/app/(store)/store";
import useStoreInit from "@/app/(store)/storeInit";
import ICArrow from "@/components/icons/ICArrow";
import ICCollapse from "@/components/icons/ICCollapse";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TaskbarFeature from "./TaskbarFeature";
import LoadingButton from "@mui/lab/LoadingButton";
import useStoreViewPort from "@/app/(store)/storeViewPort";
let widthDraff = 0;

const DropAsideEdit = ({
  children,
  taskbarFeature,
}: {
  children: React.ReactNode;
  taskbarFeature: React.ReactNode;
}) => {
  //NOTE - STATE GLOBAL
  const { setAsideEditRef, setContainerWidth, containerWidth } = useStore(
    (state) => state
  );
  const { setIsViewPort } = useStoreViewPort((state) => state);

  const { clientWidth } = useStoreInit((state) => state);
  const [isClose, setIsClose] = useState(false);

  //NOTE - HOOK REACT
  const asideEditRef = useRef(null);

  useEffect(() => {
    if (asideEditRef.current) {
      setAsideEditRef(asideEditRef.current);
    }
  }, []);

  const width =
    !clientWidth || !containerWidth ? 400 : clientWidth - containerWidth;

  //NOTE - HANDLE CLOSE
  function handleClose() {
    widthDraff = width;
    localStorage.setItem("width-aside-history", width.toString());
    setIsViewPort(false);
    setIsClose(true);
    setContainerWidth(clientWidth);
  }

  function handleOpen() {
    widthDraff = 0;
    const widthHistory = localStorage.getItem("width-aside-history");
    setIsClose(false);
    setContainerWidth(
      widthHistory ? clientWidth - Number(widthHistory) : clientWidth * 0.75
    );
  }

  // JSX
  return (
    <div
      style={{ width: (widthDraff || width) + "px" }}
      id="aside_sticky"
      className={cn(
        "fixed h-screen w-full top-0 right-0 bg-white z-50",
        isClose
          ? "translate-x-full duration-500 transition-transform"
          : "translate-x-0 duration-100 transition-transform"
      )}
    >
      {isClose && (
        <button
          onClick={handleOpen}
          className="absolute top-0 left-0 -translate-x-full bg-white z-50"
        >
          <ICCollapse className="size-[1.66667rem] rotate-180" />
        </button>
      )}
      <div
        ref={asideEditRef}
        id="aside_sticky_content"
        className="h-screen w-full pb-[6rem] relative overflow-y-auto hidden-scrollbar"
      >
        <div
          id="aside_sticky_header"
          className="h-[3.54167rem] sticky top-0 z-20 px-[0.56rem] flex justify-between items-center bg-white border-b border-solid border-[#EAECF0] w-full"
        >
          <div className="flex items-center">
            <Link href="/dashboard" className="size-fit">
              <ICArrow className="size-[1.38889rem]" />
            </Link>
            <div className="w-[1px] h-[1.45833rem] bg-[#E9EAEB] mx-[0.56rem]"></div>
            <Link
              href="/dashboard"
              className="p-[0.28rem_0.56rem] font-roboto text-[1.11111rem] font-medium leading-normal text-primary-900"
            >
              Home
            </Link>
          </div>
          <span className="font-roboto text-[1.11111rem] font-medium leading-normal text-Black-W1">
            Editor
          </span>
          <button onClick={handleClose}>
            <ICCollapse className="size-[1.66667rem]" />
          </button>
        </div>
        {children}
      </div>
      {taskbarFeature}
    </div>
  );
};

export default DropAsideEdit;
