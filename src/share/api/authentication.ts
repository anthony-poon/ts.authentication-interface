import httpClient from "./client";
import env from '@env';
import { AxiosRequestConfig } from 'axios';

export type LoginRequest = {
  username: string,
  password: string,
  callback?: string|null,
}

export type RefreshRequest = {
  token: string,
}

export type ReauthenticateRequest = {
  password: string,
}

export type TOTPLoginRequest = {
  code: string,
  challenge: string,
}

export type Require2FAResponse = {
  type: 'REQUIRE_TWO_FA',
  challenge: string;
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
}

export type RegisterAccountRequest = {
  username: string,
  password: string,
  email: string,
  displayName: string,
}

export interface RequireValidationResponse {
  type: "REQUIRE_VALIDATION";
}

export interface SuccessRegistrationResponse {
  type: "SUCCESS";
  refresh: string;
}

export type RegistrationResponse =
  | RequireValidationResponse
  | SuccessRegistrationResponse;

export type LoginResponse = SuccessLoginResponse|Require2FAResponse|CallbackResponse;

export type ValidationRequest = {
  tokenValue: string;
}

const login = async (request: LoginRequest) => {
  const response = await httpClient.post<LoginResponse>("/authorize/token", {
    type: "DEFAULT",
    ...request
  }, {
    authentication: false
  } as AxiosRequestConfig);
  return response.data;
}

const refresh = async (request: RefreshRequest) => {
  const response = await httpClient.post<SuccessLoginResponse>("/authorize/token", {
    type: "REFRESH",
    ...request
  }, {
    authentication: false
  } as AxiosRequestConfig);
  return response.data;
}

const reauthenticate = async (request: ReauthenticateRequest) => {
  const response = await httpClient.post<SuccessLoginResponse>("/authorize/token", {
    type: "REAUTHENTICATE",
    ...request
  });
  return response.data;
}

const totp = async (request: TOTPLoginRequest) => {
  const response = await httpClient.post<SuccessLoginResponse>("/authorize/token", {
    type: "TOTP",
    ...request
  }, {
    authentication: false
  } as AxiosRequestConfig);
  return response.data;
}

const register = async (data: RegisterAccountRequest) => {
  const response = await httpClient.post<RegistrationResponse>("/authorize/registration", data, {
    authentication: false
  } as AxiosRequestConfig)
  return response.data;
}

const validate = async (data: ValidationRequest) => {
  await httpClient.post<void>("/authorize/validation", data, {
    authentication: false
  } as AxiosRequestConfig)
}

export const Authentication = {
  login,
  refresh,
  reauthenticate,
  totp,
  register,
  validate
}
