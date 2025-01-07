import httpClient from "./client";

export type LoginRequest = {
  username: string,
  password: string,
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
  token: string[];
}

export type LoginResponse = {
  type: 'SUCCESS',
  identity: string;
  roles: string[];
  access: string,
  refresh: string
}
export const login = async (request: LoginRequest) => {
  const response = await httpClient.post<LoginResponse|Require2FAResponse>("/authentication/token", {
    type: "DEFAULT",
    ...request
  });
  return response.data;
}

export const refresh = async (request: RefreshRequest) => {
  const response = await httpClient.post<LoginResponse>("/authentication/token", {
    type: "REFRESH",
    ...request
  });
  return response.data;
}

export const reauthenticate = async (request: ReauthenticateRequest) => {
  const response = await httpClient.post<LoginResponse>("/authentication/token", {
    type: "REAUTHENTICATE",
    ...request
  });
  return response.data;
}
