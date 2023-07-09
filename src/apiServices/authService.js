import { axiosInstance } from "./axiosInstance";

export const loginMobileApi = (data) =>
  axiosInstance.post("/login_mobile", data).then((res) => res?.data?.data);

export const loginEmailApi = (data) =>
  axiosInstance.post("/login_email", data).then((res) => res);

export const registerApi = () =>
  axiosInstance.post("/register").then((res) => res);
