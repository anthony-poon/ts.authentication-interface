import React from 'react';
import DefaultUIProvider from "./DefaultUIProvider";
import { BrowserRouter, Route, Routes } from 'react-router';
import IndexApp from './index/IndexApp';
import UsernameLoginApp from './authentication/login/username/UsernameLoginApp';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { RootState } from '@store/index';
import Toast from '@component/Toast';
import { unsetToast } from '@store/slice/notification';
import URLs from '@url';
import HomeApp from './index/HomeApp';
import AuthorizeCallbackApp from './authentication/callback/AuthorizeCallbackApp';
import PrivateRoute from '@component/route/PrivateRoute';
import { CssBaseline } from '@mui/material';
import LogoutApp from './authentication/logout/LogoutApp';
import { SettingMenuApp } from './setting/menu/SettingMenuApp';
import { UpdatePasswordApp } from './setting/password/UpdatePasswordApp';
import { UpdateProfileApp } from './setting/profile/UpdateProfileApp';
import { ListTOTPApp } from './setting/totp/list/ListTOTPApp';
import { AddTOTPApp } from './setting/totp/add/AddTOTPApp';
import { TOTPLoginApp } from './authentication/login/totp/TOTPLoginApp';
import { ValidationApp } from './authentication/validation/ValidationApp';
import { RegistrationApp } from './authentication/registration/RegistrationApp';

const ToastNotificationProvider = () => {
  const dispatch = useDispatch();
  const toast = useSelector((state: RootState) => state.notification.toast)

  const handleClose = () => dispatch(unsetToast());
  return (
    <Toast
      message={toast?.message || ""}
      type={toast?.type}
      open={!!toast}
      onClose={handleClose}
    />
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <DefaultUIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexApp />} />
            <Route path={URLs.authorize.login} element={<UsernameLoginApp />} />
            <Route path={URLs.authorize.logout} element={<LogoutApp />} />
            <Route path={URLs.authorize.totp} element={<TOTPLoginApp />} />
            <Route path={URLs.authorize.callback} element={<AuthorizeCallbackApp />} />
            <Route path={URLs.registration.index} element={<RegistrationApp />} />
            <Route path={URLs.registration.validation} element={<ValidationApp />} />
            <Route element={<PrivateRoute/>}>
              <Route path={URLs.home} element={<HomeApp />} />
              <Route path={URLs.setting.menu} element={<SettingMenuApp />} />
              <Route path={URLs.setting.password} element={<UpdatePasswordApp />} />
              <Route path={URLs.setting.profile} element={<UpdateProfileApp />} />
              <Route path={URLs.setting.totp.list} element={<ListTOTPApp/>}/>
              <Route path={URLs.setting.totp.add} element={<AddTOTPApp/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastNotificationProvider/>
      </DefaultUIProvider>
    </Provider>
  );
}

export default App;