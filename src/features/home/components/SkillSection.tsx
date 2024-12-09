"use client";
import useStore from "@/app/(store)/store";
import Image from "@/components/base/Image";
import TagItem from "@/components/TagItem";
import { TextTitle } from "@/components/TextTitle";
import data from "@/data/data.json";
import { cn } from "@/lib/utils";
import ProviderEdit from "@/sections/home/components/ProviderEdit";

function SkillSection() {
  const { valuesForm } = useStore((state) => state);

  return (
    <section className="bg-theme-background p-24 max-lg:px-5 max-lg:py-10">
      <div className="flex justify-between max-lg:flex-col max-lg:gap-10">
        <div>
          <ProviderEdit name="expertise.value.tag">
            <TextTitle
              title={valuesForm.expertise.value.tag.value.title.value}
              icon={valuesForm.expertise.value.tag.value.icon.value}
            />
          </ProviderEdit>
          <div className="sticky top-[100px] w-fit pt-10 max-lg:pt-6">
            <div className="border-b border-[#CEDFFF1A] pb-5 light:border-[#2726264D]">
              <div className="flex items-start gap-2">
                <div className="flex items-start gap-2">
                  <ProviderEdit name="expertise.value.countClient">
                    <h3 className="text-style-1 text-[80px] font-[800] leading-[112px]">
                      {valuesForm.expertise.value.countClient.value}
                    </h3>
                  </ProviderEdit>
                  <div className="text-style-1 text-[40px] font-[800] leading-[56px]">
                    +
                  </div>
                </div>

                <ProviderEdit name="expertise.value.titleClient">
                  <div
                    className={cn(
                      "pt-16 text-[#E9E9E9] text-body-18",
                      "light:text-[#535353]",
                      "dark:text-[#E9E9E9]",
                      "green:text-[#E9E9E9]"
                    )}
                  >
                    {valuesForm.expertise.value.titleClient.value}
                  </div>
                </ProviderEdit>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex items-start gap-2">
                <div className="flex items-start gap-2">
                  <ProviderEdit name="expertise.value.countProject">
                    <h3 className="text-style-1 text-[80px] font-[800] leading-[112px]">
                      {valuesForm.expertise.value.countProject.value}
                    </h3>
                  </ProviderEdit>
                  <div className="text-style-1 text-[40px] font-[800] leading-[56px]">
                    +
                  </div>
                </div>

                <ProviderEdit name="expertise.value.titleProject">
                  <div
                    className={cn(
                      "pt-16 text-[#E9E9E9] text-body-18",
                      "light:text-[#535353]",
                      "dark:text-[#E9E9E9]",
                      "green:text-[#E9E9E9]"
                    )}
                  >
                    {valuesForm.expertise.value.titleProject.value}
                  </div>
                </ProviderEdit>
              </div>
            </div>
          </div>
        </div>

        <ProviderEdit name="expertise.value.skills">
          <div className="flex flex-col gap-8">
            {valuesForm.expertise.value.skills.value.map(
              (item: any, index: number) => {
                return (
                  <div
                    className={cn(
                      "flex gap-2 border-b pb-5 max-lg:flex-col",
                      index !==
                        valuesForm.expertise.value.skills.value.length - 1
                        ? " border-[#CEDFFF1A] light:border-[#2726264D]"
                        : "border-transparent"
                    )}
                    key={index}
                  >
                    <div className="flex grow flex-col justify-between max-lg:gap-4">
                      <div className="text-[#DEE4EC] text-body-14 light:text-light-primary">
                        {index < 10 && "0"}
                        {index + 1}
                      </div>
                      <div className="max-lg:flex max-lg:flex-col max-lg:gap-4">
                        <div className="text-[#F2F2F2] text-body-14 max-lg:text-normal-14 light:text-light-primary">
                          {item?.platform?.value}
                        </div>

                        <div className="mt-4 flex max-w-[30vw] flex-wrap gap-2 max-lg:max-w-full">
                          {item?.technologies?.value?.map(
                            (i: any, idx: number) => (
                              <TagItem key={idx} label={i?.value} />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="max-lg:mt-8">
                      <Image
                        src={item?.thumbnail?.value?.path}
                        width={300}
                        height={169}
                        alt={item?.platform?.value}
                        className="aspect-[300/169] object-cover max-lg:w-full"
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </ProviderEdit>
      </div>
    </section>
  );
}

export default SkillSection;
