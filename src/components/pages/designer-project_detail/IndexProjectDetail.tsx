"use client";
import useStyleByTheme from "@/hooks/useStyleByTheme";
import Image from "next/image";
export default function IndexProjectDetail() {
  const background = useStyleByTheme(["bg-[#F2F0FF]", "bg-[#fff", "bg-[#fff]"]);
  const data = [
    {
      label: "Year",
      value: "05/2024",
    },
    {
      label: "Agency",
      value: "Freelance",
    },
    {
      label: "Client",
      value: "Anagram",
    },
    {
      label: "Service",
      value: "Branding Design",
    },
  ];
  return (
    <div className="md:p-[13.67rem] max-md:pt-[1.39rem] max-md:pb-[3rem] max-md:px-[1.25rem]">
      <h3 className="text-[#272626] text-[1.66667rem] md:text-[3.33333rem] font-semibold leading-[1.3] mb-[1.39rem] md:mb-[3.33rem] text-center uppercase">
        Project Number 01
      </h3>
      <Image
        src={"/assets/images/pagess/image1.png"}
        alt=""
        width={1000}
        height={800}
        className="w-full md:h-[48.75rem] h-[14.93056rem] md:rounded-[1.66667rem] rounded-[0.83333rem] mb-[1.11rem] md:mb-[2.22rem] object-cover"
      />

      <div
        className={`p-[1.39rem] md:p-[2.22rem] ${background} rounded-[0.83333rem] md:rounded-[1.1111rem] grid md:grid-cols-2 max-md:gap-[0.56rem] md:gap-y-[1.11rem]`}
      >
        {data.map((e, index) => (
          <div key={index} className="flex items-center">
            <span className="text-[#545151] text-[1.1111rem] md:text-[1.38889rem] leading-[1.3]">
              {e.label}
            </span>
            <svg
              className="w-[0.375rem] h-[0.375rem] mx-[0.75rem] md:mx-[1rem] rounded-[50%]"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
            >
              <circle cx="3" cy="3" r="3" fill="#272626" />
            </svg>
            <span className="text-[#272626] text-[1.1111rem] md:text-[1.38889rem] font-[500] leading-[1.3]">
              {e.value}
            </span>
          </div>
        ))}
      </div>

      {/* description */}

      <div className="flex justify-between max-md:mt-[3.33rem] max-md:mb-[1.6rem] md:my-[4.44rem] max-md:flex-col">
        <span className="text-[#272626] text-[1.66667rem] md:text-[2.22222rem] max-md:mb-[1.11rem] font-medium leading-[1.25] tracking-[0.04444rem]">
          Description
        </span>
        <p className="md:w-[57.15278rem] text-[0.97222rem] text-theme-primary-content md:text-[1.1111rem] leading-[1.35]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in
          section 1.10.32. Its about creating spaces that inspire, function, and
          endure, from the initial consultation to the final unveiling project.
          Our vision is to redefine the urban landscape through innovative
          design solutions that harmonize with the environment and enhance the
          quality of life. We strive to create spaces that are not only
          aesthetically pleasing but also sustainable and functional. We
          leverage the latest in design technology and architectural trends to
          deliver innovative solutions that meet contemporary needs while
          anticipating future challenges.
        </p>
      </div>

      {/* gallery */}
      <div className="grid md:grid-cols-2 grid-cols-1 max-md:gap-[1.39rem] gap-x-[2.22rem] gap-y-[4.44rem]">
        {Array(3)
          .fill(0)
          .map((e, index) => (
            <div
              key={index}
              className={`${
                index === Array(3).length - 1
                  ? "md:col-start-1 md:col-end-3 md:h-[48.75rem]"
                  : "h-[15.57333rem] md:h-[28.125rem]"
              }`}
            >
              <Image
                src={"/assets/images/pagess/image1.png"}
                alt=""
                width={1000}
                height={800}
                className="w-full h-full rounded-[0.83333rem] md:rounded-[1rem]  object-cover"
              />
            </div>
          ))}
      </div>

      {/* description 2 */}
      <div className="max-md:mt-[3.33rem] max-md:mb-0 md:my-[4rem]">
        <div className="flex max-md:flex-col">
          <div className="md:w-[39rem] md:mr-[4.44rem] max-md:mb-[4.44rem]">
            <span className="text-[#272626] text-[1.66667rem] md:text-[2.2222rem] font-medium leading-[1.25] tracking-[0.04444rem] block mb-[1.11rem] md:mb-[1.67rem]">
              Description
            </span>
            <p className="text-theme-primary-content text-[0.97222rem] md:text-[1.11111rem] leading-[1.35]">
              Its about creating spaces that inspire, function, and endure, from
              the initial consultation to the final unveiling project. Our
              vision is to redefine the urban landscape through innovative
              design solutions that harmonize with the environment and enhance
              the quality of life. We strive to create spaces that are not only
              aesthetically pleasing but also sustainable and functional. We
              leverage the latest in design technology and architectural trends
              to deliver innovative solutions that meet contemporary needs while
              anticipating future challenges. It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using Content here, content here, making it look like readable
              English. Many desktop publishing packages and web page editors now
              use text, and a search for lorem ipsum will uncover many web sites
              still in their infancy. Various versions have evolved over the
              years, sometimes by on purpose.
            </p>
          </div>
          <Image
            src={"/assets/images/pagess/image1.png"}
            alt=""
            width={1000}
            height={800}
            className="md:w-[42.01389rem] h-[15.55556rem] md:h-[27.375rem] rounded-[0.83333rem] md:rounded-[1rem] object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[2.22rem] gap-[0.69rem] md:mt-[4.44rem] mt-[0.69rem]">
          {Array(3)
            .fill(0)
            .map((e, index) => (
              <div key={index}>
                <Image
                  src={"/assets/images/pagess/image1.png"}
                  alt=""
                  width={300}
                  height={400}
                  className="w-full md:h-[30.41667rem] h-[15.55556rem] object-cover rounded-[0.83333rem] md:rounded-[1.11111rem]"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
