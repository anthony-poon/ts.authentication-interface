import React, { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setLogout } from '@store/slice/authentication';
import { URLs } from '@url';
import { DefaultContainer } from '@component/layout/components/container/DefaultContainer';

const useOnMount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLogout());
    navigate(URLs.authorize_login);
  }, []);
}

const LogoutAppView = () => {
  useOnMount();
  return (
    <DefaultContainer variant={"sm"}>
      <Box textAlign={"center"}>
        <CircularProgress size={32} color="primary" />
      </Box>
    </DefaultContainer>

  )
}

export default LogoutAppView;