"use client";

import useStore from "@/app/(store)/store";
import useStoreInit from "@/app/(store)/storeInit";
import useStoreViewPort, { ModeViewPort } from "@/app/(store)/storeViewPort";
import ICDesktop from "../icons/ICDesktop";
import ICMobile from "../icons/ICMobile";
import ICTablet from "../icons/ICTablet";
import { Tooltip } from "react-tooltip";
import ICX from "../icons/ICX";
import { cn } from "@/lib/utils";

const TaskbarViewPort = () => {
  const { containerWidth } = useStore((state) => state);
  const { isViewPort, setIsViewPort, setModeViewPort } = useStoreViewPort(
    (state) => state
  );
  const { clientWidth } = useStoreInit((state) => state);

  return (
    <div
      style={{ width: `${containerWidth}px` }}
      className={cn(
        "fixed top-0 left-0 h-[2.5rem] w-full bg-white shadow-xl text-black z-[999] flex items-center justify-center transition-transform duration-200",
        isViewPort ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex items-center space-x-[1.5rem]">
        <button
          onClick={() => setModeViewPort(ModeViewPort.DESKTOP)}
          data-tooltip-id="tooltip_vp_desktop"
        >
          <ICDesktop className="stroke-black" />
        </button>
        <div className="w-[1px] h-[1.6rem] bg-black/30"></div>
        <button
          onClick={() => setModeViewPort(ModeViewPort.TABLET)}
          data-tooltip-id="tooltip_vp_tablet"
        >
          <ICTablet className="stroke-black" />
        </button>
        <div className="w-[1px] h-[1.6rem] bg-black/30"></div>
        <button
          onClick={() => setModeViewPort(ModeViewPort.MOBILE)}
          data-tooltip-id="tooltip_vp_mobile"
        >
          <ICMobile className="stroke-black" />
        </button>
      </div>
      <Tooltip
        className="z-[999] relative"
        id="tooltip_vp_desktop"
        place="bottom"
        content="Desktop"
      />
      <Tooltip
        className="z-[999] relative"
        id="tooltip_vp_tablet"
        place="bottom"
        content="Tablet"
      />
      <Tooltip
        className="z-[999] relative"
        id="tooltip_vp_mobile"
        place="bottom"
        content="Mobile"
      />
      <button
        onClick={() => setIsViewPort(false)}
        className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2"
      >
        <ICX className="stroke-black" />
      </button>
    </div>
  );
};

export default TaskbarViewPort;
