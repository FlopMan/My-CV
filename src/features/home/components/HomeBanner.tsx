"use client";

import { Assets } from "@/assets";
import Button from "@/components/base/button/Button";
import Modal from "@/components/base/modal/Modal";
import data from "@/data/data.json";
import { Theme } from "@/lib/constant";

import ConnectForm from "./ConnectForm";
import useStore from "@/app/(store)/store";
import ProviderEdit from "@/sections/home/components/ProviderEdit";

const { aboutMe } = data;

const bgMapping = {
  [Theme.DARK]: Assets.homeBanner.src,
  [Theme.LIGHT]: Assets.homeBannerLight.src,
  [Theme.GREEN]: Assets.homeBannerGreen.src,
};

function HomeBanner() {
  const { themeState, valuesForm } = useStore((state) => state);
  const bg = bgMapping[themeState as keyof typeof bgMapping];
  return (
    <div
      className="bg-theme-background bg-cover bg-no-repeat object-cover h-screen light:max-lg:h-fit max-lg:bg-center"
      style={{ backgroundImage: `url("${bg}")` }}
    >
      {/* Hero Section */}
      <section className="px-24 pt-[220px] text-center max-lg:px-5 max-lg:pt-[150px] pb-[73px]">
        <ProviderEdit name="heroBanner.value.fullName">
          <p className="text-start text-2xl text-[#D2DEFC] max-lg:font-[18px] max-lg:leading-[23.4px] light:text-light-primary">
            <span className="uppercase max-lg:text-[1.125rem]">
              {aboutMe.hello}{" "}
            </span>
            <span className="max-lg:block max-lg:mt-1 uppercase max-lg:text-[1.125rem]">
              {aboutMe.introduce}{" "}
              <span className="green:text-[#12C99D] uppercase">
                {valuesForm.heroBanner.value.fullName.value}
              </span>
            </span>
          </p>
        </ProviderEdit>
        <ProviderEdit name="heroBanner.value.job">
          <h1 className="text-style-1 mt-4 text-start text-title-h1 max-lg:text-md-title-h1">
            {aboutMe.job}
          </h1>
          <h1 className="text-style-1 mt-4 text-start text-title-h1 max-lg:text-md-title-h1 max-lg:mt-1">
            {valuesForm.heroBanner.value.job.value}
          </h1>
        </ProviderEdit>

        <ProviderEdit name="heroBanner.value.seeMyWork">
          <Button
            label={valuesForm.heroBanner.value.seeMyWork.value.title.value}
            className="mt-10"
            icon={valuesForm.heroBanner.value.seeMyWork.value.icon.value.path}
          />
        </ProviderEdit>

        {/* <Modal
          contentComponent={ConnectForm}
          title="Have an project in mind "
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 max-lg:bottom-4"
        >
          <div
            className={cn(
              "mx-auto mt-[117px] flex w-fit items-center space-x-6 max-lg:space-x-2 rounded-full border px-4 py-3 bg-black light:bg-white max-lg:w-full",
              "light:border-light-primary",
              "dark:border-[#0057FF]",
              "max-lg:px-2 max-lg:py-1"
            )}
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 min-w-2 rounded-full bg-[#12C966] " />
              <div
                className={cn(
                  "text-medium-16 light:text-light-primary whitespace-nowrap",
                  "max-lg:!text-[0.875rem] max-lg:leading-[16px] dark:text-white green:text-white"
                )}
              >
                {aboutMe.availabilityStatus}
              </div>
            </div>
            <button
              className={cn(
                "max-h-[39px] rounded-[60px] border px-5 py-3 flex-center text-medium-16 text-center whitespace-nowrap",
                "green:text-[#0F0F0F] green:bg-white",
                "dark:bg-white dark:text-[#0057FF] dark:border-[#0057FF]",
                "light:text-white bg-light-primary",
                "max-lg:text-[0.875rem] max-lg:leading-[16px] max-lg:px-2 max-lg:py-1"
              )}
            >
              CONNECT NOW
            </button>
          </div>
        </Modal> */}
      </section>
    </div>
  );
}

export default HomeBanner;
