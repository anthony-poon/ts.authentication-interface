import React from 'react';
import { ListTOTPAppView } from './ListTOTPAppView';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Application/Setting/TOTP/List All',
  component: ListTOTPAppView,
  args: {
    getDevices: () => Promise.resolve([
      { id: 1, deviceName: "some-device-1", createdAt: (new Date()).toISOString(), lastUsedAt: (new Date()).toISOString() },
      { id: 2, deviceName: "some-device-2", createdAt: (new Date()).toISOString(), lastUsedAt: (new Date()).toISOString() },
      { id: 3, deviceName: "some-device-3", createdAt: (new Date()).toISOString(), lastUsedAt: (new Date()).toISOString() },
    ]),
    onDelete: async (id: number) => action("Deleted")(id)
  },
  parameters: {
    layout: "fullscreen",
  }
} as Meta<typeof ListTOTPAppView>

export const Default: StoryObj<typeof ListTOTPAppView> = {}