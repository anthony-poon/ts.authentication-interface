import React from 'react';
import LoginAppView from './LoginAppView';
import { useLoader } from '@hook/use-loader';
import API from '@api/index';
import { LoginRequest } from '@api/authentication';
import { useDispatch, useSelector } from 'react-redux';
import { addTokenByType, login, selectIsAuthenticated, selectToken } from '@store/slice/authentication';
import { AppDispatch } from '@store/index';

const useSubmit = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, setLoading } = useLoader();
  const handleSubmit = async (request: LoginRequest) => {
    setLoading(true);
    try {
      const authentication = await API.Authentication.login(request);
      if (authentication.type == 'SUCCESS') {
        dispatch(login(authentication))
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err)
    }
  }

  return { isSubmitting: isLoading, handleSubmit }
}

const LoginApp = () => {
  const { isSubmitting, handleSubmit } = useSubmit();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const token = useSelector(selectToken('access'));
  return (
    <>
      { isAuthenticated ? `Logged in. Token: ${token}` : 'Not logged in'}
      <LoginAppView onSubmit={handleSubmit} isSubmitting={isSubmitting}/>
    </>
  )
}

export default LoginApp;