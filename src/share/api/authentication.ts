import httpClient from "./client";
import env from '@env';

export type LoginRequest = {
  username: string,
  password: string,
  callback?: string|null,
}

export type RefreshRequest = {
  token: string,
}

export type ReauthenticateRequest = {
  token: string,
  password: string,
}

export type Require2FAResponse = {
  type: 'REQUIRE_TWO_FA',
  token: string;
}

export type CallbackResponse = {
  type: 'CALLBACK',
  callback: string;
}

export type SuccessLoginResponse = {
  type: 'SUCCESS',
  identity: string;
  roles: string[];
  access: string,
  refresh: string,
  redirection: string,
  state: string,
}

export type LoginResponse = SuccessLoginResponse|Require2FAResponse|CallbackResponse;

export const login = async (request: LoginRequest) => {
  const response = await httpClient.post<LoginResponse>("/authorize/token", {
    type: "DEFAULT",
    ...request
  }, {
    authentication: false
  });
  return response.data;
}

export const refresh = async (request: RefreshRequest) => {
  const response = await httpClient.post<SuccessLoginResponse>("/authorize/token", {
    type: "REFRESH",
    ...request
  }, {
    authentication: false
  });
  return response.data;
}

export const reauthenticate = async (request: ReauthenticateRequest) => {
  const response = await httpClient.post<SuccessLoginResponse>("/authorize/token", {
    type: "REAUTHENTICATE",
    ...request
  });
  return response.data;
}
