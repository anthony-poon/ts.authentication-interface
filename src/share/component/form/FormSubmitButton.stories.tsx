import FormSubmitButton from '@component/form/FormSubmitButton';
import { action } from '@storybook/addon-actions';

export default {
  component: FormSubmitButton,
  title: "Component/Form Submit Button",
  args: {
    onClick: action("onClick"),
  }
};

export const Default = {}

export const Submitting = {
  args: {
    loading: true,
    onClick: action("onClick"),
  }
}