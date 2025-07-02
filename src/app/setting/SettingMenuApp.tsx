import React from "react"
import DefaultLayout from '../DefaultLayout';
import { ActionList } from '@component/list/ActionList';
import { NavigableAction } from '@component/list/NavigableAction';
import { ActionListHeader } from '@component/list/ActionListHeader';
import { useNavigate } from 'react-router';
import URLs from '@url';


export const SettingMenuApp = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout maxWidth={"md"} align={"center"}>
      <ActionList title={"Setting"}>
        <ActionListHeader>General</ActionListHeader>
        <NavigableAction onClick={() => navigate(URLs.setting.profile)}>
          Profile
        </NavigableAction>
        <NavigableAction onClick={() => navigate(URLs.setting.password)}>
          Change Password
        </NavigableAction>
        <NavigableAction onClick={() => navigate(URLs.setting.totp)}>
          Two Factor Authentication
        </NavigableAction>
      </ActionList>
    </DefaultLayout>
  )
}