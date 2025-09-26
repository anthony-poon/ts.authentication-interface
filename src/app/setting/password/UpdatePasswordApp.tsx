import React from "react";
import { UpdatePasswordAppView } from './UpdatePasswordAppView';
import API from '@api/index';

export const UpdatePasswordApp = () => {
  return (
    <UpdatePasswordAppView
      profile={API.User.Profile}
    />
  )
}