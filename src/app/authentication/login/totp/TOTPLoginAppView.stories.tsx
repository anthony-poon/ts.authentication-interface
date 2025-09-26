import { action } from "@storybook/addon-actions";
import TOTPLoginAppView from './TOTPLoginAppView';
import { Meta } from '@storybook/react';
import { SuccessLoginResponse } from '@api/authentication';

export default {
  component: TOTPLoginAppView,
  title: "Application/Authentication/TOTP Login",
  layout: "fullscreen",
  args: {
    onSubmit: () => Promise.resolve({
      type: 'SUCCESS',
      identity: "some-hash",
      roles: [
        "ROLE_USER"
      ],
      access: "some-access-token",
      refresh: "some-refresh-token",
    }),
  },
} as Meta<typeof TOTPLoginAppView>;

export const Default = {};