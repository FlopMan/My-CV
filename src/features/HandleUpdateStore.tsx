/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import useStore from "@/app/(store)/store";
import useStoreInit from "@/app/(store)/storeInit";
import { setSession } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

const HandleUpdateStore = ({ theme, session }: { theme: string; session: any }) => {
  //NOTE - STATE GLOBAL
  const { setThemeState } = useStore((state) => state);
  const { setClientWidth } = useStoreInit((state) => state);

  //
  const router = useRouter();
  // NOTE  - ALERT FIRST CLICK
  useEffect(() => {
    const handleClick = () => {
      alert("Tính năng đang phát triển ( Feature under development )");
      // Gỡ bỏ sự kiện sau khi kích hoạt
      document.removeEventListener("click", handleClick);
    };

    // Lắng nghe sự kiện click
    document.addEventListener("click", handleClick);

    // Dọn dẹp nếu component bị unmount
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  //NOTE - CREATE VALUE STATE GLOBAL
  useEffect(() => {
    setThemeState(theme);
    setTimeout(() => {
      requestAnimationFrame(() => {
        const width = document.documentElement.clientWidth;
        setClientWidth(width);
      });
    }, 1000);
  }, []);

  useLayoutEffect(() => {
    // if (!session || !session?.accessToken) return router.replace("/login");
    setSession(session?.accessToken, session?.refreshToken);
    const updateWidth = () => {
      setClientWidth(document.documentElement.clientWidth);
    };

    updateWidth(); // Cập nhật ngay khi component mount

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return <></>;
};

export default HandleUpdateStore;
