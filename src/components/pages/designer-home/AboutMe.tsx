"use client";
import useStyleByTheme from "@/hooks/useStyleByTheme";
import Image from "next/image";

const AboutMe = () => {
  const detail = `Hi, I'm a freelance designer with 3 years of experience creating impactful designs across various fields. Creativity is at the core of my work, allowing me to develop unique and innovative solutions tailored to each client's needs. I’m also highly adaptable, easily shifting between different design styles and project requirements. Finally, my strong attention to detail ensures that every design is polished, user-friendly, and aligned with the overall vision. Let’s collaborate and bring your ideas to life!`;
  const advantages = ["Creativity: I craft unique design solutions.", "Adaptability: I excel in various design styles.", "Attention to Detail: I ensure every design is polished and user-friendly."];
  const checkIcon = useStyleByTheme(["/assets/images/designer/check_circle.svg", "/assets/images/designer/check_circle.svg", "/assets/images/designer/check_circle3.svg"]);
  const arrowUpIcon = useStyleByTheme(["/assets/images/designer/arrow_up_right.svg", "/assets/images/designer/arrow_up_right2.svg", "/assets/images/designer/arrow_up_right.svg"]);

  return (
    <div className='flex p-[6.67rem] pb-[8.83rem] max-md:pb-[3.33rem] justify-between max-md:flex-col max-md:px-[1.39rem] max-md:pt-[1.67rem]'>
      <div className='md:w-[34.16667rem]'>
        <h2 className='text-theme-primary-content text-[2.22222rem] md:text-[4.4444rem] font-medium max-md:mb-[1.39rem] mb-[1.67rem]'>About Me</h2>
        <p className='text-[0.97222rem] md:text-[1.1111rem] font-normal text-theme-primary-content md:text-[#222222] leading-[1.35]'>{detail}</p>
        <ul className='mt-[1.11rem] flex flex-col gap-[0.83rem] text-theme-primary-content text-[0.97222rem] md:text-[1.11rem]'>
          {advantages.map((advantage, index) => (
            <li key={"advantage" + index} className='flex align-center gap-[1.11rem]'>
              <span className='inline-flex w-[1.25rem] h-[1.25rem] md:w-[1.667rem] md:h-[1.667rem] relative flex-shrink-0'>
                <Image src={checkIcon} alt='check_circle' fill className='object-contain' />
              </span>
              {advantage}
            </li>
          ))}
        </ul>
        <button className='max-md:hidden flex justify-center mt-[2.22rem] px-[1.9444rem] py-[0.97222rem] text-theme-button-text bg-theme-button-background rounded-[4.1667rem] text-[1.25rem] font-medium uppercase leading-[1.625rem]'>
          More about me
          <span className='inline-flex w-[1.6667rem] h-[1.6667rem] relative ml-[0.56rem]'>
            <Image alt='arrow' src={arrowUpIcon} fill />
          </span>
        </button>
      </div>
      <div className='md:w-[48.61111rem] max-md:mt-[2.22rem] pt-[1.94444rem] md:px-[7.35417rem] rounded-[1.38889rem] md:rounded-[2.22222rem] bg-theme-image-background'>
        <div className='relative md:w-[33.90277rem] md:h-[35.2rem] h-[23rem] overflow-hidden'>
          <Image alt='avatar' src={"/assets/images/designer/avatar.png"} fill className='object-contain sm:object-cover' />
        </div>
      </div>

      <button className='flex md:hidden max-md:w-[15.69rem] justify-center mt-[2.22rem] px-[1.9444rem] py-[0.97222rem] text-theme-button-text bg-theme-button-background rounded-[4.1667rem] text-[1.11111rem] md:text-[1.25rem] font-medium uppercase leading-[1.3]'>
        More about me
        <span className='inline-flex w-[1.6667rem] h-[1.6667rem] relative ml-[0.56rem]'>
          <Image alt='arrow' src={arrowUpIcon} fill />
        </span>
      </button>
    </div>
  );
};

export default AboutMe;
