import AsideProfile from "./AsideProfile";
import ProjectlLst from "./ProjectList";
import PublicPortfolio from "./PublicPortfolio";

export default function IndexProfile() {
  return (
    <section className="mt-[1.675rem] px-[1.66667rem]">
      <div className="mb-[2.22rem]">
        <h2 className="text-[#121216] text-[2.22222rem] font-semibold font-roboto leading-[1.3] mb-[0.42rem]">
          Your Profile
        </h2>
        <p className="text-[#565657] text-[0.97222rem] leading-[1.35]">
          Add your past projects here. It should highlight your best skills and
          experience.
        </p>
      </div>
      <div className="relative flex items-start space-x-[2.22rem]">
        <AsideProfile />
        <div className="flex-1 space-y-[1.67rem]">
          <PublicPortfolio />
          <ProjectlLst />
        </div>
      </div>
    </section>
  );
}
