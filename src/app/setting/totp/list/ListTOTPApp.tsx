import React from "react";
import { ListTOTPAppView } from './ListTOTPAppView';
import API from '@api/index';

export const ListTOTPApp = () => {
  return (
    <ListTOTPAppView
      getDevices={API.User.TOTP.getDevices}
      onDelete={API.User.TOTP.unregisterDevice}
    />
  )
}