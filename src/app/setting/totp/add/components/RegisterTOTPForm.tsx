import FormContainer from '@component/form/FormContainer';
import FormTitle from '@component/form/FormTitle';
import FormTextInput from '@component/form/FormTextInput';
import FormSubmitButton from '@component/form/FormSubmitButton';
import React from 'react';
import { makeFormData } from '@hook/use-form-data';

type FormType = {
  deviceName: string;
}

type RegisterTOTPFormProps = {
  onSubmit: (deviceName: string) => void;
}

const useFormData = makeFormData<FormType>({
  deviceName: "",
})

export const RegisterTOTPForm = (props: RegisterTOTPFormProps) => {
  const { formData, makeFormChange } = useFormData();
  const handleRegister = () => props.onSubmit(formData.deviceName);

  return (
    <FormContainer onSubmit={handleRegister}>
      <FormTitle
        subtitle={"Enter a name for your new device and reauthenticate with your password to proceed."}
      >
        Add New Device
      </FormTitle>
      <FormTextInput
        label={"Device Name"}
        subLabel={"e.g., \"Laptop\" or \"My iPhone\""}
        value={formData.deviceName}
        onChange={makeFormChange("deviceName")}
      />
      <FormSubmitButton/>
    </FormContainer>
  )
}