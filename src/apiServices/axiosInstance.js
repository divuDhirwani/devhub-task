import axios from "axios";
import { BASEURL } from "./config";
import { store } from "src/redux/store";

const token = store.getState();
console.log("Aa", `Bearer ${token}`);
const axiosInstance = axios.create({
  // Configuration
  baseURL: BASEURL,
  timeout: 30000,
  headers: {
    // Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token?.authReducer?.accessToken}`,
  },
});
export { axiosInstance };
