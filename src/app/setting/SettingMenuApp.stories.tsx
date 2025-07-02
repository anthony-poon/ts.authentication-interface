import { SettingMenuApp } from './SettingMenuApp';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: "Application/Setting/Menu",
  component: SettingMenuApp,
  parameters: {
    layout: "fullscreen",
  }
} as Meta<typeof SettingMenuApp>;

export const Default: StoryObj<typeof SettingMenuApp> = {
}