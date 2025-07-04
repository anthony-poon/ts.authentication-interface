import React, { useState } from 'react';
import DefaultLayout from '../../../DefaultLayout';
import { makeFormData } from '@hook/use-form-data';
import { RegisterTOTPRequest, RegisterTOTPResponse, ValidateTOTPRequest, ValidateTOTPResponse } from '@api/user/totp';
import { useDispatch } from 'react-redux';
import { setToast } from '@store/slice/notification';
import { RegisterTOTPForm } from './components/RegisterTOTPForm';
import { ValidateTOTPForm } from './components/ValidateTOTPFrom';
import { DisplayRecoveriesView } from './components/DisplayRecoveriesView';
import { useNavigate } from 'react-router';
import URLs from '@url';

enum TOTPStep {
  REGISTER_DEVICE,
  VALIDATE_DEVICE,
  SHOW_RECOVERIES
}


type AddTOTPAppViewProps = {
  onRegister: (data: RegisterTOTPRequest) => Promise<RegisterTOTPResponse>,
  onValidate: (id: number, data: ValidateTOTPRequest) => Promise<ValidateTOTPResponse>,
}

const useAction = (props: AddTOTPAppViewProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep] = useState<TOTPStep>(TOTPStep.REGISTER_DEVICE);
  const [registration, setRegistration] = useState<RegisterTOTPResponse>();
  const [recoveries, setRecoveries] = useState<string[]>([]);
  const handleRegister = async (deviceName: string) => {
    try {
      const registration = await props.onRegister({
        deviceName,
      });
      setRegistration(registration);
      setStep(TOTPStep.VALIDATE_DEVICE);
    } catch (e) {
      dispatch(setToast(e));
    }
  }

  const handleValidate = async (code: string) => {
    try {
      if (!registration?.id) {
        dispatch(setToast("Please register a device first "));
        return;
      }
      const { recoveries } = await props.onValidate(registration.id, {
        code,
      });
      if (recoveries.length > 0) {
        setRecoveries(recoveries);
        setStep(TOTPStep.SHOW_RECOVERIES);
      } else {
        navigate(URLs.setting.totp.list);
      }
    } catch (e) {
      dispatch(setToast(e));
    }
  }

  return { registration, recoveries, handleRegister, handleValidate, step }
}

export const AddTOTPAppView = (props: AddTOTPAppViewProps) => {
  const { registration, recoveries, handleRegister, handleValidate, step } = useAction(props);
  return (
    <DefaultLayout align={"center"} maxWidth={"sm"}>
      { step === TOTPStep.REGISTER_DEVICE ? (
        <RegisterTOTPForm onSubmit={handleRegister}/>
      ) : step === TOTPStep.VALIDATE_DEVICE ? (
        <ValidateTOTPForm
          url={registration?.url || ""}
          secret={registration?.secret || ""}
          onSubmit={handleValidate}
        />
      ) : (
        <DisplayRecoveriesView recoveries={recoveries}/>
      ) }
    </DefaultLayout>
  )
}