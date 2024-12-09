import axios, { AxiosRequestConfig } from "axios";
import qs from "query-string";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: "none" });
  },
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;

// ----------------------------------------------------------------------

const axiosV2Instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: "none" });
  },
});

axiosV2Instance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosV2Instance.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export { axiosV2Instance };

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
  file: {
    single: "/file/upload",
    root: "/files",
    delete: "/file/delete",
  },
  auth: {
    refreshToken: "/user/refresh-token",
  },
  portfolio: {
    root: "/portfolios",
    preview: "/portfolios/preview",
    update: "/portfolio/update",
    portfolioById: "/portfolio/",
  },
  project: {
    root: "/projects",
    projectById: "/project/",
    add: "/project/add",
  },
  template: {
    root: "/templates",
  },
};
