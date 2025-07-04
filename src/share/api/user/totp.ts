import httpClient from '@api/client';

export interface GetTOTPResponse {
  id: number;
  deviceName: string;
  createdAt: string;
  lastUsedAt: string;
}

export interface RegisterTOTPRequest {
  deviceName: string;
}

export interface RegisterTOTPResponse {
  id: number;
  url: string;
  secret: string;
}

export interface GetTOTPRecoveryResponse {
  code: string;
}

export interface ValidateTOTPRequest {
  code: string;
}

export interface ValidateTOTPResponse {
  recoveries: string[];
}

export const getDevices = async () => {
  const response = await httpClient.get<GetTOTPResponse[]>("/user/totp");
  return response.data;
};

export const registerDevice = async (data: RegisterTOTPRequest) => {
  const response = await httpClient.post<RegisterTOTPResponse>("/user/totp", data);
  return response.data;
};

export const validateDevice = async (id: number, data: ValidateTOTPRequest) => {
  const response = await httpClient.post<ValidateTOTPResponse>(`/user/totp/${id}/validation`, data);
  return response.data;
};

export const regenerateRecoveries = async () => {
  const response = await httpClient.post<GetTOTPRecoveryResponse[]>("/user/totp/recoveries");
  return response.data;
};

export const unregisterDevice = async (id: number) => {
  await httpClient.delete(`/user/totp/${id}`);
};
