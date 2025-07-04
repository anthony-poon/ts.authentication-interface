import React, { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setLogout } from '@store/slice/authentication';
import URLs from '@url';

const useOnMount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLogout());
    navigate(URLs.authorize.login);
  }, []);
}

const LogoutAppView = () => {
  useOnMount();
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

export default LogoutAppView;