import {
  axiosClient,
  axiosClientV1,
  axiosClientV2,
  axiosClientV3,
} from "./api";

export const fetchData = async (url: string) => {
  try {
    const res = await axiosClient.get(url);
    console.log(res.data, "res");
    const data = await res.data;
    return data;
  } catch (error: any) {
    console.log(error.res);
    return error.res;
  }
};
export const fetchDataV1 = async (url: string) => {
  try {
    const res = await axiosClientV1.get(url);
    console.log(res.data, "res");
    const data = await res.data;
    return data;
  } catch (error: any) {
    console.log(error.res);
    return error.res;
  }
};

export const postData = async (url: string, data: any) => {
  try {
    const res = await axiosClient.post(url, data);
    return res;
  } catch (error: any) {
    console.log(error.res);
    return error.res;
  }
};

export const postDataV1 = async (url: string, data: any) => {
  try {
    const res = await axiosClientV1.post(url, data);
    return res;
  } catch (error: any) {
    console.log(error.res);
    return error.res;
  }
};
export const postDataV2 = async (url: string, data: any) => {
  try {
    const res = await axiosClientV2.post(url, data);
    return res;
  } catch (error: any) {
    console.log(error.res);
    return error.res;
  }
};
export const fetchtDataV3 = async (url: string) => {
  try {
    const res = await axiosClientV3.get(url);
    return res;
  } catch (error: any) {
    console.log(error.res);
    return error.res;
  }
};
