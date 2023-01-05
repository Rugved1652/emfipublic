import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://192.168.29.43:3000/api/",
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
