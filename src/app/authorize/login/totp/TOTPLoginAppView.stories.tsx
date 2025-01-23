import { action } from "@storybook/addon-actions";
import TOTPLoginAppView from './TOTPLoginAppView';

export default {
  component: TOTPLoginAppView,
  title: "Application/Authorize/TOTP Login",
  layout: "fullscreen",
  args: {
    onSubmit: action('onSubmit'),
  },
};

export const Default = {};