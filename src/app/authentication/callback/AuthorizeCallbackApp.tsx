import React from 'react';
import AuthorizeCallbackAppView from './AuthorizeCallbackAppView';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setToast, setToastError } from '@store/slice/notification';
import { setLogin } from '@store/slice/authentication';
import API from '@api/index';

const AuthorizeCallbackApp = () => {
  return (
    <AuthorizeCallbackAppView authentication={API.Authentication}/>
  )
}

export default AuthorizeCallbackApp;