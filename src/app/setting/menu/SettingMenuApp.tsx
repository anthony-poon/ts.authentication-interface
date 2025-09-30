import React from "react"
import AppLayout from '../../AppLayout';
import { ActionList } from '@component/list/ActionList';
import { NavigableAction } from '@component/list/NavigableAction';
import { ActionListHeader } from '@component/list/ActionListHeader';
import { URLs } from '@url';
import { DefaultContainer } from '@component/layout/components/container/DefaultContainer';
import { Breadcrumb } from '@component/url/Breadcrumb';


export const SettingMenuApp = () => {
  return (
    <AppLayout>
      <DefaultContainer variant={"md"}>
        <Breadcrumb />
        <ActionList>
          <ActionListHeader>General</ActionListHeader>
          <NavigableAction to={URLs.setting_profile}>
            Profile
          </NavigableAction>
          <NavigableAction to={URLs.setting_password}>
            Change Password
          </NavigableAction>
          <NavigableAction to={URLs.setting_totp}>
            Two Factor Authentication
          </NavigableAction>
        </ActionList>
      </DefaultContainer>
    </AppLayout>
  )
}