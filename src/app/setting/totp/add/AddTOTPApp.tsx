import React from "react";
import { AddTOTPAppView } from './AddTOTPAppView';
import API from '@api/index';

export const AddTOTPApp = () => {
  return (
    <AddTOTPAppView
      onRegister={API.User.TOTP.registerDevice}
      onValidate={API.User.TOTP.validateDevice}
    />
  )
}