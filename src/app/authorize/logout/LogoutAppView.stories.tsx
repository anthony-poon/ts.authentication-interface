import { action } from '@storybook/addon-actions';
import LogoutAppView from './LogoutAppView';

export default {
  component: LogoutAppView,
  title: "Application/Authorize/Logout",
  layout: "fullscreen",
  args: {
    onMount: action('onMount'),
  },
};

export const Default = {};