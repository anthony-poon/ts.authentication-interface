import UsernameLoginAppView from '../login/username/UsernameLoginAppView';
import { action } from '@storybook/addon-actions';
import AuthorizeCallbackAppView from './AuthorizeCallbackAppView';

export default {
  component: AuthorizeCallbackAppView,
  title: "Application/Authorize/Callback",
  layout: "fullscreen",
  args: {
    onMount: action('onMount'),
  },
};

export const Default = {};