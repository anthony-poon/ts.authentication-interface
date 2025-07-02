import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import FormContainer from '@component/form/FormContainer';
import FormTextInput from '@component/form/FormTextInput';
import { makeFormData } from '@hook/use-form-data';
import FormPasswordInput from '@component/form/FormPasswordInput';
import FormNumberInput from '@component/form/FormNumberInput';
import FormSubmitButton from '@component/form/FormSubmitButton';
import { action } from '@storybook/addon-actions';

export default {
  component: FormContainer,
  title: "Component/Form/Container",
} as Meta<typeof FormContainer>

type FormDataType = {
  text: string,
  number: string,
  password: string,
}

const useFormData = makeFormData<FormDataType>({
  text: "some-test",
  number: "1234",
  password: "some-password"
})

const handleSubmit = () =>  new Promise<void>((resolve) => {
  setTimeout(() => {
    action("Submit")();
    resolve();
  }, 5000)
});

const FormTemplate = () => {
  const { formData, makeFormChange } = useFormData();
  return (
    <>
      <FormTextInput
        label={"Enter text"}
        value={formData.text}
        onChange={makeFormChange("text")}
      />
      <FormNumberInput
        label={"Enter number"}
        value={formData.number}
        onChange={makeFormChange("number")}
      />
      <FormPasswordInput
        label={"Enter password"}
        value={formData.password}
        onChange={makeFormChange("password")}
      />
      <FormSubmitButton onClick={handleSubmit}/>
    </>
  )
}

export const Default: StoryObj<typeof FormContainer> = {
  render: () => {
    return (
      <FormContainer>
        <FormTemplate/>
      </FormContainer>
    )
  }
}

export const Loading: StoryObj<typeof FormContainer> = {
  render: () => {
    return (
      <FormContainer isLoading={true}>
        <FormTemplate/>
      </FormContainer>
    )
  }
}

export const Disabled: StoryObj<typeof FormContainer> = {
  render: () => {
    return (
      <FormContainer isDisabled={true}>
        <FormTemplate/>
      </FormContainer>
    )
  }
}
