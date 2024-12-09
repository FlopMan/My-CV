import React from "react";
import SkillItem from "./SkillItem";
import Count from "./Count";

export type SkillType = {
  icon: string;
  title: string;
  description: string;
};

export type CountType = {
  count: number;
  description: string;
};

const Skills = () => {
  const skills: SkillType[] = [
    {
      icon: "/assets/images/designer/octa.svg",
      title: "Branding design",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: "/assets/images/designer/octa.svg",
      title: "UX/UI design",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: "/assets/images/designer/octa.svg",
      title: "Motion design",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: "/assets/images/designer/octa.svg",
      title: "Social Media",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];

  const counts = [
    { count: 15, description: "Happy clients" },
    { count: 50, description: "Projects this year" },
  ];

  return (
    <div className='flex max-md:px-[1.39rem] py-[3.33rem] p-[6.67rem] md:gap-[6.67rem] max-md:flex-col'>
      <div className='md:w-[35.3472rem] flex flex-col flex-shrink-0 max-md:mb-[4.44rem]'>
        <h4 className='text-theme-primary-content text-[2.22222rem] md:text-[3.33333rem] leading-[1.2] font-medium max-md:mb-[1.67rem] mb-[2.22rem]'>
          The skills I possess will help make your project a success.
        </h4>
        <div className='flex flex-col gap-[0.55556rem]'>
          {counts.map((count, index) => (
            <Count key={"count" + index} item={count} />
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-[1.67rem] max-md:grid'>
        {skills.map((skill, index) => (
          <SkillItem key={"skill" + index} index={index + 1} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
