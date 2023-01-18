import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

console.log(process.env.NEXT_PUBLIC_BASE_URL);
export const axiosClient = axios.create({
  baseURL: `${publicRuntimeConfig.baseURL}/api/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export const axiosClientV1 = axios.create({
  baseURL: `${publicRuntimeConfig.baseURLV1}/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    let res = error;
    console.log(res, "reser");
    return Promise.reject(error);
  }
);
axiosClientV1.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    let res = error;
    console.log(res, "reser");
    return Promise.reject(error);
  }
);

axiosClient.interceptors.request.use(
  function (request) {
    return request;
  },
  function (error) {
    // console.log(res, "err");
    return Promise.reject(error);
  }
);
axiosClientV1.interceptors.request.use(
  function (request) {
    return request;
  },
  function (error) {
    // console.log(res, "err");
    return Promise.reject(error);
  }
);

// export default axiosClient;
