import React from "react";
import { UpdateProfileAppView } from './UpdateProfileAppView';
import API from '@api/index';

export const UpdateProfileApp = () => {
  return (
    <UpdateProfileAppView
      onMount={API.User.Profile.getOne}
      onSubmit={API.User.Profile.updateOne}
    />
  )
}