"use client";

import { Assets } from "@/assets";
import data from "@/data/data.json";
import { Theme } from "@/lib/constant";

import { Icon } from "../base/icon/Icon";
import { TextTitle } from "../TextTitle";
import useStore from "@/app/(store)/store";
import ProviderEdit from "@/sections/home/components/ProviderEdit";
import Link from "next/link";
const { contact } = data;

const routerNames = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About me",
    path: "/about-me",
  },
  {
    name: "Work",
    path: "/work",
  },
];

const bgMapping = {
  [Theme.DARK]: Assets.footerImage.src,
  [Theme.LIGHT]: Assets.footerLightImage.src,
  [Theme.GREEN]: Assets.footerGreenImage.src,
};

const Footer: React.FC = () => {
  const { valuesForm, themeState } = useStore((state) => state);

  const bg = bgMapping[themeState as keyof typeof bgMapping];

  return (
    <footer className="text-center">
      <div
        className="bg-theme-background px-24 pt-24 max-lg:px-5 max-lg:pt-10"
        style={{
          backgroundImage: `url("${bg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" flex justify-between gap-24 max-lg:flex-col max-lg:justify-start max-lg:gap-0">
          <div>
            <ProviderEdit name="footer.value.tag">
              <TextTitle
                title={valuesForm.footer.value.tag.value.title.value}
                icon={valuesForm.footer.value.tag.value.icon.value}
              />
            </ProviderEdit>
            <ProviderEdit name="footer.value.socials">
              <div className="flex-start mt-[80px] flex flex-col items-start justify-start max-lg:hidden">
                {valuesForm.footer.value.socials.value.map(
                  (item: any, index: number) => (
                    <Link
                      target="_blank"
                      href={item.link.value}
                      key={index}
                      className="mb-5 text-[#D2DEFC] hover:underline light:text-light-primary"
                    >
                      <div className="flex items-center gap-2">
                        <Icon
                          url={item.platform.value.icon.value}
                          className="h-5 w-5"
                          size={20}
                        />
                        <span className="text-normal-16">
                          {item.platform.value.title.value.toUpperCase()}
                        </span>
                      </div>
                    </Link>
                  )
                )}
              </div>
            </ProviderEdit>
          </div>
          <div className="max-w-[823px] text-start max-lg:mt-4">
            <ProviderEdit name="footer.value.description">
              <p className="mb-12 text-start text-white text-title-h3 max-lg:mb-8 max-lg:text-md-title-h3 light:text-light-primary">
                {valuesForm.footer.value.description.value}
              </p>
            </ProviderEdit>
            <ProviderEdit name="footer.value.email">
              <Link
                target="_blank"
                href={`mailto:${valuesForm.footer.value.email.value.title.value}`}
                className=" flex items-center gap-2 text-start text-white underline underline-offset-[6px] text-title-h3  max-lg:text-title-h4 light:text-light-primary"
                style={{ wordBreak: "break-word" }}
              >
                <Icon
                  url={valuesForm.footer.value.email.value.icon.value}
                  size={20}
                  className="min-w-5 text-[#0057FF] light:text-theme-primary"
                />
                {valuesForm.footer.value.email.value.title.value}
              </Link>
            </ProviderEdit>
          </div>

          <ProviderEdit name="footer.value.socials">
            <div className="flex-start mt-[80px]  hidden flex-col items-start justify-start max-lg:flex">
              {valuesForm.footer.value.socials.value.map(
                (item: any, index: number) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="mb-5 dark:text-[#D2DEFC] green:text-[#D2DEFC] hover:underline"
                    target="_blank"
                  >
                    <div className="flex items-center gap-2">
                      <Icon
                        url={item.platform.value.icon.value}
                        className="h-5 w-5 "
                        size={20}
                      />
                      <span className="text-normal-16">
                        {item.platform.value.title.value.toUpperCase()}
                      </span>
                    </div>
                  </Link>
                )
              )}
            </div>
          </ProviderEdit>
        </div>
        <div className="mt-[300px] flex items-center justify-between pb-10 max-lg:mt-[144px] light:border-t light:pt-5 light:border-light-primary green:border-t green:pt-5 green:border-[#CEDFFF1A">
          <div className="text-[#BBBBBB] text-normal-14 light:text-light-primary">
            {contact.copyright}
          </div>

          <ProviderEdit name="heroBanner.value.menu">
            <div className="flex items-center gap-5 max-lg:text-everett">
              {routerNames.map((item, index) => (
                <Link
                  className="text-[#BBBBBB] text-normal-14 light:text-light-primary"
                  href={item.path}
                  key={item.path}
                >
                  {valuesForm.heroBanner.value.menu.value[index].value}
                </Link>
              ))}
            </div>
          </ProviderEdit>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
