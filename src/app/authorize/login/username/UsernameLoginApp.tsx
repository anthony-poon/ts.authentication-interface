import React from 'react';
import UsernameLoginAppView from './UsernameLoginAppView';
import { useLoader } from '@hook/use-loader';
import API from '@api/index';
import { useDispatch } from 'react-redux';
import { setLogin } from '@store/slice/authentication';
import { AppDispatch } from '@store/index';
import { setToast } from '@store/slice/notification';
import { useLocation, useNavigate } from 'react-router';
import { LoginRequest } from '@api/authentication';
import URLs from '@url';

const useSubmit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, setLoading } = useLoader();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const callback = query.get("callback") || null;
  const redirect = query.get("redirect") || null;
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
        navigate(redirect ? redirect : URLs.home);
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
  return (
    <UsernameLoginAppView onSubmit={handleSubmit} isSubmitting={isSubmitting}/>
  )
}

export default UsernameLoginApp;