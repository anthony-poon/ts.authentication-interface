import React from "react";
import { Box } from '@mui/material';
import FormTextInput from '@component/form/FormTextInput';
import FormSubmitButton from '@component/form/FormSubmitButton';
import { makeFormData } from '@hook/use-form-data';
import FormContainer from '@component/form/FormContainer';
import { SubTitle, Title } from '@component/text';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import FormPasswordInput from '@component/form/FormPasswordInput';
import CardLayout from '@component/layout/card/CardLayout';

type LoginAppViewProps = {
  isSubmitting: boolean;
  onSubmit: (request: FormDataType) => Promise<void>;
}

type FormDataType = {
  username: string;
  password: string;
}

const useFormData = makeFormData({
  username: "",
  password: "",
})
const UsernameLoginAppView = (props: LoginAppViewProps) => {
  const { formData, makeFormChange } = useFormData();

  const handleSubmit = async () => {
    await props.onSubmit({
      username: formData.username,
      password: formData.password
    });
  }

  return (
    <CardLayout size={"sm"} isCentered={true}>
      <Box mx={2} my={5}>
        <FormContainer onSubmit={handleSubmit}>
          <Box textAlign={"center"} my={3}>
            <LockPersonIcon style={{ fontSize: 42 }} color={"action"} />
          </Box>
          <Box textAlign={"center"}  mb={4}>
            <Title>
              Login
            </Title>
            <SubTitle>
              Need an account? Create an account here
            </SubTitle>
          </Box>
          <FormTextInput
            label={"Username"}
            value={formData.username}
            onChange={makeFormChange("username")}
            required={true}
          />
          <FormPasswordInput
            label={"Password"}
            value={formData.password}
            onChange={makeFormChange("password")}
            required={true}
          />
          <FormSubmitButton
            onClick={handleSubmit}
            loading={props.isSubmitting}
          />
        </FormContainer>
      </Box>
    </CardLayout>
  )
}

export default UsernameLoginAppView;