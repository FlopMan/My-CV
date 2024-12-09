"use client";
import useStore from "@/app/(store)/store";
import Image from "@/components/base/Image";
import { TextTitle } from "@/components/TextTitle";
import data from "@/data/data.json";

const DetailProject = () => {
  const { valuesForm } = useStore((state) => state);
  const projectDetail = data.projects.find((item) => item.id === "1");
  const {
    name = "",
    technologies = [],
    title = "",
    imageUrl = "",
    projectImages = [],
    service = "",
    startTime = "",
    description = "",
    client,
  } = projectDetail || {};

  const properties = [
    {
      label: "Client",
      value: client,
    },
    {
      label: "Start time",
      value: startTime,
    },
    {
      label: "Service",
      value: service,
    },
  ];

  return (
    <div className="bg-theme-background  ">
      <div className="max-w-screen-xxl mx-auto pt-[11.375rem] max-lg:pt-24 px-24 max-lg:px-5">
        <div className="flex flex-wrap items-center gap-2">
          {technologies.map((item, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-[#CCDDFE0D] bg-[#CCDDFE0D] px-6 py-2 text-white text-body-16 max-lg:text-normal-14"
            >
              {item}
            </div>
          ))}
        </div>

        <h1 className="text-style-1 text-title-h2 mt-5 uppercase max-lg:text-md-title-h3 max-lg:mt-4 border-b light:border-[#2726264D] green:border-[#CEDFFF33] pb-6 max-lg:pb-2">
          {name}
        </h1>

        <Image
          src={imageUrl}
          alt={name}
          width={1248}
          height={702}
          className="object-cover aspect-[1248/702] max-lg:aspect-[335/188] w-full my-16 max-lg:mb-10 max-lg:mt-2"
        />

        <div className="flex items-start justify-between max-lg:flex-col max-lg:gap-6">
          <TextTitle title="Overview" />
          <div className="max-w-[51.375rem] ">
            <div className="text-title-h3 dark:text-white green:text-white max-lg:text-md-title-h3 light:text-light-primary">
              {title}
            </div>
            <div className="text-body-16 text-[#CCD7F2] mt-5 max-lg:text-md-body-14 light:text-[#545151]">
              {description}
            </div>

            <div className="mt-8 flex flex-col gap-5">
              {properties.map((item) => {
                return (
                  <div
                    key={item.label}
                    className="green:text-white dark:text-white light:text-light-primary text-twk-everett max-lg:text-md-body-16"
                  >
                    <span className="green:text-[#C1C1C1] dark:text-[#C1C1C1] light:text-[#545151]">
                      {item.label}
                    </span>
                    <span className="mx-4">• </span>
                    <span>{item.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-16 gap-8 pb-24 max-lg:pb-10 max-lg:flex-col max-lg:gap-4">
          {projectImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={name}
              width={605}
              height={405}
              className="object-cover aspect-[605/405] max-lg:aspect-[335/224] w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
