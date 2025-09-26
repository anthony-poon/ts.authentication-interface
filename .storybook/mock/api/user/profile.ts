import { GetProfileResponse, Profile, UpdatePasswordRequest, UpdateProfileRequest } from '@api/user/profile';
import { action } from '@storybook/addon-actions';
import { mockDelay } from '../../helper';

export const MockProfile: typeof Profile = {
  getOne: async (): Promise<GetProfileResponse> => {
    action("GetProfile")();
    await mockDelay();
    return {
      displayName: "Mock User",
      email: "mock@example.com",
    };
  },

  updateOne: async (formData: UpdateProfileRequest): Promise<void> => {
    action("UpdateProfile")(formData);
    await mockDelay();
  },

  updatePassword: async (formData: UpdatePasswordRequest): Promise<void> => {
    action("UpdatePassword")(formData);
    await mockDelay();
  },
};