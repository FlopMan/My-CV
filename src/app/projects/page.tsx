import getDataAuth from "@/fetch/getDataAuth";
import IndexProjects from "@/sections/projects/IndexProjects";
import { endpoints } from "@/utils/axios";
import { SLUG_USER } from "@/utils/constants";

const Page = async () => {
  const dataProjects = await getDataAuth({
    api: endpoints.project.root + `?user_slug=${SLUG_USER}&p=1&limit=10`,
  });
  return <IndexProjects dataProjects={dataProjects} />;
};

export default Page;
