import React from 'react';
import { AddTOTPAppView } from './AddTOTPAppView';
import { Meta, StoryObj } from '@storybook/react';
import { ValidateTOTPRequest } from '@api/user/totp';

export default {
  title: "Application/Setting/TOTP/Add Device",
  component: AddTOTPAppView,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onRegister: () => Promise.resolve({
      id: 1,
      url: "https://www.example.com",
      secret: "12345",
    }),
    onValidate: () => Promise.resolve({
      recoveries: [
        "recovery-1",
        "recovery-2",
        "recovery-3",
      ]
    }),
  }
} as Meta<typeof AddTOTPAppView>;

export const Default: StoryObj<typeof AddTOTPAppView> = {

}