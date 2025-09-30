import { Alert, Snackbar } from '@mui/material';
import React from 'react';

export type ToastProps = {
  type?: 'success' | 'warning' | 'error' ;
  message: string;
  open: boolean;
  duration?: number;
  onClose?: () => void;
}

const Toast = (props: ToastProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      autoHideDuration={props.duration || 3000}
      open={props.open}
      onClose={props.onClose}
    >
      <Alert
        elevation={6}
        onClose={props.onClose}
        severity={props.type}
        variant="filled"
      >
        { props.message }
      </Alert>
    </Snackbar>
  )
}

export default Toast;