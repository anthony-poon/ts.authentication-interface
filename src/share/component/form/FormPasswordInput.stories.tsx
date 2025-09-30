import { Meta, StoryObj } from '@storybook/react';
import FormPasswordInput from '@component/form/FormPasswordInput';
import React from 'react';
import FormNumberInput from '@component/form/FormNumberInput';

export default {
  component: FormPasswordInput,
  title: "Component/Form/Input",
  args: {
    label: "Enter Password",
  },
  render: (args) => {
    const [value,setValue] = React.useState<string>();
    return (
      <FormPasswordInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    )
  }
} as Meta<typeof FormPasswordInput>;

export const Password: StoryObj<typeof FormPasswordInput> = {}