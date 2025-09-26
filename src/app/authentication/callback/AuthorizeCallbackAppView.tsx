import React, { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setToast, setToastError } from '@store/slice/notification';
import { setLogin } from '@store/slice/authentication';
import { Authentication } from '@api/authentication';

type AuthorizeCallbackAppViewProps = {
  authentication: typeof Authentication;
}

const useQuery = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const redirect = query.get("redirect") || "/";
  const state = query.get("state") || null;
  const token = query.get("token") || null;
  return { redirect, state, token };
}

const useOnMount = (props: AuthorizeCallbackAppViewProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { redirect, state, token } = useQuery();

  useEffect(() => {
    (async () => {
      if (!redirect || !state || !token) {
        dispatch(setToastError("Invalid url"));
        return;
      }
      const localState = window.sessionStorage.getItem("state");
      if (localState != state) {
        dispatch(setToastError("Invalid state"));
      }
      try {
        const authentication = await props.authentication.refresh({ token });
        dispatch(setLogin(authentication));
        navigate(redirect);
      } catch (e) {
        console.error(e);
        dispatch(setToast(e))
      }
    })()
  }, []);
}

const AuthorizeCallbackAppView = (props: AuthorizeCallbackAppViewProps) => {
  useOnMount(props);

  return (
    <Box style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <CircularProgress size={32} color="primary" />
    </Box>
  )
}

export default AuthorizeCallbackAppView;