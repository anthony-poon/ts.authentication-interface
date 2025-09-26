import React from "react";
import { ValidationAppView } from './ValidationAppView';
import { Meta, StoryObj } from '@storybook/react';
import { Navigate, Route, Routes } from 'react-router';
import URLs from '@url';
import { MockAuthentication } from '../../../../.storybook/mock/api/authentication';

export default {
  title: "Application/Authentication/Validation",
  component: ValidationAppView,
  args: {
    authentication: MockAuthentication
  }
} as Meta<typeof ValidationAppView>

export const Default: StoryObj<typeof ValidationAppView> = {
  render: (args) => (
    <Routes>
      <Route path={URLs.registration.validation} element={<ValidationAppView {...args}/>}/>
      <Route path={"/"} element={<Navigate to={URLs.registration.validation.replace(":token", "some-validation-token")}/>}/>
    </Routes>
  )
}