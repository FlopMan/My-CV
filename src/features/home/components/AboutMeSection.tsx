"use client";
import Link from "next/link";

import Button from "@/components/base/button/Button";
import Image from "@/components/base/Image";
import { TextTitle } from "@/components/TextTitle";
import { cn } from "@/lib/utils";
import ProviderEdit from "@/sections/home/components/ProviderEdit";
import useStore from "@/app/(store)/store";

function AboutMe() {
  const { valuesForm } = useStore((state) => state);

  return (
    <section className="dark:bg-theme-background green:bg-[#131414] p-24 max-lg:px-5 max-lg:py-10">
      <ProviderEdit name="aboutMe.value.tag">
        <TextTitle
          title={valuesForm.aboutMe.value.tag.value.title.value}
          className="title-border light:border-[#2726264D]"
          icon={valuesForm.aboutMe.value.tag.value.icon.value}
        />
      </ProviderEdit>
      <div className="mt-12 flex items-start gap-16 max-lg:flex-col max-lg:gap-8">
        <ProviderEdit name="aboutMe.value.avatar">
          <Image
            src={valuesForm.aboutMe.value.avatar.value.path}
            width={553}
            height={378}
            className="aspect-[553/378] w-[85%] object-cover max-lg:aspect-[335/229] max-lg:min-w-full"
            alt={""}
          />
        </ProviderEdit>
        <div className="w-full">
          <ProviderEdit name="aboutMe.value.title">
            <div className="text-style-1 text-title-h3 max-lg:text-md-title-h3">
              {valuesForm.aboutMe.value.title.value}
            </div>
          </ProviderEdit>
          <ProviderEdit name="aboutMe.value.description">
            <p
              className={cn(
                "mt-6  text-body-16 max-lg:mt-5 max-lg:text-md-body-14",
                "light:text-[#545151]",
                "dark:text-[#E9E9E9]",
                "green:text-[#E9E9E9]"
              )}
              style={{
                color: valuesForm.aboutMe.value.description.color,
              }}
            >
              {valuesForm.aboutMe.value.description.value}
            </p>
          </ProviderEdit>
          <ProviderEdit name="aboutMe.value.description2">
            <p
              className={cn(
                "mt-6  text-body-16 max-lg:mt-5 max-lg:text-md-body-14",
                "light:text-[#545151]",
                "dark:text-[#E9E9E9]",
                "green:text-[#E9E9E9]"
              )}
              style={{
                color: valuesForm.aboutMe.value.description2.color,
              }}
            >
              {valuesForm.aboutMe.value.description2.value}
            </p>
          </ProviderEdit>

          <Link href={"/about-me"}>
            <Button
              label={"VIEW MORE ABOUT ME"}
              className="px-6 py-3 max-lg:px-5 mt-8"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
