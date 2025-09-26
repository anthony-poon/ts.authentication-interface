import React from "react"
import { RegistrationAppView } from './RegistrationAppView';
import API from '@api/index';

export const RegistrationApp = () => {
  return (
    <RegistrationAppView authentication={API.Authentication}/>
  )
}