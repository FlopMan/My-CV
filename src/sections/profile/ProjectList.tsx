import ICAdd from "@/components/icons/ICAdd";
import ItemProject from "./ItemProject";

export default function ProjectlLst() {
  return (
    <div className="space-y-[1.39rem] p-[1.66667rem] rounded-[1.11111rem] border-[1px] border-solid border-[#E9EAEC]">
      <div className="flex items-center w-full justify-between">
        <p className="text-[#000] text-[1.38889rem] font-medium leading-[1.3] flex-1">
          Project list
        </p>
        <div className="flex items-center justify-center space-x-[0.56rem] h-[2.77778rem] p-[0.83333rem_1.11111rem] rounded-[0.41667rem] bg-[#121216] shadow-[0px_4px_10px_0px_rgba(91,91,91,0.04)]">
          <ICAdd className="size-[1.25rem] filter brightness-0 invert-[100]" />
          <p className="text-white text-[0.97222rem] font-medium leading-[1.3]">
            Add new project
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-[2.73rem] gap-y-[1.39rem]">
        {new Array(9).fill(0).map((e, index) => (
          <ItemProject key={index} />
        ))}
      </div>
    </div>
  );
}
