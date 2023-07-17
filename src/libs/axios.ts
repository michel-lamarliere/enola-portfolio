import { AxiosResponse, default as Axios } from "axios";

import { API_URL } from "config";

export type ApiError = {
  message: string;
  statusCode: number;
};

const instance = Axios.create({
  baseURL: API_URL,
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error): Promise<ApiError> => {
    const message = error.response?.data.message || error.message;
    const statusCode = error.response?.statusCode || error.response?.status;

    return Promise.reject({ message, statusCode });
  }
);

export const axios = instance;
