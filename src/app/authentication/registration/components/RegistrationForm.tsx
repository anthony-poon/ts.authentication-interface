import React from "react";
import { Box } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import FormTitle from '@component/form/FormTitle';
import { Subtitle } from '@component/text';
import FormTextInput from '@component/form/FormTextInput';
import FormSubmitButton from '@component/form/FormSubmitButton';
import FormContainer from '@component/form/FormContainer';
import { makeFormData } from '@hook/use-form-data';
import { setToastError } from '@store/slice/notification';
import { useDispatch } from 'react-redux';
import { RegisterAccountRequest } from '@api/authentication';
import FormPasswordInput from '@component/form/FormPasswordInput';
import CardLayout from '@component/layout/card/CardLayout';

type RegisterFormProps = {
  onSubmit: (data: RegisterAccountRequest) => Promise<void>;
}

type FormType = {
  username: string,
  email: string,
  displayName: string,
  password: string,
  passwordRepeat: string,
}

const useFormData = makeFormData<FormType>({
  username: "",
  email: "",
  displayName: "",
  password: "",
  passwordRepeat: "",
})


export const RegistrationForm = (props: RegisterFormProps) => {
  const dispatch = useDispatch();
  const { formData, makeFormChange } = useFormData();

  const handleSubmit = async () => {
    const { password, passwordRepeat, ...rest } = formData;
    if (formData.password !== formData.passwordRepeat) {
      dispatch(setToastError("Passwords don't match"));
      return;
    }
    await props.onSubmit({
      password,
      ...rest
    });
  }

  return (
    <CardLayout isCentered={true} size={"sm"}>
      <Box px={1}>
        <FormContainer onSubmit={handleSubmit}>
          <Box mb={4}>
            <Box mb={3}>
              <Box textAlign={"center"} my={5}>
                <AppRegistrationIcon style={{ fontSize: 42 }} color={"action"} />
              </Box>
              <Box mb={4}>
                <FormTitle align={"center"}>
                  Create a new account
                </FormTitle>
              </Box>
              <Subtitle>Basic Information</Subtitle>
              <FormTextInput
                label={"Username"}
                onChange={makeFormChange("username")}
                value={formData.username}
                isRequired={true}
              />
              <FormTextInput
                label={"Email"}
                onChange={makeFormChange("email")}
                value={formData.email}
                isRequired={true}
              />
              <FormTextInput
                label={"Display Name"}
                onChange={makeFormChange("displayName")}
                value={formData.displayName}
                isRequired={true}
              />
            </Box>
            <Box>
              <Subtitle>Security</Subtitle>
              <FormPasswordInput
                label={"Password"}
                onChange={makeFormChange("password")}
                value={formData.password}
                isRequired={true}
              />
              <FormPasswordInput
                label={"Password Repeat"}
                onChange={makeFormChange("passwordRepeat")}
                value={formData.passwordRepeat}
                isRequired={true}
              />
            </Box>
          </Box>
          <FormSubmitButton/>
        </FormContainer>
      </Box>
    </CardLayout>
  )
}