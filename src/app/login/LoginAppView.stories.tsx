import { action } from "@storybook/addon-actions";
import LoginAppView from './LoginAppView';

export default {
  component: LoginAppView,
  title: "Application/Login",
  args: {
    onSubmit: action('onSubmit'),
  },
};

export const Default = {};