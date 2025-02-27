import React, { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';

type AuthorizeCallbackAppViewProps = {
  onMount: () => void
}

const AuthorizeCallbackAppView = ({ onMount }: AuthorizeCallbackAppViewProps) => {
  useEffect(() => {
    onMount();
  }, []);

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