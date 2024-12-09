import getDataAuth from "@/fetch/getDataAuth";
import IndexDetailBuilderProject from "@/sections/projects/IndexDetailBuilderProject";
import { endpoints } from "@/utils/axios";

const Page = async ({ params }: { params: { id: string } }) => {
  const dataProject = await getDataAuth({
    api: endpoints.project.projectById + `${params.id}`,
  });
  return <IndexDetailBuilderProject dataProject={dataProject} />;
};

export default Page;
