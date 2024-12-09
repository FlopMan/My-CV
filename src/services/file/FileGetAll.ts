import { axiosV2Instance, endpoints } from "@/utils/axios";

export const getAllFile = async (params: any) => {
  try {
    const { data }: any = await axiosV2Instance.get(endpoints.file.root, {
      params,
    });

    return data;
  } catch (error) {
    throw error;
  }
};
