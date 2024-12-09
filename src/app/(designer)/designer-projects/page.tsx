import Testimonial from "@/components/pages/designer-home/Testimonial";
import MainProjects from "@/components/pages/designer-project";
import Filter from "@/components/pages/designer-project/Filter";
import React from "react";

const Projects = () => {
  return (
    <div className=' bg-theme-main-background'>
      <MainProjects />
      <Testimonial />
    </div>
  );
};

export default Projects;
