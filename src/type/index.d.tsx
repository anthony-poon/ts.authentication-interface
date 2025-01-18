import 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    authentication?: boolean
  }
}