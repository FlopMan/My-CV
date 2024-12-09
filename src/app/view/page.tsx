import Header from "@/components/layout/Header";
import AboutMe from "@/features/home/components/AboutMeSection";
import HomeBanner from "@/features/home/components/HomeBanner";
import SkillSection from "@/features/home/components/SkillSection";
import WorkSection from "@/features/home/components/WorkSection";

const Page = () => {
  return (
    <main className="w-full relative">
      <Header />
      <HomeBanner />
      <WorkSection />
      <AboutMe />
      <SkillSection />
    </main>
  );
};

export default Page;
