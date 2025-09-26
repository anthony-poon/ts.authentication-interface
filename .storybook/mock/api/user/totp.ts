import {
  GetTOTPRecoveryResponse,
  GetTOTPResponse,
  RegisterTOTPRequest,
  RegisterTOTPResponse,
  ValidateTOTPRequest,
  ValidateTOTPResponse,
  TOTP
} from '@api/user/totp';
import { action } from '@storybook/addon-actions';
import { mockDelay } from '../../helper';

export const MockTOTP: typeof TOTP = {
  getDevices: async (): Promise<GetTOTPResponse[]> => {
    action("GetTOTPDevices")();
    await mockDelay();
    return [
      {
        id: 1,
        deviceName: "Mock Device",
        createdAt: new Date().toISOString(),
        lastUsedAt: new Date().toISOString(),
      },
    ];
  },

  registerDevice: async (data: RegisterTOTPRequest): Promise<RegisterTOTPResponse> => {
    action("RegisterTOTPDevice")(data);
    await mockDelay();
    return {
      id: 1,
      url: "otpauth://totp/Mock:mock@example.com?secret=MOCKSECRET&issuer=Mock",
      secret: "MOCKSECRET",
    };
  },

  validateDevice: async (id: number, data: ValidateTOTPRequest): Promise<ValidateTOTPResponse> => {
    action("ValidateTOTPDevice")({ id, ...data });
    await mockDelay();
    return {
      recoveries: ["recovery-code-1", "recovery-code-2", "recovery-code-3"],
    };
  },

  regenerateRecoveries: async (): Promise<GetTOTPRecoveryResponse[]> => {
    action("RegenerateTOTPRecoveries")();
    await mockDelay();
    return [
      { code: "new-recovery-code-1" },
      { code: "new-recovery-code-2" },
      { code: "new-recovery-code-3" },
    ];
  },

  unregisterDevice: async (id: number): Promise<void> => {
    action("UnregisterTOTPDevice")({ id });
    await mockDelay();
  },
};