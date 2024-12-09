import Image from "next/image";

export default function Software() {
    return (
        <div className="">
            <h3 className="text-[#272626] text-[1.66667rem] md:text-[2.2222rem] font-semibold leading-[1.2] mb-[1.11rem] md:mb-[1.39rem]">
                Software
            </h3>
            <div className="flex md:gap-[1.39rem] max-md:space-x-[0.83rem] flex-wrap">
                {Array(6)
                    .fill(0)
                    .map((e, index) => (
                        <Image
                            key={index}
                            src="/assets/images/pagess/Group.png"
                            alt=""
                            width={100}
                            height={100}
                            className="w-[2.77778rem] h-[2.77778rem] md:w-[3.41882rem] md:h-[3.33333rem] object-contain"
                        />
                    ))}
            </div>
        </div>
    );
}
