import React from 'react';
import { Box, Container } from '@mui/material';
import { makeFormData } from '@hook/use-form-data';
import FormContainer from '@component/form/FormContainer';
import FormNumberInput from '@component/form/FormNumberInput';
import { Subtitle, Title } from '@component/text';
import FormSubmitButton from '@component/form/FormSubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken, setLogin } from '@store/slice/authentication';
import { setToast, setToastError } from '@store/slice/notification';
import { Authentication } from '@api/authentication';
import { useNavigate } from 'react-router';
import { URLs } from '@url';
import { DefaultContainer } from '@component/layout/components/container/DefaultContainer';

type LoginAppViewProps = {
  authentication: typeof Authentication;
}

type FormDataType = {
  code: string;
}

const useFormData = makeFormData({
  code: "",
})

const useOnMount = (props: LoginAppViewProps, formData: FormDataType) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const challenge = useSelector(selectToken("two_fa_challenge"));

  const handleSubmit = async () => {
    try {
      if (!challenge) {
        dispatch(setToastError("Invalid state"));
        return;
      }
      const authentication = await props.authentication.totp({
        code: formData.code,
        challenge
      })
      dispatch(setLogin(authentication));
      dispatch(setToast("Authentication successful."));
      navigate(URLs.home);
    } catch (e) {
      dispatch(setToast(e));
    }
  }

  return { handleSubmit };
}

const TOTPLoginAppView = (props: LoginAppViewProps) => {
  const { formData, makeFormChange } = useFormData();
  const { handleSubmit } = useOnMount(props, formData);

  return (
    <DefaultContainer variant={"sm"}>
      <FormContainer onSubmit={handleSubmit}>
        <Box mb={1}>
          <Title>Two Factor Authentication</Title>
        </Box>
        <Box mb={4}>
          <Subtitle>Open the authenticator app and that you used to setup the two factor authentication. Type the security code provided by the application.</Subtitle>
        </Box>
        <FormNumberInput
          label={"Code"}
          value={formData.code}
          onChange={makeFormChange("code")}
          length={6}
          isRequired={true}
        />
        <FormSubmitButton/>
      </FormContainer>
    </DefaultContainer>
  )
}

export default TOTPLoginAppView;