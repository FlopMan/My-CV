import getDataAuth from "@/fetch/getDataAuth";
import IndexDashboard from "@/sections/dashboard/IndexDashboard";
import { endpoints } from "@/utils/axios";

const page = async () => {
  const [dataTemplates, dataPortfolios] = await Promise.all([
    getDataAuth({
      api: endpoints.template.root,
    }),
    getDataAuth({
      api: endpoints.portfolio.root,
    }),
  ]);
  return (
    <IndexDashboard
      dataTemplates={dataTemplates}
      dataPortfolios={dataPortfolios}
    />
  );
};
export default page;
