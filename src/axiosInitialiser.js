import axios from "axios";
import { BASE_URL, AUTH_TOKEN } from "./utils/constants";

const axiosInitializer = {
  config: () => {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN
      ? `Bearer ${AUTH_TOKEN}`
      : "";

    //Request Interceptor
    axios.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response Interceptor
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  },
};

export default axiosInitializer;
