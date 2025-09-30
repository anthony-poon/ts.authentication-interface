import React from "react";
import { Button, ButtonProps, Typography } from '@mui/material';
import { Body } from '@component/text';

export const ActionButton = (props: ButtonProps) => {
  return (
    <Button {...props} variant={"contained"}>
      <Typography variant={props.size === "small" ? "caption" : undefined}>
        { props.children }
      </Typography>
    </Button>
  )
}