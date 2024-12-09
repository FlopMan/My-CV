"use client";
import { ResponseTemplate } from "@/types/template";
import DropItem from "./DropItem";
import ItemDraft from "./ItemDraft";
import ItemPortfolio from "./ItemPortfolio";
import PaginationPage from "./Pagination";
import { ResponsePortfolio } from "@/types/portfolio";

type Props = {
  dataTemplates: ResponseTemplate;
  dataPortfolios: ResponsePortfolio;
};

export default function IndexDashboard({
  dataTemplates,
  dataPortfolios,
}: Props) {
  console.log("🚀 ~ dataPortfolios:", dataPortfolios);
  return (
    <section className="mt-[1.675rem] px-[1.66667rem]">
      <div className="mb-[2.22rem]">
        <h2 className="text-[#121216] text-[2.22222rem] font-semibold font-roboto leading-[1.3] mb-[0.42rem]">
          Welcomback, Tracy
        </h2>
        <p className="text-[#565657] text-[0.97222rem] leading-[1.35]">
          Got a portfolio template that looks good? Build it to be your own
        </p>
      </div>
      <div className="mb-[2.77778rem]">
        <p className="text-[#000] text-[1.38889rem] font-medium leading-[1.3]">
          My drafts
        </p>
        <div className="grid grid-cols-4 gap-[1.66667rem] mt-[1.39rem]">
          {Array.isArray(dataPortfolios?.ITEMS) &&
            dataPortfolios?.ITEMS?.map((item: any, index: number) => (
              <ItemDraft data={item} key={index} />
            ))}
        </div>
      </div>
      <div className="mb-[2.77778rem]">
        <div className="w-full flex items-center justify-between">
          <p className="text-[#000] text-[1.38889rem] font-medium leading-[1.3]">
            Portfolio templates
          </p>
          <DropItem />
        </div>
        <div className="grid grid-cols-4 gap-[1.66667rem] mt-[1.39rem]">
          {dataTemplates?.ITEMS?.map((e, index) => (
            <ItemPortfolio key={index} data={e} />
          ))}
        </div>
      </div>
      <PaginationPage />
    </section>
  );
}
