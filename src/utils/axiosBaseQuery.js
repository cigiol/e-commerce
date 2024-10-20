import axios from "axios";

import { API_URL } from "@constant/Variable";

const axiosParameterBuilder = async (config) => {
  const { method, headers = {}, data = {} } = config;
  // #region HEADERS
  const headerParameters = {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    ...headers,
  };
  // #endregion HEADERS

  // #region DATA
  let requestData = data;

  if (["POST", "PATCH", "PUT", "DELETE"].includes(method)) {
    requestData = JSON.stringify(data);
  }
  // #endregion DATA

  return {
    data: requestData,
    headers: headerParameters,
    method,
  };
};

const apiURLBuilder = (params) => {
  const { baseUrl = API_URL, path = "" } = params;
  return `${baseUrl}/${path}`;
};

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: API_URL }) =>
  async (queryParams) => {
    try {
      const { path, ...rest } = queryParams;
      const params = await axiosParameterBuilder(rest);
      const requestUrl = apiURLBuilder({ baseUrl, path });
      const { data } = await axios(requestUrl, params);
      return { data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

export const apiResHandler = (
  promise,
  callback = () => {},
  failCallback = () => {}
) => {
  promise
    .then((res) => {
      const { data, error } = res;
      if (!data && error)
        throw new Error(error?.data?.Message || "Something went wrong!");
      const { data: resData, message, status = true } = data;
      if (!status) {
        failCallback?.({ message });
        return;
      }
      callback?.(resData);
    })
    .catch((err) => {
      const { message } = err;
      failCallback?.({ errMsg: message });
    });
};
