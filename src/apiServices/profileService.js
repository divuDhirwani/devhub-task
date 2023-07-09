import { axiosInstance } from "./axiosInstance";

export const profileApi = () =>
  axiosInstance.get("/profile").then((res) => res?.data);

export const updateProfileApi = () =>
  axiosInstance.post("/update_profile").then((res) => res);
