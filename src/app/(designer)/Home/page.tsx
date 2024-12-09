import AboutMe from "@/components/pages/designer-home/AboutMe";
import Banner from "@/components/pages/designer-home/Banner";
import FeaturedWork from "@/components/pages/designer-home/FeaturedWork";
import Skills from "@/components/pages/designer-home/Skills";
import Testimonial from "@/components/pages/designer-home/Testimonial";
import React from "react";

const Home = () => {
  return (
    <div className='bg-theme-main-background'>
      <Banner />
      <AboutMe />
      <FeaturedWork />
      <Skills />
      <Testimonial />
    </div>
  );
};

export default Home;
