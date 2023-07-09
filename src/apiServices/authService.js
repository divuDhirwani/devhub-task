import { axiosInstance } from "./axiosInstance";

export const loginMobileApi = () =>
  axiosInstance.post("/login_mobile").then((res) => res);

export const loginEmailApi = () =>
  axiosInstance.post("/login_email").then((res) => res);
export const registerApi = () =>
  axiosInstance.post("/register").then((res) => res);
