// COMPONENT
import Image from "next/image";

// JSX
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-[1.39rem_1.39rem_1.39rem_2.78rem] min-h-screen grid grid-cols-2 gap-[2.78rem]">
      <div className="flex flex-col justify-between">
        {children}
        <div className="flex justify-between items-center">
          <p className="text-[#85868A] text-[0.83333rem] leading-[1.25]">
            © 2024 KPF all rights reserved.
          </p>
          <p className="text-[#85868A] text-[0.83333rem] leading-[1.25] font-roboto">
            <strong className="text-[#2C2C31] font-medium">
              Term of Service
            </strong>
            and
            <strong className="text-[#2C2C31] font-medium">
              Privacy Policy
            </strong>
            .
          </p>
        </div>
      </div>
      <Image
        className="w-[46.38889rem] h-[59.72222rem] rounded-[1.11111rem] object-cover"
        alt="banner login"
        src={"/assets/images/login/banner.jpg"}
        width={660}
        height={800}
      />
    </div>
  );
}
