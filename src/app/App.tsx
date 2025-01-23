import React from 'react';
import DefaultUIProvider from "./DefaultUIProvider";
import { BrowserRouter, Route, Routes } from 'react-router';
import IndexApp from './index/IndexApp';
import UsernameLoginApp from './authorize/login/username/UsernameLoginApp';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { RootState } from '@store/index';
import Toast from '@component/Toast';
import { unsetToast } from '@store/slice/notification';
import URLs from '@url';
import HomeApp from './index/HomeApp';
import AuthorizeCallbackApp from './authorize/callback/AuthorizeCallbackApp';
import PrivateRoute from '@component/route/PrivateRoute';
import { CssBaseline } from '@mui/material';
import LogoutApp from './authorize/logout/LogoutApp';
import SettingApp from './setting/SettingApp';

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
            <Route path={URLs.authorize.callback} element={<AuthorizeCallbackApp />} />
            <Route element={<PrivateRoute/>}>
              <Route path={URLs.home} element={<HomeApp />} />
            </Route>
            <Route element={<PrivateRoute/>}>
              <Route path={URLs.setting} element={<SettingApp />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastNotificationProvider/>
      </DefaultUIProvider>
    </Provider>
  );
}

export default App;