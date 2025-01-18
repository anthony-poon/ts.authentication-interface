import React from 'react';
import AuthorizeCallbackAppView from './AuthorizeCallbackAppView';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setToast, setToastError } from '@store/slice/notification';
import { setLogin } from '@store/slice/authentication';
import API from '@api/index';

const useQuery = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const redirect = query.get("redirect") || null;
  const state = query.get("state") || null;
  const token = query.get("token") || null;
  return { redirect, state, token };
}

const useOnMount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { redirect, state, token } = useQuery();
  const handleMount = async () => {
    if (!redirect || !state || !token) {
      dispatch(setToastError("Invalid url"));
      return;
    }
    const localState = window.sessionStorage.getItem("state");
    if (localState != state) {
      dispatch(setToastError("Invalid state"));
    }
    try {
      const authentication = await API.Authentication.refresh({ token });
      dispatch(setLogin(authentication));
      navigate(redirect);
    } catch (e) {
      console.error(e);
      dispatch(setToast(e))
    }
  }
  return { handleMount }
}

const AuthorizeCallbackApp = () => {
  const { handleMount } = useOnMount();
  return (
    <AuthorizeCallbackAppView onMount={handleMount}/>
  )
}

export default AuthorizeCallbackApp;