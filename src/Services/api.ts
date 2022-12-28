import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://soc-uat.emfi.uk/api/",
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
    let res = error.response;

    return Promise.reject(error);
  }
);

axiosClient.interceptors.request.use(
  function (request) {
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
