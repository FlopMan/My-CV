import { Assets } from "@/assets";
import { FormRegiter } from "@/components/login/FormRegister";
import TitleLogin from "@/components/login/TitleLogin";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="flex flex-col justify-center items-center flex-1">
      <TitleLogin
        title="Creat an account"
        label="Please enter your credentials to create your account"
      />
      <Link
        href="/"
        className="flex items-center justify-center h-[3.75rem] w-[31.25rem] py-[1.11111rem] rounded-[0.41667rem] border-[1px] border-solid border-[#DEDEDF]"
      >
        <Image
          className=""
          alt=""
          src={Assets.google.src}
          width={20}
          height={20}
        />
        <p className="text-[#121216] text-[1.11111rem] font-medium leading-[1.3] ml-[0.56rem]">
          Sign up with Google
        </p>
      </Link>
      <p className="text-[#525866] text-[0.97222rem] leading-[1.35] uppercase my-[1.11rem]">
        Or
      </p>
      <FormRegiter />
    </section>
  );
}
