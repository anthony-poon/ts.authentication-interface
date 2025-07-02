import httpClient from '@api/client';

export type GetProfileResponse = {
  displayName: string;
  email: string;
}

export type UpdateProfileRequest = {
  displayName: string;
  email: string;
}

export type UpdatePasswordRequest = {
  oldPassword: string;
  newPassword: string;
}
export const getOne = async () => {
  const response = await httpClient.get<GetProfileResponse>("/user/profile");
  return response.data;
}

export const updateOne = async (formData: UpdateProfileRequest) => {
  await httpClient.put<void>("/user/profile", formData);
}

export const updatePassword = async (formData: UpdatePasswordRequest) => {
  await httpClient.put<void>("/user/profile/password", formData)
}