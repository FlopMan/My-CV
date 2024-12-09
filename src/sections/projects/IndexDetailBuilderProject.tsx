import dynamic from "next/dynamic";
const ContainerProjectFormProvider = dynamic(
  () => import("@/sections/home/ContainerProjectFormProvider"),
  {
    ssr: false,
  }
);

const IndexDetailBuilderProject = ({ dataProject }: any) => {
  return <ContainerProjectFormProvider data={{}} dataInit={{}} />;
};

export default IndexDetailBuilderProject;
