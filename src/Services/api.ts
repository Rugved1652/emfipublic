import axios from "axios";

console.log(process.env.BASE_URL);
const axiosClient = axios.create({
  baseURL: `${process.env.BASE_URL}/api/`,
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

axiosClient.interceptors.request.use(
  function (request) {
    return request;
  },
  function (error) {
    // console.log(res, "err");
    return Promise.reject(error);
  }
);

export default axiosClient;
