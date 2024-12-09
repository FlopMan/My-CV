"use client";

import useStore from "@/app/(store)/store";
import useStoreFeatures from "@/app/(store)/storeFeatures";
import useStoreInit from "@/app/(store)/storeInit";
import useStoreViewPort from "@/app/(store)/storeViewPort";
import ICDesktop from "@/components/icons/ICDesktop";
import ICEye from "@/components/icons/ICEye";
import ICEyeV2 from "@/components/icons/ICEyev2";
import ICLayer from "@/components/icons/ICLayer";
import ICMobile from "@/components/icons/ICMobile";
import ICOclock from "@/components/icons/ICOclock";
import ICResponsive from "@/components/icons/ICResponsive";
import ICWatch from "@/components/icons/ICWatch";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Tooltip } from "react-tooltip";

const TaskbarFeature = ({ children }: { children: React.ReactNode }) => {
  const { containerWidth } = useStore((state) => state);
  const { clientWidth } = useStoreInit((state) => state);
  const { setIsViewPort, isViewPort } = useStoreViewPort((state) => state);
  const { isOpenTableContent, setIsOpenTableContent } = useStoreFeatures(
    (state) => state
  );

  useEffect(() => {}, []);

  return (
    <>
      <div
        style={{
          width: clientWidth - containerWidth,
        }}
        className={cn(
          "absolute bottom-0 z-[60] right-0 bg-white border-t border-solid border-[#EAECF0] justify-between shadow-2xl h-[4.02778rem] py-[0.83rem] pl-[1.39rem] pr-[0.56rem] pointer-events-auto hidden w-0",
          clientWidth && containerWidth ? "flex" : "hidden"
        )}
      >
        <div className="flex items-center space-x-[0.83rem]">
          <button
            className="size-[1.66667rem] flex items-center justify-center"
            data-tooltip-id="tooltip_watch"
          >
            <ICWatch className="size-[1.66667rem]" />
          </button>
          {/* <button className="size-[1.66667rem] flex items-center justify-center"
            onClick={() => setIsOpenTableContent(!isOpenTableContent)}
            data-tooltip-id="tooltip_table_content"
          >
            <ICLayer />
          </button> */}
          <div className="w-[1px] h-[1.46rem] bg-[#E9EAEB]"></div>
          <button
            className="size-[1.66667rem] flex items-center justify-center"
            data-tooltip-id="tooltip_responsive"
            onClick={() => setIsViewPort(!isViewPort)}
          >
            <ICResponsive className="size-[1.66667rem]" />
          </button>
          <div className="w-[1px] h-[1.46rem] bg-[#E9EAEB]"></div>
          <button
            className="size-[1.66667rem] flex items-center justify-center"
            data-tooltip-id="tooltip_eye"
          >
            <ICEyeV2 className="size-[1.66667rem]" />
          </button>
        </div>
        {children}
      </div>
      <Tooltip
        className="z-[999] relative"
        id="tooltip_table_content"
        place="top"
        content="Hoa tiêu"
      />
      <Tooltip
        className="z-[999] relative"
        id="tooltip_watch"
        place="top"
        content="Lịch sử"
      />
      <Tooltip
        className="z-[999] relative"
        id="tooltip_responsive"
        place="top"
        content="Chế độ Responsive"
      />
      <Tooltip
        className="z-[999] relative"
        id="tooltip_eye"
        place="top"
        content="Xem trước thay đổi"
      />
    </>
  );
};

export default TaskbarFeature;
