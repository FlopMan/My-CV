import data from "@/data/data.json";

import ProjectCard from "./ProjectCard";

function ProjectList() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-14 max-lg:mt-6 max-lg:grid-cols-1 max-lg:gap-y-8">
      {data.projects.map((item: any, index) => {
        return (
          <ProjectCard
            key={index}
            item={item}
            imageProps={{
              width: 605,
              height: 405,
              className:
                "w-full aspect-[605/405] object-cover max-lg:aspect-[unset]",
            }}
          />
        );
      })}
    </div>
  );
}

export default ProjectList;
