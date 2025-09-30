import { Meta, StoryObj } from '@storybook/react';
import FormNumberInput from '@component/form/FormNumberInput';
import React from 'react';

export default {
  component: FormNumberInput,
  title: "Component/Form/Input",
  args: {
    label: "Enter number",
  },
  render: (args) => {
    const [value,setValue] = React.useState<string>();
    return (
      <FormNumberInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    )
  }
} as Meta<typeof FormNumberInput>;

export const Number: StoryObj<typeof FormNumberInput> = {}