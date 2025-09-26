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

const UsernameLoginApp = () => {
  return (
    <UsernameLoginAppView authentication={API.Authentication}/>
  )
}

export default UsernameLoginApp;