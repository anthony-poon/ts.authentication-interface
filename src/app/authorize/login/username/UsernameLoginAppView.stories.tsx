import { action } from "@storybook/addon-actions";
import UsernameLoginAppView from './UsernameLoginAppView';

export default {
  component: UsernameLoginAppView,
  title: "Application/Authorize/Username Login",
  layout: "fullscreen",
  args: {
    onSubmit: action('onSubmit'),
  },
};

export const Default = {};