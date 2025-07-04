import React from "react";
import { Button } from '@mui/material';
import { ButtonProps } from '@mui/material';

export const BlockButton = (props: ButtonProps) => {
  return (
    <Button fullWidth {...props} variant={"contained"}>
      { props.children }
    </Button>
  )
}