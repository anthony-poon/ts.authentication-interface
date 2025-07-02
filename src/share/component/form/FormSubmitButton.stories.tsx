import React from 'react';
import FormSubmitButton from '@component/form/FormSubmitButton';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: FormSubmitButton,
  title: "Component/Form/Submit Button",
  args: {
    onClick: action("onClick"),
  },
} as Meta<typeof FormSubmitButton>;

export const Default: StoryObj<typeof FormSubmitButton> = {}

export const Loading: StoryObj<typeof FormSubmitButton> = {
  args: {
    isLoading: true,
  }
}

export const Disabled: StoryObj<typeof FormSubmitButton> = {
  args: {
    isDisabled: true,
  }
}