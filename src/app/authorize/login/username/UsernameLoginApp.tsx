import React from 'react';
import UsernameLoginAppView from './UsernameLoginAppView';
import { useLoader } from '@hook/use-loader';
import API from '@api/index';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthenticated, selectToken, setLogin } from '@store/slice/authentication';
import { AppDispatch } from '@store/index';
import { setToast } from '@store/slice/notification';
import { useLocation } from 'react-router';
import { LoginRequest } from '@api/authentication';

const DEFAULT_REDIRECT = "/";

const useSubmit = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, setLoading } = useLoader();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const callback = query.get("callback") || null;
  const handleSubmit = async (formData: Pick<LoginRequest, "username"|"password">) => {
    setLoading(true);
    try {
      const authentication = await API.Authentication.login({
        ...formData,
        callback,
      });
      if (authentication.type == 'SUCCESS') {
        dispatch(setToast("Authentication successful."));
        dispatch(setLogin(authentication));
      } else if (authentication.type == 'CALLBACK') {
        window.location.href = authentication.callback;
      }
    } catch (err) {
      setLoading(false);
      dispatch(setToast(err as Error));
    }
  }

  return { isSubmitting: isLoading, handleSubmit }
}

const UsernameLoginApp = () => {
  const { isSubmitting, handleSubmit } = useSubmit();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const token = useSelector(selectToken('access'));
  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0
      }}>{ isAuthenticated ? `Logged in. Token: ${token}` : 'Not logged in'}</div>
      <UsernameLoginAppView onSubmit={handleSubmit} isSubmitting={isSubmitting}/>
    </>
  )
}

export default UsernameLoginApp;