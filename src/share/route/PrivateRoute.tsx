import { useSelector } from 'react-redux';
import { selectAuthentication } from '@store/slice/authentication';
import React, { useEffect } from 'react';
import { Outlet, Route, RouteProps, useLocation, useNavigate } from 'react-router';
import URLs from '@url';
import Random from '../utils/random';
import env from '@env';

type PrivateRouteProps = RouteProps & {
  requirement?: string;
}

const useOnMount = () => {
  const authorization = useSelector(selectAuthentication);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (authorization) {
      return;
    }
    const state = Random.alphanumeric(8);
    window.sessionStorage.setItem('state', state);
    const redirect = `${location.pathname}${location.search}${location.hash}`
    const callback = encodeURIComponent(`${env.AUTHENTICATION_CALLBACK_URL}?state=${state}&redirect=${redirect}`);
    navigate(URLs.authorize.login + `?callback=${callback}`);
  }, [authorization]);
  return {
    isAuthenticated: !!authorization,
  }
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { isAuthenticated } = useOnMount();
  return isAuthenticated ? <Outlet/> : null;
};

export default PrivateRoute;