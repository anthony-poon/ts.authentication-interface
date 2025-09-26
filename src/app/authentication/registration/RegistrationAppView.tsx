import React from 'react';
import CardLayout from '@component/layout/card/CardLayout';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import { setToast } from '@store/slice/notification';
import {
  Authentication,
  RegisterAccountRequest
} from '@api/authentication';
import { Box } from '@mui/material';
import { RegistrationForm } from './components/RegistrationForm';
import { RequireValidationPrompt } from './components/RequireValidationPrompt';
import { setLogin } from '@store/slice/authentication';
import URLs from '@url';

enum FormStep {
  REGISTRATION_FORM = 'registration_form',
  REQUIRE_VALIDATION = 'require_validation'
}

type RegisterAppViewProps = {
  authentication: typeof Authentication;
}
const useAction = (props: RegisterAppViewProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const step = searchParams.get("step") as FormStep || FormStep.REGISTRATION_FORM;

  // TODO: Send mail and resent mail
  const handleSubmit = async (data: RegisterAccountRequest) => {
    try {
      const response = await props.authentication.register(data);
      if (response.type === "SUCCESS") {
        const authentication = await props.authentication.refresh({
          token: response.refresh
        })
        dispatch(setLogin(authentication));
        navigate(URLs.authorize.login);
      } else if (response.type === "REQUIRE_VALIDATION") {
        navigate(URLs.registration.index + "?step=" + FormStep.REQUIRE_VALIDATION);
      }
    } catch (e) {
      console.log(e);
      dispatch(setToast(e));
    }
  }

  return { step, handleSubmit }
}

export const RegistrationAppView = (props: RegisterAppViewProps) => {
  const { step, handleSubmit } = useAction(props);
  return (
    <>
      { step === FormStep.REGISTRATION_FORM ? (
        <RegistrationForm
          onSubmit={handleSubmit}
        />
      ) : step === FormStep.REQUIRE_VALIDATION ? (
        <RequireValidationPrompt/>
      ) : null }
    </>
  )
}