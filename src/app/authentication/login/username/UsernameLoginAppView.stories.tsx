import UsernameLoginAppView from './UsernameLoginAppView';
import { Meta } from '@storybook/react';
import { MockAuthentication } from '../../../../../.storybook/mock/api/authentication';

export default {
  title: "Application/Authentication/Username Login",
  layout: "fullscreen",
  component: UsernameLoginAppView,
  args: {
    authentication: MockAuthentication
  },
} as Meta<typeof UsernameLoginAppView>;

export const Default = {};