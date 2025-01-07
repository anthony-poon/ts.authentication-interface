import React from "react";
import { Box, Typography } from '@mui/material';
import AppContainer from '@component/container/AppContainer';
import FormTextInput from '@component/form/FormTextInput';
import FormSubmitButton from '@component/form/FormSubmitButton';
import { makeFormData } from '@hook/use-form-data';
import FormContainer from '@component/form/FormContainer';
import { LoginRequest } from '@api/authentication';

type LoginAppViewProps = {
  isSubmitting: boolean;
  onSubmit: (request: LoginRequest) => Promise<void>;
}

const useFormData = makeFormData({
  username: "",
  password: "",
})
const LoginAppView = (props: LoginAppViewProps) => {
  const { formData, makeFormChange } = useFormData();

  const handleSubmit = async () => {
    await props.onSubmit({
      username: formData.username,
      password: formData.password
    });
  }

  return (
    <AppContainer size={"sm"}>
      <FormContainer onSubmit={handleSubmit}>
        <Box mb={2}>
          <Typography variant="h3">
            Log in
          </Typography>
        </Box>
        <Box mb={5}>
          <Typography variant="subtitle2">
            Need an account? Create an account here
          </Typography>
        </Box>
        <FormTextInput
          label={"Username"}
          value={formData.username}
          onChange={makeFormChange("username")}
        />
        <FormTextInput
          label={"Password"}
          value={formData.password}
          onChange={makeFormChange("password")}
        />
        <FormSubmitButton/>
      </FormContainer>
    </AppContainer>
  )
}

export default LoginAppView;