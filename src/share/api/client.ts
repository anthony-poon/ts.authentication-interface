import axios, { CreateAxiosDefaults } from 'axios';
import env from '@env';
import { setLogin, selectToken } from '@store/slice/authentication';
import API from '@api/index';
import store from '@store/index';

const httpClient = axios.create({
  baseURL: env.ENDPOINT_BASE_URL,
  authentication: true
})

httpClient.interceptors.request.use(
  async (request) => {
    if (!request.authentication) {
      return request;
    }
    const access = store.getState().authentication.tokens['access']?.tokenValue;
    const refresh = store.getState().authentication.tokens['refresh']?.tokenValue;
    if (access) {
      request.headers.Authorization = `Bearer ${access}`;
    } else if (refresh) {
      const newToken = await API.Authentication.refresh({
        token: refresh
      });
      store.dispatch(setLogin(newToken));
      request.headers.Authorization = `Bearer ${newToken}`;
    } else {
      return Promise.reject(new Error("Please login first."))
    }
    return request;
  },
  (error) => {
    console.error(error);
    return error;
  }
);

//
// httpClient.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject(errorHandler(error))
// );
//
// // Convert error into an object so that it became serializable
// const errorHandler = (error: unknown): { message: string; status?: number } => {
//   // TODO: Logger
//   console.error(error);
//   if (axios.isAxiosError(error)) {
//     return {
//       message: error.response?.data?.message || error.message || "An unknown error occurred.",
//       status: error.response?.status,
//     };
//   }
//
//   if (error instanceof Error) {
//     return { message: error.message };
//   }
//
//   return { message: "An unknown error occurred." };
// }

export default httpClient;