import React from "react";
import { Box, Typography } from '@mui/material';

type FormTitleProps = React.PropsWithChildren<{
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}>

const FormTitle = (props: FormTitleProps) => {
  return (
    <Box mb={3} textAlign={props.align}>
      <Typography variant="h5">{ props.children }</Typography>
      { props.subtitle && (
        <Typography variant="subtitle2" color="textSecondary">{ props.subtitle }</Typography>
      ) }
    </Box>
  )
}

export default FormTitle;