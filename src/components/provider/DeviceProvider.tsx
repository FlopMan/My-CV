import { headers } from "next/headers";

const DeviceProvider = ({ children }: { children: React.ReactNode }) => {
  const headersList = headers();
  const userAgent = headersList.get("user-agent");
  const isDesktop = /Windows|Macintosh|Linux|X11/i.test(userAgent ?? "");
  return (
    <>
      {isDesktop
        ? children
        : // <div className="px-[1rem] text-center w-full bg-white min-h-screen text-black flex justify-center items-center">
          //   <h1 className="text-[2.5rem] font-bold">
          //     Bạn phải xem và chỉnh sửa bằng thiết bị máy tính
          //   </h1>
          // </div>
          children}
    </>
  );
};

export default DeviceProvider;
