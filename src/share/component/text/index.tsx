import { Typography } from '@mui/material';
import React from 'react';

const TextProps = {

}

export const Title = (props: React.PropsWithChildren) => {
  return (
    <Typography variant="h4">
      { props.children }
    </Typography>
  )
}

export const Body = (props: React.PropsWithChildren) => {
  return (
    <Typography variant="body2">
      { props.children }
    </Typography>
  )
}

export const SubTitle = (props: React.PropsWithChildren) => {
  return (
    <Typography variant="subtitle2" color="textSecondary">
      { props.children }
    </Typography>
  )
}
