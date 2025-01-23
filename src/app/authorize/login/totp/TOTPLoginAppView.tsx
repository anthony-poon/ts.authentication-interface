import React from "react";
import { Box } from '@mui/material';
import { makeFormData } from '@hook/use-form-data';
import FormContainer from '@component/form/FormContainer';
import FormNumberInput from '@component/form/FormNumberInput';
import { SubTitle, Title } from '@component/text';
import FormSubmitButton from '@component/form/FormSubmitButton';
import CardLayout from '@component/layout/card/CardLayout';

type LoginAppViewProps = {
  isSubmitting: boolean;
  onSubmit: (request: FormDataType) => Promise<void>;
}

type FormDataType = {
  code: string;
}

const useFormData = makeFormData({
  code: "",
})

const TOTPLoginAppView = (props: LoginAppViewProps) => {
  const { formData, makeFormChange } = useFormData();

  const handleSubmit = async () => {
    await props.onSubmit({
      code: formData.code,
    });
  }

  return (
    <CardLayout size={"sm"} isCentered={true}>
      <Box mx={2} my={5}>
        <FormContainer onSubmit={handleSubmit}>
          <Box mb={1}>
            <Title>Two Factor Authentication</Title>
          </Box>
          <Box mb={4}>
            <SubTitle>Open the authenticator app and that you used to setup the two factor authentication. Type the security code provided by the application.</SubTitle>
          </Box>
          <FormNumberInput
            label={"Code"}
            value={formData.code}
            onChange={makeFormChange("code")}
            length={6}
            required={true}
          />
          <FormSubmitButton
            onClick={handleSubmit}
          />
        </FormContainer>
      </Box>
    </CardLayout>
  )
}

export default TOTPLoginAppView;