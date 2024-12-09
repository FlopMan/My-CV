"use client";
import ICMenu from "@/components/icons/ICMenu";
import ICPen from "@/components/icons/ICPen";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PopupForm from "./PopupForm";

export default function AsideProfile() {
  return (
    <aside className="sticky top-[7.5rem] w-[19.44444rem] p-[1.38889rem] flex flex-col items-center rounded-[1.11111rem] border-[1px] border-solid border-[#E9EAEC] bg-white">
      <div className="size-[6.94444rem] relative">
        <Image
          className="rounded-full absolute size-full"
          alt=""
          src={"/"}
          width={60}
          height={60}
        />
        <div className="cursor-pointer rounded-[6.94444rem] flex items-center justify-center bg-white shadow-[1px_3px_5px_-3px_rgba(23,24,24,0.08)] size-[2.22222rem] p-[0.41667rem] absolute right-[0.28rem] bottom-[-0.35rem]">
          <ICPen className="size-[1.11111rem] filter brightness-[100] invert-[100]" />
        </div>
      </div>
      <p className="mb-[0.14rem] mt-[1.11rem] text-[#111827] text-[1.38889rem] font-semibold leading-[1.2]">
        Tracy Dinh
      </p>
      <span className="text-[#525866] text-[0.97222rem] leading-[1.6]">
        UX/UI Designer
      </span>
      <div className="my-[1.11rem] h-[0.06944rem] w-full bg-[#F1F2F4]"></div>
      <div className="space-y-[0.83rem] w-full">
        <div className="space-x-[0.56rem] w-full flex items-center justify-start">
          <ICMenu className="size-[1.25rem]" />
          <p className="text-[#0A0D14] text-[1.11111rem] leading-[1.6]">
            yourmail@gmail.com
          </p>
        </div>
        <div className="space-x-[0.56rem] w-full flex items-center justify-start">
          <ICMenu className="size-[1.25rem]" />
          <p className="text-[#0A0D14] text-[1.11111rem] leading-[1.6]">
            0123456789
          </p>
        </div>
        <div className="space-x-[0.56rem] w-full flex items-center justify-start">
          <ICMenu className="size-[1.25rem]" />
          <p className="text-[#0A0D14] text-[1.11111rem] leading-[1.6]">
            Hanoi, Vietnam
          </p>
        </div>
      </div>
      <div className="my-[1.11rem] h-[0.06944rem] w-full bg-[#F1F2F4]"></div>
      <div className="w-full mb-[1.11rem]">
        <div className="text-[#525866] text-[0.83333rem] leading-[1.6] mb-[0.28rem]">
          Profile bio
        </div>
        <p className="text-[#121216] text-[0.97222rem] leading-[1.35]">
          Hi, I’m web designer based in Hanoi. with almost 3 years experience.
        </p>
      </div>
      <div className="w-full mb-[1.11rem]">
        <div className="text-[#525866] text-[0.83333rem] leading-[1.6] mb-[0.28rem]">
          Service type
        </div>
        <p className="text-[#121216] text-[0.97222rem] leading-[1.35]">
          Web Designer, UX/UI
        </p>
      </div>
      <Dialog>
        <DialogTrigger className="w-full h-[2.77778rem] p-[0.83333rem_1.11111rem] bg-black rounded-[0.41667rem] shadow-[0px_4px_10px_0px_rgba(91,91,91,0.04)] text-white text-[0.97222rem] font-medium leading-[1.3]">
          Edit information
        </DialogTrigger>
        <DialogContent className="gap-0 max-w-[50rem] w-[50rem] px-[1.38889rem] bg-white [&_button_svg]:filter [&_button_svg]:brightness-[1] [&_button_svg]:invert-[1] [&_button]:right-[1.39rem] [&_button]:top-[1.46rem] [&_button]:opacity-100">
          <DialogTitle className="text-[1.38889rem] text-[#262626] font-medium leading-[1.3] mb-[1.11rem]">
            Edit information
          </DialogTitle>
          <PopupForm />
        </DialogContent>
      </Dialog>
    </aside>
  );
}
