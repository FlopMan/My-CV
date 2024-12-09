import axiosInstance, { axiosV2Instance, endpoints } from "@/utils/axios";
import { getAllFile } from "./FileGetAll";

const FileService = {
  uploadSingleFile: (data: FormData) =>
    axiosInstance.post(endpoints.file.single, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  uploadMultipleFile: (data: FormData) =>
    axiosV2Instance.post(endpoints.file.single, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  getAllFile,
  deleteFile: (data: any) =>
    axiosV2Instance.post(endpoints.file.delete, JSON.stringify(data), {
      headers: {
        "Content-Type": "applications/json",
      },
    }),
};
export default FileService;
