"use client";
import FilterMobile from "@/components/pages/designer-project/FilterMobile";
import WorkItem, { WorkItemType } from "../designer-home/FeaturedWork/WorkItem";
import Filter from "./Filter";
import Sort from "./Sort";
import { Pagination } from "@mui/material";
import useStyleByTheme from "@/hooks/useStyleByTheme";

const items: WorkItemType[] = [
  {
    thumbs: ["/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png"],
    title: "An Branding Agency Website",
    categories: ["Website design", "Redesign"],
    description: "A unique website for Branding Agency",
  },
  {
    thumbs: ["/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png"],
    title: "An Branding Agency Website",
    categories: ["Website design", "Redesign"],
    description: "A unique website for Branding Agency",
  },
  {
    thumbs: ["/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png"],
    title: "An Branding Agency Website",
    categories: ["Website design", "Redesign"],
    description: "A unique website for Branding Agency",
  },
  {
    thumbs: ["/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png"],
    title: "An Branding Agency Website",
    categories: ["Website design", "Redesign"],
    description: "A unique website for Branding Agency",
  },
  {
    thumbs: ["/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png", "/assets/images/designer/work_1.png"],
    title: "An Branding Agency Website",
    categories: ["Website design", "Redesign"],
    description: "A unique website for Branding Agency",
  },
];

const MainProjects = () => {
  const activeColor = useStyleByTheme(["#4F43FF", "#4F70E3", "#E55427"]);

  return (
    <div className='md:p-[6.67rem] p-[1.39rem]'>
      <h1 className='md:text-center text-[#272626] max-md:text-theme-primary text-[2.22222rem] md:text-[5rem] font-semibold leading-[1.2] mb-[2.22rem] md:mb-[3.89rem] uppercase'>Featured works</h1>
      <div className='max-md:hidden flex justify-between max-md:flex-col'>
        <Filter />
        <Sort />
      </div>
      <FilterMobile />
      <div className='grid grid-cols-12 space-y-[1.67rem] md:gap-x-[2.93rem] md:gap-y-[3.51rem] mt-[1.76rem] max-md:flex flex-col'>
        <div className='col-span-12'>
          <WorkItem item={items[0]} index={1} isMainItem />
        </div>
        {items.slice(1, items.length).map((item, index) => (
          <div key={index} className='md:col-span-6'>
            <WorkItem item={item} index={index + 2} />
          </div>
        ))}
        <div className='col-span-12 justify-center'>
          <Pagination
            sx={{
              justifyItems: "center",
              "& .css-10w330c-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
                backgroundColor: activeColor,
                color: "#fff",
              },

              "& .css-10w330c-MuiButtonBase-root-MuiPaginationItem-root": {
                fontSize: "1.1713rem",
                color: "#50505080",
              },
            }}
            count={3}
            shape='rounded'
          />
        </div>
      </div>
    </div>
  );
};

export default MainProjects;
