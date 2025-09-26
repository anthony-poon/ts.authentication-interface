import UsernameLoginAppView from '../login/username/UsernameLoginAppView';
import { action } from '@storybook/addon-actions';
import AuthorizeCallbackAppView from './AuthorizeCallbackAppView';
import { MockAuthentication } from '../../../../.storybook/mock/api/authentication';

export default {
  component: AuthorizeCallbackAppView,
  title: "Application/Authentication/Callback",
  layout: "fullscreen",
  args: {
    authentication: MockAuthentication,
  },
};

export const Default = {};