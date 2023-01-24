import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1ODM5IiwianRpIjoiNWFiODU0MDk5YjNhZWViNTRiODIwYmZlMzU3ZmIwZWM3NDdmNmFmZjI3MTA4OWM1NDA2YjFhNzk4NTU3YTFlZjNlYjQ0Mzg2Nzk3MGMyMzYiLCJpYXQiOjE2NzQ1MzQ4NzksIm5iZiI6MTY3NDUzNDg3OSwiZXhwIjoxNzA2MDcwODc5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.e-4WMCTVQBzdsdmsSAjZ2g0XR8g7hbxXuo95zcCnQwzJhO_m3Wzpgb7RNQug5OLSeDWEdbTlkVOB3q108NSQMmYMliqrM8_q1VSPVh2C0wau_gTE7HSCJIk0V4eNMZ9Xy2margDm09_d2vDLR8S9pgwerIC3lwLRYtvhc99M_DDQ_fjIOruOBLQ204c4VyzUnMWxDdku9M-yjFyDtjd2hd0ljHKyX5O1DRb5KaA7bhj9A3cKgsCFCFx_H5OWokccaCgyChx7uXYbIiA0YqaqfVid70qmVm3Ve3XEaHSWXTOSD83jaK1wWyMFDnBc664eDsFPtc83WbT_CHpqHgnPxNgFnw69Wlj5_vjsJiK0fNElGEZi9d6ypZ3AD48d2UqM5R2CqNXpgPQASCIA4fy1aBePgHu33lehovk-Sz4MFR8XuCK2SWR5xFbcSujzozYWjVL8CZr2M79KCEuJR9nFx5Jfsu2bv239yLw3FTITJ8Uo_0oAML-fhGutfC-3KvUBQoWQt1LoPwZNw4qaz17Ly92YFl-ejLeTPL-o9cywbF4-ezXcPIC8F9YDGqrzMKkIwRnUeSXL6vYRRhtK4lV39HBoHCtbzCZVzk0RuX0fM6cHZZb0JDE5ek30Qmx4HuDA7lnmdryOblOiGHTEMgs1K3a4T1DPLJT8tXPc247TyQs`;

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
export const axiosClientV2 = axios.create({
  baseURL: `${publicRuntimeConfig.baseURLV2}/`,
  headers: {
    // Accept: "*/*",
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-requested-with": "XMLHttpRequest",
  },
});
export const axiosClientV3 = axios.create({
  baseURL: `${publicRuntimeConfig.baseURLV3}/`,
  headers: {
    // Accept: "*/*",
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-requested-with": "XMLHttpRequest",
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
axiosClientV2.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    let res = error;
    console.log(res, "reser");
    return Promise.reject(error);
  }
);
axiosClientV3.interceptors.response.use(
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
axiosClientV2.interceptors.request.use(
  function (request) {
    return request;
  },
  function (error) {
    // console.log(res, "err");
    return Promise.reject(error);
  }
);
axiosClientV3.interceptors.request.use(
  function (request) {
    return request;
  },
  function (error) {
    // console.log(res, "err");
    return Promise.reject(error);
  }
);

// export default axiosClient;
