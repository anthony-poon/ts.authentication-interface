import {
  Authentication,
  LoginRequest, ReauthenticateRequest,
  RefreshRequest, RegisterAccountRequest, TOTPLoginRequest, ValidationRequest
} from '@api/authentication';
import { action } from '@storybook/addon-actions';
import { mockDelay } from '../helper';
import { request } from 'node:http';

export const MockAuthentication: typeof Authentication = {
  login: async (request: LoginRequest) => {
    action("Login")(request);
    await mockDelay();
    return {
      type: 'SUCCESS',
      identity: "some-identity-hash",
      roles: [
        "some-role"
      ],
      access: "some-access-token",
      refresh: "some-refresh-token",
    }
  },
  refresh: async (request: RefreshRequest) => {
    action("Refresh")(request);
    await mockDelay();
    return {
      type: 'SUCCESS',
      identity: "some-identity-hash",
      roles: [
        "some-role"
      ],
      access: "some-access-token",
      refresh: "some-refresh-token",
    }
  },
  reauthenticate: async (request: ReauthenticateRequest) => {
    action("Reauthenticate")(request);
    await mockDelay();
    return {
      type: 'SUCCESS',
      identity: "some-identity-hash",
      roles: ["some-role"],
      access: "some-access-token",
      refresh: "some-refresh-token",
    };
  },

  totp: async (request: TOTPLoginRequest) => {
    action("TOTP")(request);
    await mockDelay();
    return {
      type: 'SUCCESS',
      identity: "some-identity-hash",
      roles: ["some-role"],
      access: "some-access-token",
      refresh: "some-refresh-token",
    };
  },

  register: async (request: RegisterAccountRequest) => {
    action("Register")(request);
    await mockDelay();
    return {
      type: "SUCCESS",
      refresh: "some-refresh-token",
    };
  },

  validate: async (data: ValidationRequest) => {
    action("Validate")(data);
    await mockDelay();
  }
}