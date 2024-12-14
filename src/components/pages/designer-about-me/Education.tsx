import Image from "next/image";

export default function Education() {
    return (
        <div>
            <h3 className="text-[#272626] text-[1.66667rem] md:text-[2.2222rem] font-semibold leading-[1.2] mb-[1.39rem]">
                Education
            </h3>
            <div className="flex flex-col gap-[1.11rem]">
                {Array(2)
                    .fill(0)
                    .map((e, index) => (
                        <div className="flex flex-col pb-[1.39rem]" key={index}>
                            <span className="text-theme-second-highlight text-[0.97222rem]  md:text-[1.11111rem] font-semibold leading-[1.35] mb-[0.56rem] md:mb-[1rem]">
                                2022 - 2018
                            </span>
                            <p className="text-[#111] text-[1.11111rem] md:text-[1.38889rem] font-semibold leading-[1.1] mb-[0.42rem] md:mb-[0.5rem]">
                                Bachelor Of Graphic Design
                            </p>
                            <p className="text-[#595959] text-[0.97222rem] md:text-[1.11111rem] leading-[1.35] font-[500] uppercase">
                                Aberic University
                            </p>
                        </div>
                    ))}
            </div>
            {/* information */}
            <div
                style={{ border: "1px solid rgba(39, 38, 38, 0.30)" }}
                className="md:hidden grid grid-cols-1 gap-[1.11rem] w-[full] rounded-[1.38889rem] bg-[#fff] p-[1.67rem] "
            >
                <div className="flex  items-center">
                    <Image
                        src={"/assets/images/pagess/chat.svg"}
                        alt="avt"
                        width={100}
                        height={100}
                        className="w-[2.22222rem] h-[2.22222rem] object-cover rounded-[50%]  mr-[1.11rem]"
                    />
                    <span className="text-[#666] text-[1.125rem] leading-[1.4] mr-[0.56rem]">
                        Email:
                    </span>
                    <span className="text-[#1E1E1E] text-[1.25rem] leading-[1.3] font-semibold">
                        Yourmail@gmail.com
                    </span>
                </div>
                <div className="flex  items-center">
                    <Image
                        src={"/assets/images/pagess/phone.svg"}
                        alt="avt"
                        width={100}
                        height={100}
                        className="w-[2.22222rem] h-[2.22222rem] object-cover rounded-[50%]  mr-[1.11rem]"
                    />
                    <span className="text-[#666] text-[1.125rem] leading-[1.4] mr-[0.56rem]">
                        Phone:
                    </span>
                    <span className="text-[#1E1E1E] text-[1.25rem] leading-[1.3] font-semibold">
                        0123 456 789
                    </span>
                </div>
                <div className="flex  items-center">
                    <Image
                        src={"/assets/images/pagess/location.svg"}
                        alt="avt"
                        width={100}
                        height={100}
                        className="w-[2.22222rem] h-[2.22222rem] object-cover rounded-[50%]  mr-[1.11rem]"
                    />
                    <span className="text-[#666] text-[1.125rem] leading-[1.4] mr-[0.56rem]">
                        Location:
                    </span>
                    <span className="text-[#1E1E1E] text-[1.25rem] leading-[1.3] font-semibold">
                        Hanoi, VietNam
                    </span>
                </div>
            </div>
        </div>
    );
}
