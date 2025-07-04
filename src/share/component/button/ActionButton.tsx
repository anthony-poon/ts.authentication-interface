import React from "react";
import { Button, ButtonProps } from '@mui/material';

export const ActionButton = (props: ButtonProps) => {
  return (
    <Button {...props} variant={"contained"}>
      { props.children }
    </Button>
  )
}