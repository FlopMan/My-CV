/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import useStore from "@/app/(store)/store";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

const ProviderEdit = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  const { setCurrentKey, currentKey } = useStore((state) => state);
  const { getValues, watch } = useFormContext();
  const values = watch();

  const type = useMemo(() => {
    return getValues(name)?.hidden || "";
  }, [values]);

  const isMobile = type.some((item: string) => item === "mobile");
  const isTablet = type.some((item: string) => item === "tablet");
  const isDesktop = type.some((item: string) => item === "desktop");

  return (
    <div
      id={name.replaceAll(".", "_")}
      data-key={name}
      onClick={() => {
        if (currentKey === name) return;
        setCurrentKey(name);
      }}
      className={cn(
        "relative size-fit group cursor-pointer provider__key__default",
        isMobile && "max-md:bg-gray-500 max-md:opacity-50",
        isTablet &&
          "max-lg:bg-gray-500 max-lg:opacity-50 max-md:bg-current max-md:opacity-100",
        isDesktop && "lg:bg-gray-500 lg:opacity-50"
      )}
    >
      <div
        className={`${
          currentKey === name ? "opacity-100" : ""
        } absolute top-0 left-0 size-full border border-solid border-pink-400 z-50 group-hover:opacity-100 opacity-0 transition-all duration-200 pointer-events-none`}
      ></div>
      <div className="pointer-events-none">{children}</div>
    </div>
  );
};

export default ProviderEdit;
