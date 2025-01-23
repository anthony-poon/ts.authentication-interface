import React from 'react';
import { CircularProgress } from '@mui/material';

export const LoadingIndicator = () => {
  return (
    <span
      style={{
        zIndex: 2,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <CircularProgress size={16} color="primary" />
    </span>
  );
};