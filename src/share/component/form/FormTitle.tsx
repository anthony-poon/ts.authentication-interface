import React from "react";
import { Box, Typography } from '@mui/material';

type FormTitleProps = React.PropsWithChildren<{
  subtitle?: string;
}>

const FormTitle = (props: FormTitleProps) => {
  return (
    <Box mb={3}>
      <Typography variant="h5">{ props.children }</Typography>
      { props.subtitle && (
        <Typography variant="subtitle2" color="textSecondary">{ props.subtitle }</Typography>
      ) }
    </Box>
  )
}

export default FormTitle;