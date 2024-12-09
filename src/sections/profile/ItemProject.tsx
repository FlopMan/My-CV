import Image from "next/image";

export default function ItemProject() {
  return (
    <div className="space-y-[1.11rem] cursor-pointer">
      <Image
        className="w-full h-[15.48611rem]"
        alt=""
        src={"/"}
        width={400}
        height={200}
      />
      <div>
        <div className="flex items-center justify-between space-x-[0.69rem]">
          <p className="text-[#121216] text-[1.11111rem] font-medium flex-1 line-clamp-1">
            Project number 1
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            className="size-[1.11111rem] cursor-pointer"
          >
            <path
              d="M8.66634 9.16659C9.03453 9.16659 9.33301 8.86811 9.33301 8.49992C9.33301 8.13173 9.03453 7.83325 8.66634 7.83325C8.29815 7.83325 7.99967 8.13173 7.99967 8.49992C7.99967 8.86811 8.29815 9.16659 8.66634 9.16659Z"
              stroke="#262626"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.333 9.16659C13.7012 9.16659 13.9997 8.86811 13.9997 8.49992C13.9997 8.13173 13.7012 7.83325 13.333 7.83325C12.9648 7.83325 12.6663 8.13173 12.6663 8.49992C12.6663 8.86811 12.9648 9.16659 13.333 9.16659Z"
              stroke="#262626"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.99967 9.16659C4.36786 9.16659 4.66634 8.86811 4.66634 8.49992C4.66634 8.13173 4.36786 7.83325 3.99967 7.83325C3.63148 7.83325 3.33301 8.13173 3.33301 8.49992C3.33301 8.86811 3.63148 9.16659 3.99967 9.16659Z"
              stroke="#262626"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-wrap mt-[0.83rem] mb-[0.56rem] space-x-[0.42rem]">
          <p className="flex items-center justify-center h-[1.66667rem] p-[0.13889rem_0.41667rem] rounded-[0.41667rem] bg-[#F5F5F5] text-[#262626] text-[0.83333rem] font-medium leading-[1.3]">
            Website design
          </p>
          <p className="flex items-center justify-center h-[1.66667rem] p-[0.13889rem_0.41667rem] rounded-[0.41667rem] bg-[#F5F5F5] text-[#262626] text-[0.83333rem] font-medium leading-[1.3]">
            UX/UI Design
          </p>
        </div>
        <p className="line-clamp-3 text-[#85868A] text-[0.97222rem] leading-[1.35]">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
    </div>
  );
}
