import axiosInstance, { axiosV2Instance, endpoints } from "@/utils/axios";
import { add, isEmpty } from "lodash";

const defaultParams = {
  p: 1,
  limit: 10,
  user_slug: "phat-le-thanh",
};

const ProjectService = {
  getAllProject: async (params?: any) => {
    try {
      const { data } = await axiosInstance.get(endpoints.project.root, {
        params: isEmpty(params)
          ? defaultParams
          : {
              ...params,
            },
      });
      return data;
    } catch (error) {
      throw error;
    }
  },
  addProject: async (data: any) => {
    try {
      const res = await axiosV2Instance.post(
        endpoints.project.add,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "applications/json",
          },
        }
      );
      return res;
    } catch (error) {
      return error;
    }
  },
};
export default ProjectService;
