import dynamic from "next/dynamic";
const ContainerFormProvider = dynamic(() => import("./ContainerFormProvider"), {
  ssr: false,
});

const IndexHome = ({ data, dataInit, dataProjects }: any) => {
  return (
    <ContainerFormProvider
      dataProjects={dataProjects}
      data={data}
      dataInit={dataInit}
    />
  );
};

export default IndexHome;
