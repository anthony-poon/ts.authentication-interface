import { Box, Typography } from '@mui/material';
import React from 'react';

type TextProps = React.PropsWithChildren<{
  gutter?: boolean
}>

export const Title = (props: TextProps) => {
  return (
    <Box mb={props.gutter ? 3 : 0}>
      <Typography variant="h5">
        { props.children }
      </Typography>
    </Box>
  )
}

export const Body = (props: TextProps) => {
  return (
    <Box mb={props.gutter ? 1 : 0}>
      <Typography variant="body2">
        { props.children }
      </Typography>
    </Box>
  )
}

export const Subtitle = (props: TextProps) => {
  return (
    <Box mb={props.gutter ? 2 : 0}>
      <Typography variant="subtitle2" color="textSecondary">
        { props.children }
      </Typography>
    </Box>
  )
}
