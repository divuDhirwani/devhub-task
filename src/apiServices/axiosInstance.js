import axios from "axios";
import { BASEURL } from "./config";
import { store } from "src/redux/store";

const token = store.getState().authReducer.accessToken;
console.log("first", token);

const axiosInstance = axios.create({
  baseURL: BASEURL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export { axiosInstance };
