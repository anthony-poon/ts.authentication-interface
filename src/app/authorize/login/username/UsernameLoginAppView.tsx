import React from "react";
import { Box } from '@mui/material';
import FormTextInput from '@component/form/FormTextInput';
import FormSubmitButton from '@component/form/FormSubmitButton';
import { makeFormData } from '@hook/use-form-data';
import FormContainer from '@component/form/FormContainer';
import { Subtitle, Title } from '@component/text';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import FormPasswordInput from '@component/form/FormPasswordInput';
import CardLayout from '@component/layout/card/CardLayout';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/index';
import { useLoader } from '@hook/use-loader';
import { LoginRequest, LoginResponse } from '@api/authentication';
import API from '@api/index';
import { setToast } from '@store/slice/notification';
import { setLogin } from '@store/slice/authentication';
import URLs from '@url';

type LoginAppViewProps = {
  login: (request: LoginRequest) => Promise<LoginResponse>;
}

type FormDataType = {
  username: string;
  password: string;
}

const useFormData = makeFormData<FormDataType>({
  username: "",
  password: "",
})

const useSubmit = (props: LoginAppViewProps, formData: FormDataType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { setLoading } = useLoader();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const callback = query.get("callback") || null;
  const redirect = query.get("redirect") || null;
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const authentication = await props.login({
        ...formData,
        callback,
      });
      if (authentication.type == 'SUCCESS') {
        dispatch(setToast("Authentication successful."));
        dispatch(setLogin(authentication));
        navigate(redirect ? redirect : URLs.home);
      } else if (authentication.type == 'CALLBACK') {
        window.location.href = authentication.callback;
      }
    } catch (err) {
      dispatch(setToast(err as Error));
    } finally {
      setLoading(false);
    }
  }

  return { handleSubmit }
}

const UsernameLoginAppView = (props: LoginAppViewProps) => {
  const { formData, makeFormChange } = useFormData();
  const { handleSubmit } = useSubmit(props, formData);

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
            <Subtitle>
              Need an account? Create an account here
            </Subtitle>
          </Box>
          <FormTextInput
            label={"Username"}
            value={formData.username}
            onChange={makeFormChange("username")}
            isRequired={true}
          />
          <FormPasswordInput
            label={"Password"}
            value={formData.password}
            onChange={makeFormChange("password")}
            isRequired={true}
          />
          <FormSubmitButton
            onClick={handleSubmit}
          />
        </FormContainer>
      </Box>
    </CardLayout>
  )
}

export default UsernameLoginAppView;