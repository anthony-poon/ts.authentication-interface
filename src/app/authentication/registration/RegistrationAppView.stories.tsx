import React, { useEffect } from 'react';
import { RegistrationAppView } from './RegistrationAppView';
import { Meta, StoryObj } from '@storybook/react';

import { MockAuthentication } from '../../../../.storybook/mock/api/authentication';
import { Navigate, Route, Routes } from 'react-router';
import URLs from '@url';

export default {
  title: "Application/Authentication/Registration",
  layout: "fullscreen",
  component: RegistrationAppView,
  args: {
    authentication: MockAuthentication
  }
} as Meta<typeof RegistrationAppView>

export const Default: StoryObj<typeof RegistrationAppView> = {
  render: (args) => (
    <Routes>
      <Route path={URLs.registration.index} element={<RegistrationAppView {...args} />} />
      <Route path={"*"} element={<Navigate to={URLs.registration.index}></Navigate>} />
    </Routes>
  )
}

export const RequireValidation: StoryObj<typeof RegistrationAppView> = {
  args: {
    authentication: {
      ...MockAuthentication,
      register: async () => Promise.resolve({
        type: "REQUIRE_VALIDATION",
      }),
    }
  },
  render: (args) => (
    <Routes>
      <Route path={"/"} element={<Navigate to={URLs.registration.index + "?step=require_validation"}></Navigate>} />
      <Route path={URLs.registration.index} element={<RegistrationAppView {...args} />} />
    </Routes>
  )
}