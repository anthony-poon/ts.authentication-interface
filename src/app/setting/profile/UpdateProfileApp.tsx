import React from "react";
import { UpdateProfileAppView } from './UpdateProfileAppView';
import API from '@api/index';

export const UpdateProfileApp = () => {
  return (
    <UpdateProfileAppView
      profile={API.User.Profile}
    />
  )
}